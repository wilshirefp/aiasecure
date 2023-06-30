import React,{useState} from 'react'
import styles from '../styles/Leadership.module.scss'
import Link from 'next/link'
import Image from 'next/image'

export default function Leadership({setOpen,Open}) {
 // const [open, setOpen] = useState(false)
  return (
    <div className={styles.container}>
        <div className={styles.wrapper}>
        <h2 className={styles.title}>Executive Leadership</h2>
        <div className={styles.leaders}>
            <div className={styles.leader}>
            <Image src="/images/don.png" width="300" height="300" ></Image>
            <div className={styles.info}>
                <div className={styles.leaderBorder}></div>
                <Link href={"/donald-pelgrim"}><span>Donald H. Pelgrim, Jr., Esq.</span></Link>
                <span>CEO</span>
            </div>
            
            </div>
            <div className={styles.leader}>
            <Image src="/images/kari.png" width="300" height="300" ></Image>
            <div className={styles.info}>
                <div className={styles.leaderBorder}></div>
                <span>Kari M. Laitinen, Executive JD, MBA</span>
                <span>Executive Vice President &</span>
                <span>Chief Compliance Officer</span>
            </div>
            </div>
        </div>
        <div className={styles.brokerBorder}></div>
          <Link href={"https://brokercheck.finra.org/"}><p className={styles.brokerCheck}>Broker Check</p></Link>  
        </div>
        {/* <div onClick={() => setOpen(false)} className={styles.modal} style={{top:"0", right: open? "0px" :"-100vh"}}>
            <p>Mr. Pelgrim has extensive experience in real estate finance, the acquisition and disposition of real estate, real estate investment, loan workouts and the resolution of problem assets. His experience extends to investment banking, finance, mergers and acquisitions, venture capital, private equity, capital markets, corporate governance and regulatory issues affecting public and privately held companies.</p>
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


        </div> */}
    </div>
  )
}
