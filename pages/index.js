import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Hero from '../components/Hero'
import Insights from '../components/Insights'
import Institutional from '../components/Institutional'
import WhyAA from '../components/WhyAA'
import StayConnected from '../components/StayConnected'

export default function Home() {
  return (
    <div className={styles.container}>

      <Head>
        <title>AIA Securities | Investment Banking</title>
        <meta name="description" content="AIA Securities is a nationwide, investment banking firm delivering a range of corporate finance services to investors and clients." />
        <meta name="keywords" content="investment banking, real estate investment banking"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </Head>
      <Hero/>
      <Institutional/>
      <WhyAA/>
      <Insights/>
      <StayConnected/>
    </div>
  )
}
