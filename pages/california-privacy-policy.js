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
        <h1 className={styles.title}>COOKIES POLICY</h1>
        <div className={styles.border}>
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
        {/* <p className={styles.info}>•	Categories of Personal Information (as defined by applicable California law) collected, sold or disclosed by us;</p>
        <p className={styles.info}>•	Purposes for which categories of Personal Information collected by us are used;</p>
        <p className={styles.info}>•	Sources of information from which we collect Personal Information; and</p>
        <p className={styles.info}>•	Specific pieces of Personal Information we have collected about you.</p>
        <p className={styles.info}>•	In addition, if you are a California resident you may:</p>
        <p className={styles.info}>•	Opt-out of the sale or disclosure of your Personal Information, in some circumstances;</p>
        <p className={styles.info}>•	Opt-out of receiving marketing communications from us; however, you may still receive administrative communications regarding the Services;</p>
        <p className={styles.info}>•	Opt-in to certain financial incentive programs we may offer related to the collection, sale, or deletion of your Personal Information; and</p>
        <p className={styles.info}>•	Request deletion of your Personal Information by us and our service providers, in some circumstances.</p> */}
        <p className={styles.info}>You will not be discriminated against for exercising your rights under the California Consumer Privacy Act. Our privacy policy can be found at: https://aiasecure.com/privacy.</p>


        <p className={styles.modalTitle}>Collection of Personal Information from California Residents</p>
        <p className={styles.info}>We have listed below the personal information we may have collected from California residents in the past 12 months.</p>

        <p className={styles.modalTitle}>What Are Cookies?</p>
        <p className={styles.info}>Cookies are text files containing small amounts of information that are downloaded to your device when you visit a website. Cookies are then sent back to the originating web domain on your subsequent visits to that domain. Most web pages contain elements from multiple web domains, so when you visit the Website, your browser may receive cookies from several sources.</p>
        <p className={styles.info}>Cookies are useful because they allow a website to recognize a user&#39;s device. Cookies allow you to navigate between pages efficiently, remember preferences, and generally improve the user experience. They can also be used to tailor advertising to your interests through tracking your browsing across websites.</p>
        <p className={styles.info}>Session cookies are deleted automatically when you close your browser, and persistent cookies remain on your device after the browser is closed (for example, to remember your user preferences when you return to the site).</p>
        <p className={styles.modalTitle}>What Types of Cookies Does AIA Securities Use?</p>
        <p className={styles.info}>Below, we describe the categories of cookies AIA Securities, its affiliates, and its contractors use.</p>
        <p className={styles.modalTitle}>Performance Cookies</p>
        <p className={styles.info}>We make use of analytic cookies to analyze how our visitors use our Website and to monitor website performance. This allows us to provide a high-quality experience by customizing our offering and quickly identifying and fixing any issues that arise. For example, we might use performance cookies to keep track of which pages are most popular or which method of linking between pages is most effective and to determine why some pages are receiving error messages. We might also use these cookies to highlight articles or site services that we think will be of interest to you based on your usage of the Website. The information collected by these cookies is not associated with your personal information by us or by our contractors.<br/><br/>The Website (full and mobile) currently uses the following analytic:</p>
        <Image src="/images/cookie-performance.png" width="1000" height="400" ></Image>
        <p className={styles.modalTitle}>HTML Email Web Beacons</p>
        <p className={styles.info}>Our emails may contain a single, campaign-unique &ldquo;web beacon pixel&ldquo; to tell us whether our emails are opened and verify any clicks through to links within the email. We may use this information for purposes including determining which of our emails are more interesting to you and to query whether users who do not open our emails wish to continue receiving them. The pixel will be deleted when you delete the email. If you do not wish the pixel to be downloaded to your device, you should select to receive emails from us in plain text rather than HTML.</p>
        <p className={styles.modalTitle}>Use of IP Addresses and Web Logs</p>
        <p className={styles.info}>We may also use your IP address and browser type to help diagnose problems with our server, to administer our Website, and to improve the service we offer to you. An IP address is a numeric code that identifies your computer on the internet. Your IP address might also be used to gather broad demographic information.
          <br/><br/>
          We may perform IP lookups to determine which domain you are coming from (e.g., Google.com) to more accurately gauge our users&#39; demographics.
          <br/><br/>
          Information from these types of cookies and technologies or about website usage is not combined with information about you from any other source.
          <br/><br/>
          None of the cookies or technologies that we use will personally identify you.
          </p>
        <p className={styles.modalTitle}>Cookies Policy Does Not Cover Third-Party Websites</p>
        <p className={styles.info}>Please note that this Cookies Policy does not apply to, and we are not responsible for, the privacy practices of third-party websites that may be linked to the Website.</p>
        <p className={styles.modalTitle}>Changes to the Cookies Policy</p>
        <p className={styles.info}>We may update this Cookies Policy, and we would encourage you to review the policy from time to time to stay informed of how we are using cookies.</p>
         
    </div>
    
    </div>
</div>
  )
}
