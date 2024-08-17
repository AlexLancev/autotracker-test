import React from 'react';

import { PanelControl } from 'components/PanelControl';

import { AppBar } from './AppBar';

export const HomePage: React.FC = () => {
  return (
    <>
      <AppBar />
      <PanelControl />
    </>
  );
};
