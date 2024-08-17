import React from 'react';

import { PanelControl } from 'components/PanelControl';

import { AppBar } from './AppBar';
import { DataTable } from './DataTable';

export const HomePage: React.FC = () => {
  return (
    <>
      <AppBar />
      <PanelControl />
      <DataTable />
    </>
  );
};
