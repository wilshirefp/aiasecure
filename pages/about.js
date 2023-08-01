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
  //const [sharedState, setSharedState] = useState(false);
  // const [open, setOpen] = useState(false)
  return (
    <div className={styles.container}>
        <Head>
            <title>About | Broker Dealer | AIA Securities</title>
            <meta name="description" content="AIA Securities is a broker dealer and investment banking firm." />
            <meta name="keywords" content="broker dealer"/>
            <link rel="icon" href="/favicon.ico" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        </Head>
        <AboutHero/>
        <AboutDesc/>
        <Leadership/>
        <AboutGuidance/>
        
        <Newsletter />
        
        
    </div>
    
  )
}
