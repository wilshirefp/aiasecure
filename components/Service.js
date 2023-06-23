import React from 'react'
import Image from 'next/image'

import styles from "../styles/Service.module.scss"

export default function Service() {
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
      <div className={styles.wrapper}>
            <h1 className={styles.title}>SERVICES</h1>
            <div className={styles.border}>
            </div>
            <div className={styles.button}>
                <p className={styles.buttonText}>SPEAK TO A BANKER</p>
            </div>
        </div>
        </div>
        <div className={styles.capital}>
        <div className={styles.item}>
            <div className={styles.border}>
            <h2 className={styles.title}>Customized Capital Solutions</h2>
            </div>
            <p className={styles.desc}>AIA Securities is your trusted partner in investment banking, providing customized capital solutions and alternative investment opportunities. Our team of experienced professionals is dedicated to providing customized solutions that meet your unique financial needs.</p>
        </div>
        </div>
        <div className={styles.services}>
          <div className={styles.cards}>
            <div className={styles.card}>
              <div className={styles.titleSection}>
                <Image className={styles.icon} src="/images/lightbulb.PNG" alt="Corporate Finace bulb image" width="59" height="60"></Image> 
                <h2 className={styles.title}>Corporate Finance</h2></div>
              <div className={styles.desc}>
                <p>We help companies raise capital by placing debt and equity securities with institutional investors. Our expertise in this area allows us to execute transactions that maximize value for our clients.</p>
              </div>
              <div className={styles.cta}>
                <p className={styles.ctaLabel}>LEARN MORE</p>
                <p className={styles.symbol}>&#x3E;</p>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.titleSection}>
                <Image className={styles.icon} src="/images/chartIcon2.PNG" alt="Corporate Finace bulb image" width="65" height="58"></Image> 
                <h2 className={styles.title}>Capital Raising</h2></div>
              <div className={styles.desc}>
                <p>We have a proven track record of successfully structuring and executing complex financing solutions such as private placements, syndicated debt and equity, joint ventures, and other structures. Our deep relationships with investors allow us to provide our clients with access to the capital they need to grow their businesses.</p>
              </div>
              <div className={styles.cta}>
                <p className={styles.ctaLabel}>LEARN MORE</p>
                <p className={styles.symbol}>&#x3E;</p>
              </div>
            </div>
          </div>

        </div>
        <div className={styles.servicesPlus}>
          <div className={styles.cards}>
            <div className={styles.card}>
              <div className={styles.titleSection}>
                <Image className={styles.icon} src="/images/maIcon.PNG" alt="Corporate Finace bulb image" width="58" height="58"></Image> 
                <h2 className={styles.title}>Mergers &#x26; Acquisitions</h2></div>
              <div className={styles.desc}>
                <p>Our team has extensive experience in providing sell-side and buy-side representation for middle market and boutique market enterprises. We work closely with our clients to identify potential targets, negotiate the best terms, and structure transactions that align with their strategic goals.</p>
              </div>
              <div className={styles.cta}>
                <p className={styles.ctaLabel}>LEARN MORE</p>
                <p className={styles.symbol}>&#x3E;</p>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.titleSection}>
                <Image className={styles.icon} src="/images/dd-icon.PNG" alt="Corporate Finace bulb image" width="56" height="56"></Image> 
                <h2 className={styles.title}>Due Diligence &#x26; Valuation</h2></div>
              <div className={styles.desc}>
                <p>We provide comprehensive due diligence, analysis, consultation, and valuation for small and medium acquisitions and investments. Our team of experts is equipped to provide valuable insights that help our clients make informed decisions.</p>
              </div>
              <div className={styles.cta}>
                <p className={styles.ctaLabel}>LEARN MORE</p>
                <p className={styles.symbol}>&#x3E;</p>
              </div>
            </div>
          </div>

        </div>
        <div className={styles.servicesDL}>
          <div className={styles.cards}>
            <div className={styles.card}>
              <div className={styles.titleSection}>
                <Image className={styles.icon} src="/images/decisionIcon.PNG" alt="Corporate Finace bulb image" width="55" height="60"></Image> 
                <h2 className={styles.title}>Lending</h2></div>
              <div className={styles.desc}>
                <p>We offer a wide range of lending services, including real estate finance, commercial mortgage lending, commercial and industrial lending. Our team of experienced professionals has a deep understanding of the lending market, which enables us to provide customized solutions that meet our clients' unique needs.</p>
              </div>
              <div className={styles.cta}>
                <p className={styles.ctaLabel}>LEARN MORE</p>
                <p className={styles.symbol}>&#x3E;</p>
              </div>
            </div>
          </div>

        </div>
        <div className={styles.decades}>
        <Image className={styles.icon} src="/images/outsideBuilding.PNG" alt="Corporate Finace bulb image" width="439" height="518"></Image>
        <div className={styles.product}>
              <div className={styles.titleSection}>
                <h2 className={styles.title}>Decades of Experience Investing Across Diverse Asset Classes &#x26; Market Cycles</h2></div>
              <div className={styles.desc}>
                <p>With a focus on our clients’ needs, objectives, and risk tolerance, we combine our thorough understanding of traditional and alternative investments to keep a sharp eye on opportunities with strong potential for value creation in the real estate market sector.</p>
                <p>Our integration of real estate finance and fund management allows us to provide prudent investment advice and customized planning for our clients.</p>
              </div>
              <div className={styles.cta}>
                <p className={styles.ctaLabel}>LEARN MORE</p>
              </div>
            </div> 
        </div>
        <div className={styles.newsletter}>
          <div className={styles.iconSection}>
            <Image className={styles.icon} src="/images/envelopeIcon.PNG" alt="Corporate Finace bulb image" width="83" height="83"></Image>
          </div>
          <div className={styles.box}>
            <div className={styles.titleSection}>
              <p className={styles.title}>Stay connected with us to Stay connected with us to receive ongoing data and insights.</p>
            </div>
            <div className={styles.emailSection}>
              <div className={styles.emailField}>
                <p>Enter your email</p>
              </div>
            </div>
            <div className={styles.signUpSection}>
              <div className={styles.signUp}>
                <p>Sign Up</p>
              </div>
            </div>
          </div>

        </div>

    </div>
  )
}
