import React from 'react'
import styles from '../styles/Footer.module.scss';
import Image from 'next/image'
import { SocialIcon } from 'react-social-icons';
import Disclosures from './Disclosures';


export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>

          <div className={styles.item}>
            <div className={styles.contactItems}>
                <Image src="/images/WhiteLogo.PNG" alt="AA Securities Logo" width="350" height="60"></Image> 
                <div className={styles.contactInfo}>
                <div className={styles.phone}><h7>(877) 247-7557</h7></div>
                <h7 className={styles.email}>info@AIASecure.com</h7>
                </div>
                <div className={styles.copyrightArea}>
                  <h7 className={styles.copyright}>Copyright © 2023 AIA Securities LLC</h7>
                </div>
              </div>
          </div>
          <div className={styles.item}>
            <div className={styles.resourcesArea}>
              <ul className={styles.list}>
                <li className={styles.listItem}>About</li>
                <li className={styles.listItem}>Services</li>
                <li className={styles.listItem}>Investors</li>
                <li className={styles.listItem}>Contact</li>
              </ul>
              <div className={styles.member}>
                <span className={styles.finra}>Member FINRA and SIPC</span>
                <span className={styles.broker}>Broker Check</span>
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
