import React from 'react';

const CenteredHeading = ({ heading }) => {
  return (
    <div style={{ textAlign: 'center', padding: '55px 0' }}>
      <h1>{heading}</h1>
    </div>
  );
};

export default CenteredHeading;
