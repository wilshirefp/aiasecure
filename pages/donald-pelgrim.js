import React from 'react'
import styles from '../styles/Leader.module.scss'
import Image from 'next/image'

export default function DonaldPelgrim() {
  return (
    <div className={styles.container}>
        <Image src="/images/don.png" width="200" height="200" ></Image>
        <div className={styles.leader}>
            <p className={styles.name}>Donald H. Pelgrim, Jr., Esq.</p>
            <p className={styles.nameTitle}>CEO</p>
            <p className={styles.info}>Mr. Pelgrim has extensive experience in real estate finance, the acquisition and disposition of real estate, real estate investment, loan workouts and the resolution of problem assets. His experience extends to investment banking, finance, mergers and acquisitions, venture capital, private equity, capital markets, corporate governance and regulatory issues affecting public and privately held companies.</p>
            <p className={styles.modalTitle}>EDUCATION</p>
            <p>• Juris Doctorate from Loyola Law School of Los Angeles</p>
            <p>• Bachelor of Business Administration from Hofstra University</p>
            <p className={styles.modalTitle}>LICENSES</p>
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
  )
}
