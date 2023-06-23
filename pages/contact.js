import React from 'react'
import Head from 'next/head'
import ContactHero from '../components/ContactHero'
import styles from "../styles/Contact.module.scss"
import Newsletter from '../components/Newsletter';
import ContactDesc from '../components/ContactDesc';
import ContactForm from '../components/ContactForm';


export default function contact() {
  return (
    <div className={styles.container}>
        <Head>
            <title>A|A Securities - Contact</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <meta name="description" content="Alternative Investment Advisors" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <ContactHero/>
        <ContactDesc/>
        <ContactForm/>
        <Newsletter />
    </div>
  )
}
