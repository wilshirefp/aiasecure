import React from 'react'
import styles from '../styles/Footer.module.scss';
import Image from 'next/image'
import { SocialIcon } from 'react-social-icons';
import Disclosures from './Disclosures';
import Link from 'next/link'

export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>

          <div className={styles.item}>
            <div className={styles.contactItems}>
                <Image src="/images/whitelogo1.png" alt="AA Securities Logo" width="350" height="60"></Image> 
                <div className={styles.contactInfo}>
                <div className={styles.phone}><h7>(877) 247-7557</h7></div>
                <h7 className={styles.email}>info@aiasecure.com</h7>
                </div>
                <div className={styles.copyrightArea}>
                  <h7 className={styles.copyright}>Copyright © 2023 AIA Securities LLC</h7>
                </div>
              </div>
          </div>
          <div className={styles.item}>
            <div className={styles.resourcesArea}>
              <ul className={styles.list}>
                <li className={styles.listItem}><Link href="/about"><span>About</span></Link> </li>
                <li className={styles.listItem}><Link href="/services"><span>Services</span></Link></li>
                <li className={styles.listItem}><Link href="/investors"><span>Investors</span></Link></li>
                <li className={styles.listItem}><Link href="/contact"><span>Contact</span></Link></li>
              </ul>
              <div className={styles.member}>
                <span className={styles.finra}>Member <Link href="https://www.finra.org/#/"><span>FINRA</span></Link> and <Link href="https://www.sipc.org/"><span>SIPC</span></Link></span>
                <span className={styles.broker}><Link href="https://brokercheck.finra.org/"><span>Broker Check</span></Link></span>
              </div>
              </div>
              {/* <div className={styles.socialIcon}>
                <div className={styles.facebook}><SocialIcon url="https://jaketrent.com" network="facebook" /></div>
                <SocialIcon url="https://linkedin.com/in/jaketrent" />
              </div> */}

          </div>

        </div>
        <Disclosures/>

    </div>
    
  )
}
