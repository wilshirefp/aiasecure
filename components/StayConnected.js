import React, { useState } from 'react'
import styles from '../styles/StayConnected.module.scss'

export default function StayConnected() {
    const [email, setEmail] = useState("");
    const [signedUp,setSignedUp]=useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        console.log(email);

        const res =  await fetch("/api/stayconnectedEmail", {
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
        <form className={styles.wrapper} onSubmit={handleSubmit}>
            <div className={styles.form}>
                <div className={styles.titleArea}>
                {signedUp? 
                    (
                        <p className={styles.title}>Thank you for signing up!</p>
                    )
                    :
                    (
                        <p className={styles.title}>Stay connected.</p>
                    )
                } 
                    
                </div>
                <div className={styles.cta}>
                    <div className={styles.emailArea}>
                        <input required className={styles.email} name="email" placeholder='Enter your email' onChange={(e) => {setEmail(e.target.value)}} />
                    </div>
                    <button className={styles.button}>
                        <p className={styles.buttonText}>SUBSCRIBE</p>
                    </button>
                </div>
            </div>
        </form>
        
    </div>
  )
}
