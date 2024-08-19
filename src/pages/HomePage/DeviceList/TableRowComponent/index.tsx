import React from 'react';
import { TableRow, TableCell, Checkbox, IconButton } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { TrackersType } from 'types/api/trackersType';

import PersonIcon from '@mui/icons-material/Person';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';

interface TableRowComponentProps extends TrackersType {
  index: number;
  isChecked: boolean;
}

export const TableRowComponent: React.FC<TableRowComponentProps> = ({
  isChecked,
  index,
  ...item
}) => {
  return (
    <TableRow>
      <TableCell padding='checkbox'>
        <Checkbox checked={isChecked} />
      </TableCell>
      <TableCell>{index + 1}</TableCell>
      <TableCell>
        <PersonIcon />
      </TableCell>
      <TableCell>
        <DirectionsCarIcon />
      </TableCell>
      <TableCell>{item.name}</TableCell>
      <TableCell>{null}</TableCell>
      <TableCell>{null}</TableCell>
      <TableCell>{item.category}</TableCell>
      <TableCell>{null}</TableCell>
      <TableCell>{item.id}</TableCell>
      <TableCell>
        <IconButton>
          <MoreVertIcon />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};
