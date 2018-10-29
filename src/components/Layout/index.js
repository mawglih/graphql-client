import React from 'react';
import Navigation from 'containers/Navigation';

export default ({
  children,
}) => (
  <div>
    <Navigation />
    {children}
  </div>
);
