import Head from 'next/head';
//import {React, useEffect, useState} from 'react';
import React from 'react';
// import styles from '../styles/Service.module.css'
import Service from '../../components/Service';

export default function index() {
  const description='Alternative Investment Advisors';
  //const [isSmallScreen, setIsSmallScreen] = useState("100%");

  // useEffect(() => {
  //   // You now have access to `window`
  // setIsSmallScreen(!window.matchMedia("(max-width: 700px)").matches ?"200px": "100%");
  // }, []);

  return (
    <div>

      <Head>
        <title>Services | AIA Securities</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta name="description" content="Offering a range of customized capital solutions, AIA Securities' services are designed to meet the needs of our clients and investors." />
        <meta property="og:description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Service/>
      
    </div>
  )
}
