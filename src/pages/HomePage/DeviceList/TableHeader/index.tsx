import React from 'react';
import { TableHead, TableRow, TableCell, Checkbox } from '@mui/material';

interface TableHeaderProps {
  setIsChecked: React.Dispatch<React.SetStateAction<boolean>>;
  isChecked: boolean;
}

export const TableHeader: React.FC<TableHeaderProps> = ({
  setIsChecked,
  isChecked,
}) => {
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding='checkbox'>
          <Checkbox checked={isChecked} onChange={handleCheckboxChange} />
        </TableCell>
        <TableCell>№</TableCell>
        <TableCell>Иконка</TableCell>
        <TableCell>Фотография</TableCell>
        <TableCell>Имя</TableCell>
        <TableCell>Создатель</TableCell>
        <TableCell>Учётная запись</TableCell>
        <TableCell>Категория</TableCell>
        <TableCell>Тип объекта</TableCell>
        <TableCell>ID</TableCell>
        <TableCell />
      </TableRow>
    </TableHead>
  );
};
