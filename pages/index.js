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
        <title>A|A Securities</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta name="description" content="Alternative Investment Advisors" />

      </Head>
      <Hero/>
      <Institutional/>
      <WhyAA/>
      <Insights/>
      <StayConnected/>
    </div>
  )
}
