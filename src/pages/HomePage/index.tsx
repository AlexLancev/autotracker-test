import React from 'react';

import { PanelControl } from 'pages/HomePage/PanelControl';

import { AppBar } from './AppBar';
import { DeviceList } from './DeviceList';

export const HomePage: React.FC = () => {
  return (
    <>
      <AppBar />
      <PanelControl />
      <DeviceList />
    </>
  );
};
