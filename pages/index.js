import Head from 'next/head'
import React, { useState } from 'react';
import { useRouter } from 'next/router';


export default function Home() {
  const [origin, setOrigin] = useState('')
  const [destination, setDestination] = useState('')
  const router = useRouter();

  const handleSubmit = (event) => {
    event.preventDefault()
    router.push('/map');
  };
  

  return (
    <>
      <Head>
        <title>Safe Space</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Safe Space</h1>
        <form onSubmit={handleSubmit} className="my-form">
          <div className="input-wrapper">
                <span className="fas fa-search"></span>
            <label htmlFor="start"></label>
            <input type="text" id="start" name="start" placeholder='Your location' />
          </div>

          <div className="input-wrapper">
                <span className="fas fa-search"></span>
            <label htmlFor="end"></label>
            <input type="text" id="end" name="end" placeholder='Where to?' />
          </div>
          <button>Get route</button>
        </form>

      </main>
    </>
  )
}
