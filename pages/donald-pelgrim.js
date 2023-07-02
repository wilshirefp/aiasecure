import React from 'react'
import styles from '../styles/Leader.module.scss'
import Image from 'next/image'

export default function DonaldPelgrim() {
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
      <div className={styles.wrapper}>
            <h1 className={styles.title}>ABOUT DONALD PELGRIM</h1>
            <div className={styles.border}>
            </div>
            {/* <div className={styles.button}>
                <p className={styles.buttonText}>SPEAK TO A BANKER</p>
            </div> */}
        </div>
        </div>
        <div className={styles.profile}>
        <Image src="/images/don.png" width="300" height="300" ></Image>
        <div className={styles.leader}>
            <p className={styles.name}>Donald H. Pelgrim, Jr., Esq.</p>
            <p className={styles.nameTitle}>CEO</p>
            <p className={styles.info}><b>Mr. Don Pelgrim</b> is CEO of AIA Securities LLC., (AIA) and CEO of Wilshire Finance Partners, a premier real estate finance and investment company. He is the Manager of the WFP Income Fund, LLC, WFP Income Fund REIT, and WFP Opportunity Fund, LLC. Mr. Pelgrim is an attorney and has been a chief- level executive officer in the banking and financial services industry for over 25 years.<br/><br/></p>
            <p className={styles.info}>As an attorney, Mr. Pelgrim practiced corporate, real estate, and real estate finance law at Brobeck, Phleger & Harrison, LLP and Rutan & Tucker, LLP. He started his banking career with the Dreyfus Corporation, worked as a loan officer with Hawthorne Savings, FSB, and was the Chief Administrative Officer and Corporate Secretary at Vineyard Bank, NA and Vineyard National Bancorp, as well as Opportunity Bank, NA and Opportunity Bancshares.<br/><br/></p>
            <p className={styles.info}>Mr. Pelgrim has extensive experience in real estate finance, the acquisition and disposition of real estate, real estate investment, loan workouts and the resolution of problem assets. His experience extends to investment banking, finance, mergers and acquisitions, venture capital, private equity, capital markets, corporate governance and regulatory issues affecting public and privately held companies.</p>
            <p className={styles.modalTitle}>EDUCATION</p>
            <p>• Juris Doctorate from Loyola Law School of Los Angeles</p>
            <p>• Bachelor of Business Administration from Hofstra University</p>
            <p className={styles.modalTitle}>LICENSES</p>
            <div className={styles.licArea}>
              <p className={styles.modalTitle}>SECURITIES:</p>
              <p>• Series 24 - General Securities Principal</p>
              <p>• Series  7 - General Securities Representative</p>
              <p>• Series  66 – NASAA Uniform Combined State Securities License</p>
              
              <p className={styles.modalTitle}>REAL ESTATE:</p>
              <p>• California Real Estate Brokers License</p>
              <p>• California Finance Lenders License</p>
              <p>• Mortgage Originator (NMLS)</p>

              <p className={styles.modalTitle}>LAW:</p>
              <p>• State Bar of California</p>
            </div>

        </div>
        </div>
    </div>
  )
}
