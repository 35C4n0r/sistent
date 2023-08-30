import { FC } from 'react';
import { IconProps } from './types';

const DetailIcon: FC<IconProps> = ({ width, height, ...props }) => {
  return (
    <svg
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 205 162"
      {...props}
    >
      <path d="M0.00975227 68H22.6764V45.3333H0.00975227V68ZM0.00975227 113.333H22.6764V90.6667H0.00975227V113.333ZM0.00975227 22.6667H22.6764V0H0.00975227V22.6667ZM45.3431 68H204.01V45.3333H45.3431V68ZM45.3431 113.333H204.01V90.6667H45.3431V113.333ZM45.3431 0V22.6667H204.01V0H45.3431Z" />
      <path d="M0 161.667H22.6667V139H0V161.667ZM45.3333 139V161.667H204V139H45.3333Z" />
      <path d="M0.00975227 68H22.6764V45.3333H0.00975227V68ZM0.00975227 113.333H22.6764V90.6667H0.00975227V113.333ZM0.00975227 22.6667H22.6764V0H0.00975227V22.6667ZM45.3431 68H204.01V45.3333H45.3431V68ZM45.3431 113.333H204.01V90.6667H45.3431V113.333ZM45.3431 0V22.6667H204.01V0H45.3431Z" />
      <path d="M0 161.667H22.6667V139H0V161.667ZM45.3333 139V161.667H204V139H45.3333Z" />
    </svg>
  );
};

export default DetailIcon;