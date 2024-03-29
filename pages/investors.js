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
            <title>Investors |Alternative Investments | AIA Securities</title>
            <meta name="description" content="AIA Securities brings an unmatched perspective in alternative investments including private credit, real estate investment trusts (REIT), and direct participation programs specializing in senior housing real estate investment trusts (REIT), senior housing funds, health care REITs and health care funds." />
            <meta name="keywords" content="alternative investments, investment opportunity, investment strategy"/>
            <link rel="icon" href="/favicon.ico" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        </Head>
        <ProductHero product={investorContent[0]}/>    
        <ProductDesc product={investorContent[0]}/>
        <ProductOptions product={investorContent[0]}/>
        <ProductIndustries product={investorContent[0]}/>
        <Newsletter />
    </div>
  )
}
