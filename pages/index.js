import Head from 'next/head'
import React, { useState } from 'react';

export default function Home() {
  const [origin, setOrigin] = useState('')
  const [destination, setDestination] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Origin: ${origin}, Destination: ${destination}`);
  };

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Safe Space</h1>
        <form onSubmit={handleSubmit} className="my-form">
          <div className="input-wrapper">
            <label htmlFor="start"></label>
            <input type="text" value={origin} onChange={(event) => setOrigin(event.target.value)} id="start" name="start" placeholder='Your location' />
          </div>

          <div className="input-wrapper">
            <label htmlFor="end"></label>
            <input type="text" id="end" name="end" placeholder='Where to?' />
          </div>
          <button>Get route</button>
        </form>

      </main>
    </>
  )
}
