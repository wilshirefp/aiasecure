import React from 'react'
import Head from 'next/head'
// import AboutHero from '../components/ContactHero'
import styles from "../styles/About.module.scss"
import Newsletter from '../components/Newsletter';
// import AboutDesc from '../components/ContactDesc';
import AboutHero from '../components/AboutHero'
import AboutDesc from '../components/AboutDesc'
import Leadership from '../components/Leadership';
import AboutGuidance from '../components/AboutGuidance';

export default function about() {
  return (
    <div className={styles.container}>
        <Head>
            <title>AIA Securities</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <meta name="description" content="Alternative Investment Advisors" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <AboutHero/>
        <AboutDesc/>
        <Leadership/>
        <AboutGuidance/>
        
        <Newsletter />
    </div>
  )
}
