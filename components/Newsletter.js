import React, { useState } from 'react'
import styles from '../styles/Newsletter.module.scss'
import Image from 'next/image'

export default function Newsletter() {
    const [email, setEmail] = useState("");
    const [signedUp,setSignedUp]=useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        console.log(email);

        const res =  await fetch("/api/newsletterEmail", {
            body: JSON.stringify({
                email: String(email)
            }),
            headers: {
                "Content-Type" : "Application/json",
            },
            method: "POST",
        });

        const {error} = await res.json();
        if(error){
            console.log(error);
            return;
        }
        console.log("sucess");
        setSignedUp(true);
    };


  return (
    <div className={styles.container}>
        <form className={styles.newsletter} onSubmit={handleSubmit}>
            <div className={styles.iconSection}>
                <Image className={styles.icon} src="/images/envelopeicon1.png" alt="Corporate Finace bulb image" width="83" height="83"></Image>
            </div>
            <div className={styles.box}>
                <div className={styles.titleSection}>
               {signedUp? 
                    (
                        <p className={styles.signedUp}>Thank you for signing up!</p>
                    )
                    :
                    (
                        <p className={styles.title}>Stay connected.</p>
                    )
                } 
                </div>
                <div className={styles.emailSection}>
                <div className={styles.emailField}>
                        <input required className={styles.email} name="email" placeholder='Enter your email' onChange={(e) => {setEmail(e.target.value)}} />
                    </div>
                {/* <div className={styles.emailField}>
                    <p>Enter your email</p>
                </div> */}
                </div>
                <div className={styles.signUpSection}>
                <button className={styles.signUp}>
                    <p>Sign Up</p>
                </button>
                </div>
            </div>

        </form>
    </div>
  )
}
