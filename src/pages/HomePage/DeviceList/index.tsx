import React, { useState } from 'react';
import { Table, TableBody, Paper, TableContainer } from '@mui/material';
import { useSelector } from 'react-redux';
import { RootState } from 'store/index';
import { TrackersType } from 'types/api/trackersType';

import { TableHeader } from '../DeviceList/TableHeader';
import { TableRowComponent } from '../DeviceList/TableRowComponent';

export const DeviceList: React.FC = () => {
  const [isChecked, setIsChecked] = useState(false);
  const { trackersArray, isLoading } = useSelector(
    (state: RootState) => state.trackers,
  );

  if (!trackersArray || isLoading) {
    return null;
  }

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHeader setIsChecked={setIsChecked} isChecked={isChecked} />
        <TableBody>
          {trackersArray.map((item: TrackersType, index: number) => (
            <TableRowComponent
              key={item.id || index}
              index={index}
              isChecked={isChecked}
              {...item}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
