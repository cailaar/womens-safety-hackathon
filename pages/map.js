import React from 'react';

const MyPage = () => {
  return (
    <>
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <div style={{ flex: 1, padding: '2rem' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '2rem' }}>These are your safest options!</h1>
        <p style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>Welcome to our walking route planner! Our map below shows you the three best routes for your journey. We've analysed pedestrian traffic data and factored in the time of day to provide you with the most efficient and enjoyable routes. Choose the route that works best for you and take in the sights and sounds of the city on foot! Don't forget to wear comfortable shoes and stay hydrated.
        </p>

      </div>
      <div style={{ flex: 1 }}>
        <img src="/routsadded2.png" alt="My Image" style={{ maxWidth: '100%' }} />
      </div>
    </div>
    <div style={{ backgroundColor: '#F5F5F5', padding: '2rem' }}>
    <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>What Locals say about the best path:</h2>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ backgroundColor: '#fff', borderRadius: '0.5rem', padding: '1.5rem', marginBottom: '1rem', maxWidth: '60rem', boxShadow: '0 0 10px rgba(0,0,0,0.2)' }}>
          <p style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>I felt very safe walking along the route suggested by this website. There were plenty of people around and the streets were well-lit.</p>
          <p style={{ fontSize: '1rem', color: '#666' }}>— Jane D.</p>
        </div>
        <div style={{ backgroundColor: '#fff', borderRadius: '0.5rem', padding: '1.5rem', marginBottom: '1rem', maxWidth: '60rem', boxShadow: '0 0 10px rgba(0,0,0,0.2)' }}>
          <p style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>I was a bit nervous about walking in this area, but the route I took was well-traveled and I didn't encounter any problems.</p>
          <p style={{ fontSize: '1rem', color: '#666' }}>— John S.</p>
        </div>
        <div style={{ backgroundColor: '#fff', borderRadius: '0.5rem', padding: '1.5rem', marginBottom: '1rem', maxWidth: '60rem', boxShadow: '0 0 10px rgba(0,0,0,0.2)' }}>
          <p style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>I'm not usually comfortable walking alone at night, but I felt safe and secure on the route I took using this website.</p>
          <p style={{ fontSize: '1rem', color: '#666' }}>— Sarah M.</p>
        </div>
      </div>
    </div>
  </>
  );
};

export default MyPage;
