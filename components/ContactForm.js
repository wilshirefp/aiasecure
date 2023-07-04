import React from 'react'
import styles from '../styles/ContactForm.module.scss'
import Image from 'next/image'

export default function ContactForm() {
  return (
    <div className={styles.container}>
        <div className={styles.formArea}>
            <p className={styles.title}>Contact Us</p>
            <div className={styles.form}>
                <input className={styles.inputS} placeholder="First Name*"/>
                <input className={styles.inputS} placeholder="Last Name*"/>
                <input className={styles.inputL} placeholder="Email*"/>
                <input className={styles.inputL} placeholder="Phone Number*"/>
                <textarea className={styles.textArea} placeholder="Message*" rows={6}/>
                <button className={styles.button}>SUBMIT</button>
            </div>
            
        </div>
        <div className={styles.mapArea}>
            <div className={styles.imageArea}>
                <Image src="/images/map.png"  width={700} height={400}  ></Image>
            </div>
        
        <p className={styles.contactInfo}>Contact us at (877) 247-7557 or info@aiasecure.com to learn more about AIA Securities.</p>
        </div>
    </div>
  )
}
