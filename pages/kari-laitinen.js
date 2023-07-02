import React from 'react'
import styles from '../styles/Leader.module.scss'
import Image from 'next/image'


export default function KariLaitinen() {
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
      <div className={styles.wrapper}>
            <h1 className={styles.title}>ABOUT KARI LAITINEN</h1>
            <div className={styles.border}>
            </div>
            {/* <div className={styles.button}>
                <p className={styles.buttonText}>SPEAK TO A BANKER</p>
            </div> */}
        </div>
        </div>
        <div className={styles.profile}>
        <Image src="/images/kari.png" width="300" height="300" ></Image>
        <div className={styles.leader}>
            <p className={styles.name}>Kari M. Laitinen Executive JD, MBA</p>
            <p className={styles.nameTitle}><span>Executive Vice President & Chief Compliance Officer</span></p>
            <p className={styles.info}><b>Mr. Kari M. Laitinen</b>, Executive JD, MBA acts as Executive Vice President (EVP) and Chief Compliance Officer (CCO) of AIA SECURITIES LLC., (AIA) – a boutique investment bank specializing in the real estate sector and middle market merger and acquisition (M&A) including securing institutional growth capital for organizations worldwide.  Mr. Laitinen has 20+ years of experience working with private equity, asset management, hedge funds, and investment banking – with a track record of originating complex financial transactions.<br/><br/></p>
            <p className={styles.info}>More than a transactional investment banker, Mr. Laitinen’s background and experience allows him to directly help business owners translate their business goals into reality by establishing strategic domestic and global distribution channel networks, training and assisting them to launch new products and services in securing new customers, or cross selling opportunities nexus new products and services with existing clientele, and geographically seeking (i.e., over 30 million USD successfully received) premium revenue to clients income statements by identifying, writing, and winning new funding sources through local, state, and federal grants.  Through engagement, business owners have further commissioned Mr. Laitinen to purchase and/ or sell companies in a host of industries including food, manufacturing, legal, finance, education, technology, and health care.<br/><br/></p>
            <p className={styles.info}>Mr. Laitinen has structured financial products with international investment asset managers and banks, performed business valuations, and raised through accredited high net worth investors (e.g., over 100 million USD) and qualified institutional capital for corporate growth strategies. He has also directly managed and audited import export business, customer pricing and internal yield vendor competitive analysis, cost accounting, purchased and analyzed firm inventory pricing and trends, labor including piece work price modeling, lawsuit and settlement, negotiated new vendor agreements and contracts, insurance, and logistics.<br/><br/></p>
            <p className={styles.info}>As a dynamic lecturer he has taught over 5,000 business professionals seeking financial security licensing (e.g., Series 4,6,7,8,9,10,11,24,26,27/28, 51, 52, 53,55, 53,54,55,72), and teaches master of business (MBA) courses (e.g., Financial Management of the Firm, Business Law, Business Plans, Global Strategy, Professionally Applied Projects) as an adjunct professor where he hand-picked dozens of talented students to work in portfolio companies over the last decade. Mr. Laitinen is also skilled at building dynamic financial models which investors, company executives, and business owners rely on in making intelligent, informed financial and strategic decisions.</p>
            <p className={styles.modalTitle}>EDUCATION</p>
            <p>• Executive Juris Doctorate from Concord Law School</p>
            <p>• MBA with an emphasis in Finance from Pepperdine University’s Graziadio School of Business</p>
            <p>• Bachelor of Arts Undergraduate degree in History and a Minor in Business Marketing from Brigham Young University (BYU)</p>
            <p className={styles.modalTitle}>LICENSES</p>
            <div className={styles.licArea}>
              <p className={styles.modalTitle}></p>
              <p>• Series 63 - State Uniform Securities</p>
              <p>• Series  7 - General Securities Representative</p>
              <p>• Series 24 - General Securities Principal</p>
              <p>• Series  79 - Investment Banking Representative state and federal licenses</p>
              
            </div>

        </div>
        </div>
    </div>
  )
}
