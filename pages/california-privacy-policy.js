import React from 'react'
import Head from 'next/head'
import styles from '../styles/DisclosurePage.module.scss'
import Link from 'next/link'
import Image from 'next/image'

export default function CaliforniaPrivacyPolicy() {
  return (
    <div className={styles.container}>
    <Head>
        <title>AIA Securities - California Privacy Policy</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta name="description" content="Alternative Investment Advisors" />
        <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className={styles.hero}>
  <div className={styles.wrapper}>
        <h1 className={styles.title}>CALIFORNIA PRIVACY POLICY</h1>
        <div className={styles.borderLG}>
        </div>
    </div>
    </div>
    
    <div className={styles.disclosures}>
    <div className={styles.version}>
      <p className={styles.info}>California Privacy Policy</p>
      <p className={styles.info}>Last Updated June 29, 2023</p>
    </div>
    <div className={styles.items}>
        <p className={styles.modalTitle}>California Consumer Privacy Act (CCPA)</p>
        <p className={styles.info}>Information for California Residents</p>
        <p className={styles.info}>California Consumers’ Rights and Choices</p>
        <p className={styles.info}>If you are a California resident, California law permits you to request Information regarding the:</p>
        <ul className={styles.list}>
          <li className={styles.listItem}>Categories of Personal Information (as defined by applicable California law) collected, sold or disclosed by us;</li>
          <li className={styles.listItem}>Purposes for which categories of Personal Information collected by us are used;</li>
          <li className={styles.listItem}>Sources of information from which we collect Personal Information; and</li>
          <li className={styles.listItem}>Specific pieces of Personal Information we have collected about you.</li>
          <li className={styles.listItem}>In addition, if you are a California resident you may:</li>
          <li className={styles.listItem}>Opt-out of the sale or disclosure of your Personal Information, in some circumstances;</li>
          <li className={styles.listItem}>Opt-out of receiving marketing communications from us; however, you may still receive administrative communications regarding the Services;</li>
          <li className={styles.listItem}>Opt-in to certain financial incentive programs we may offer related to the collection, sale, or deletion of your Personal Information; and</li>
          <li className={styles.listItem}>Request deletion of your Personal Information by us and our service providers, in some circumstances.</li>
        </ul>
        <p className={styles.info}>You will not be discriminated against for exercising your rights under the California Consumer Privacy Act. Our privacy policy can be found at: https://aiasecure.com/privacy.</p>
        
        <span className={styles.listCA}>Category of personal information we may collect: Internet/Electronic Activity:</span>
        <ul className={styles.list}>
          <li className={styles.listItem}>Categories of sources from which we may obtain your &ldquo;Identifiers&ldquo; include:
          <ul>
            <li>Directly from consumers</li>
          </ul>
          </li>
          <li className={styles.listItem}>The purposes for collecting your &ldquo;Identifiers&ldquo; include:
            <ul>
              <li>Marketing purposes, including distribution of content as well as to respond to general inquiries.</li>
            </ul>
          </li>
        </ul>

        <span className={styles.listCA}>Category of personal information we may collect: Professional Information:</span>
        <ul className={styles.list}>
          <li className={styles.listItem}>Categories of sources from which we may obtain your &ldquo;Professional Information&ldquo; include:
          <ul>
            <li>Directly from consumers</li>
          </ul>
          </li>
          <li className={styles.listItem}>The purposes for collecting your &ldquo;Professional Information&ldquo; include:
            <ul>
              <li>Marketing purposes, including distribution of content as well as to respond to general inquiries.</li>
            </ul>
          </li>
        </ul>
        <p className={styles.info}>Here is information on whether we sell or share your personal information.</p>
        <span className={styles.listCA}>Selling/sharing your personal information:</span>
        <ul className={styles.list}>
          <li className={styles.listItem}>Categories of third parties we may sell your personal information to:
          <ul>
            <li>We do not sell personal information to third parties.</li>
          </ul>
          </li>
          <li className={styles.listItem}>Categories of third parties we may otherwise share your personal information with:
            <ul>
              <li>Data analytics providers, Operating systems and platforms</li>
            </ul>
          </li>
        </ul>

        <p className={styles.modalTitle}>Requests</p>
        <p className={styles.info}>You can make requests related to your California privacy rights:</p>
        <p className={styles.info}>Call us at 877-247-7557</p>
        <p className={styles.info}>Or you may email us at: admin@aiasecure.com</p>
        <p className={styles.info}>Or, you may mail us at:  2 Venture Suite 430, Irvine, CA 92618</p>
        <p className={styles.info}>Please be aware that we do not accept or process requests through other means (e.g., via fax, social media, email addresses, etc.).</p>
        <p className={styles.info}>When you make a request, we may ask you to provide verifying information, such as your name, email, or phone number. We will review the information provided and may request additional information via email or other means to ensure we are interacting with the correct individual. Please also be aware that making any such request does not ensure complete or comprehensive removal or deletion of Personal Information or content you may have posted, and there may be circumstances in which the law does not require or allow us to fulfill your request.</p>

        <p className={styles.modalTitle}>Questions?</p>
        <p className={styles.info}>To ask questions or communicate any concerns, complaints, or comments about this Privacy Policy and our privacy practices, or to request the details of the relevant regulator, please contact us at admin@aiasecure.com.</p>

    </div>
    
    </div>
</div>
  )
}
