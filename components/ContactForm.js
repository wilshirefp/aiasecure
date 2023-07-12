import React, { useState } from 'react'
import styles from '../styles/ContactForm.module.scss'
import Image from 'next/image'

export default function ContactForm() {
    const [investor,setInvestor] = useState(false)

    const onInvestorChange = e =>{
        setInvestor(e.value)
    }
    const handleClick = (event) =>{
        
        if(event.target.checked==true){
            console.log("Checked")
        }
        else{
            console.log("Not Checked")
        }
    }
    console.log(investor);

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
                <h3>Are you an institutional investor?</h3>
                <input type="checkbox" id="investoer" onClick={(event) => setInvestor(event.target.checked)}></input>
                {/* <input type='radio' name='investor' value={FALSE} id="investor" checked={investor===true}></input> */}
                {/* <input type="radio" name="investor" id="investor" checked={investor===true} onChange={onInvestorChange} >Yes</input> */}
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
