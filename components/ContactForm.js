import React, { useState } from 'react'
import styles from '../styles/ContactForm.module.scss'
import Image from 'next/image'
import { useRouter } from 'next/router';

export default function ContactForm() {
    const router =useRouter();
    const [investor,setInvestor] = useState(false)
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

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
    function phoneNumberFormatter(){
        if(phone.length===10){
          setPhone(`(${phone.slice(0,3)}) ${phone.slice(3,6)}-${phone.slice(6,10)}`);
        }
    };
    
    async function formatPhoneNumber(value){
        //console.log("format number")
        //console.log(value);
           if(!value) return value;
           const phoneNumber =  value.replace(/[^\d]/g,'');
           const phoneNumberLength = phoneNumber.length;
           if(phoneNumber.length<4) return phoneNumber;
           if(phoneNumber<7){
            const newPhone= `(${phoneNumber.slice(0,3)}) ${phoneNumber.slice(3)}`;
         //   console.log(`(${phone.slice(0,3)}) ${phone.slice(3)}`);
           }
           //console.log(`(${phone.slice(0,3)}) ${phone.slice(3,6)}-${phone.slice(6,9)}`);
      }
    //console.log(investor);
    const handleSubmit = async (e) => {
        e.preventDefault();

          const res = await fetch("/api/contactEmail", {
            body: JSON.stringify({
              email: String(email),
              firstName: String(firstName),
              lastName: String(lastName),
              phone: phone,
              message: String(message),
              investor:Boolean(investor),
            }),
            headers: {
              "Content-Type": "application/json",
            },
            method: "POST",
          });

          const { error } = await res.json();
        //   router.replace("/thank-you");

          if (error) {
            console.log(error);

            return;
          }
          router.push(`/thank-you`);
          //console.log(`/thank-you/?ffn=${name}`);
        //console.log(name, email, phone, message);
      };
  return (
    <div className={styles.container}>
        <form className={styles.formArea} onSubmit={handleSubmit}>
            <p className={styles.title}>Contact Us</p>
            <div className={styles.form}>
                <input required className={styles.inputS} type='text' name='firstName' placeholder="First Name*" onChange={(e) => {setFirstName(e.target.value)}}/>
                <input className={styles.inputS} placeholder="Last Name*" type='text' name='lastName' onChange={(e) => {setLastName(e.target.value)}}/>
                <input className={styles.inputL} placeholder="Email*" type='email' name='email' onChange={(e) => {setEmail(e.target.value)}}/>
                <input maxLength={14} required id='phone' onKeyUp={phoneNumberFormatter()} className={styles.inputL} type='tel' autoComplete='tel' placeholder='Phone Number*' name='phone' value={phone||''} onChange={(e) => {setPhone(e.target.value)}}></input>
                <textarea required className={styles.textArea} name='message' value={message||''} onChange={(e) => {setMessage(e.target.value)}} placeholder='Message*' rows={6}></textarea>
                <h3>Are you an institutional investor?</h3>
                <input type="checkbox" id="investoer" onClick={(event) => setInvestor(event.target.checked)}></input>
                {/* <input type='radio' name='investor' value={FALSE} id="investor" checked={investor===true}></input> */}
                {/* <input type="radio" name="investor" id="investor" checked={investor===true} onChange={onInvestorChange} >Yes</input> */}
                <button className={styles.button}>SUBMIT</button>
            </div>
            
        </form>
        <div className={styles.mapArea}>
            <div className={styles.imageArea}>
                <Image src="/images/map.png"  width={700} height={400}  ></Image>
            </div>
        
        <p className={styles.contactInfo}>Contact us at (877) 247-7557 or info@aiasecure.com to learn more about AIA Securities.</p>
        </div>
    </div>
  )
}
