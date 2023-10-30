import {
  Button,
  ClickAwayListener,
  IconButton,
  MenuItem,
  Paper,
  Popper,
  Select,
  Tooltip
} from '@layer5/sistent-components';
import InputLabel from '@mui/material/InputLabel';
import React, { useState } from 'react';
import FilterIcon from '../../../../svg/src/icons/Filter/FilterIcon';

interface FilterColumn {
  name: string;
  options: { label: string; value: string }[];
}

interface UniversalFilterProps {
  filters: Record<string, FilterColumn>;
  selectedFilters: Record<string, string>;
  setSelectedFilters: React.Dispatch<React.SetStateAction<Record<string, string>>>;
  handleApplyFilter: () => void;
  showAllOption?: boolean;
}

const UniversalFilter: React.FC<UniversalFilterProps> = ({
  filters,
  selectedFilters,
  setSelectedFilters,
  handleApplyFilter,
  showAllOption = true
}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [open, setOpen] = useState(false);

  const handleFilterChange = (event: React.ChangeEvent<{ value: string }>, columnName: string) => {
    const value = event.target.value;

    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      [columnName]: value
    }));
  };

  const handleApplyOnClick = () => {
    handleClose();
    handleApplyFilter();
  };

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setOpen((previousOpen) => !previousOpen);
  };

  const canBeOpen = open && Boolean(anchorEl);
  const id = canBeOpen ? 'transition-popper' : undefined;

  const handleClose = () => {
    setAnchorEl(null);
    setOpen(false);
  };

  return (
    <div>
      <Tooltip title="Filter" arrow>
        <IconButton
          onClick={handleClick}
          sx={{
            '&:hover': {
              '& svg': {
                fill: '#00d3a9'
              }
            }
          }}
          disableRipple
        >
          <FilterIcon fill="#3c494f" />
        </IconButton>
      </Tooltip>
      <Popper
        id={id}
        open={open}
        anchorEl={anchorEl}
        placement="bottom-end"
        modifiers={{
          flip: {
            enabled: false
          },
          preventOverflow: {
            enabled: true,
            boundariesElement: 'scrollParent'
          }
        }}
        transition
      >
        <ClickAwayListener
          onClickAway={handleClose}
          mouseEvent="onMouseDown"
          touchEvent="onTouchStart"
        >
          <Paper
            sx={{
              padding: '1rem',
              paddingTop: '1.8rem',
              boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
              backgroundColor: '#f4f5f7'
            }}
          >
            {Object.keys(filters).map((filterColumn) => {
              const options = filters[filterColumn].options;
              return (
                <div key={filterColumn} role="presentation">
                  <InputLabel id={filters[filterColumn].name}>
                    {filters[filterColumn].name}
                  </InputLabel>
                  <Select
                    defaultValue="All"
                    key={filterColumn}
                    value={selectedFilters[filterColumn]}
                    onChange={(e: React.ChangeEvent<{ value: string }>) =>
                      handleFilterChange(e, filterColumn)
                    }
                    style={{
                      width: '15rem',
                      marginBottom: '1rem'
                    }}
                    inputProps={{ 'aria-label': 'Without label' }}
                    displayEmpty
                  >
                    {showAllOption && <MenuItem value="All">All</MenuItem>}
                    {options.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </Select>
                </div>
              );
            })}

            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Button variant="contained" onClick={handleApplyOnClick}>
                Apply
              </Button>
            </div>
          </Paper>
        </ClickAwayListener>
      </Popper>
    </div>
  );
};

export default UniversalFilter;