import React from 'react'
import {investorContent} from "../data-feed/investor"
import styles from "../styles/Investor.module.scss"
import Head from 'next/head'
import ProductHero from '../components/ProductHero';
import ProductDesc from '../components/ProductDesc';
import ProductOptions from '../components/ProductOptions';
import Newsletter from '../components/Newsletter';
import ProductIndustries from '../components/ProductIndustries';


export default function investors() {
  return (
    <div className={styles.container}>
        <Head>
            <title>AIA Securities</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <meta name="description" content="Alternative Investment Advisors" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <ProductHero product={investorContent[0]}/>    
        <ProductDesc product={investorContent[0]}/>
        <ProductOptions product={investorContent[0]}/>
        <ProductIndustries product={investorContent[0]}/>
        <Newsletter />
    </div>
  )
}
