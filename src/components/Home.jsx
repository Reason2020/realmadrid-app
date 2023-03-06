import React from 'react';
import homepage from '../utils/static/homepage.jpg';

const Home = () => {
  return (
    <main style={{ display: 'flex', flexDirection:'column', justifyContent: 'center', alignItems: 'center' }} >
        <img src={homepage} alt='trophies of realmadrid' style={{ width: '90vw', height: '75vh', marginTop: '1rem' }}/>
        <h1 style={{ color: '#004996'}}>121 Years of Legacy</h1>
    </main>
  )
}

export default Home
