import React from 'react';

const MyPage = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <div style={{ flex: 1, padding: '2rem' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '2rem' }}>Welcome to Mind.org.uk</h1>
        <p style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>We're Mind, the mental health charity. We're here to make sure no one has to face a mental health problem alone.</p>
      </div>
      <div style={{ flex: 1 }}>
        <img src="/routesadded.png" alt="My Image" style={{ maxWidth: '100%' }} />
      </div>
    </div>
  );
};

export default MyPage;