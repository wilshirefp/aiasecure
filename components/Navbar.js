import React,{useState} from 'react'
import styles from '../styles/Navbar.module.scss'
import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
const [open, setOpen] = useState(false);

  return (
    <div className={styles.container}>
        <Link href="/" passHref>
            <Image className={styles.heroImage} src="/images/aia-securities-logo.png" alt="AA Securities Logo" width="350" height="70"></Image>
        </Link>
        {/* <div className={styles.item}> */}
            <ul className={styles.list}>
              <li className={styles.listItem}><Link href="/about"><span>About</span></Link> </li>
              <li className={styles.listItem}><Link href="/services"><span className={styles.parentMenu}>Services</span></Link>
              <ul className={styles.subMenuDropdown}>
                <li className={styles.menuItem}><Link href="/services/corporate-finance"><span>Corporate Finance</span></Link> </li>
                <li className={styles.menuItem}><Link href="/services/capital-raising"><span>Capital Raising</span></Link></li>
                <li className={styles.menuItem}><Link href="/services/mergers-acquisitions"><span>Mergers &#38; Acquisitions</span></Link></li>
                <li className={styles.menuItem}><Link href="/services/due-diligence"><span>Due Diligence</span></Link></li>
                <li className={styles.menuItem}><Link href="/services/lending"><span>Lending</span></Link></li>
            </ul>
              
              </li>
            <li className={styles.listItem}><Link href="/investors"><span>Investors</span></Link></li>
            <li className={styles.listItem}><Link href="/contact"><span>Contact</span></Link></li>
            </ul>
            <div className={styles.hamburger} onClick={() => setOpen(!open)}>
              <div className={styles.line}></div>
              <div className={styles.line}></div>
              <div className={styles.line}></div>
            </div>
            <ul onClick={() => setOpen(false)} className={styles.hmenu} style={{right: open ? "0px" : "-50vh"}}>
              <li className={styles.hlistItem}><Link href="/about"><span>About</span></Link> </li>
                <li className={styles.hlistItem}><Link href="/services"><span className={styles.hparentMenu}>Services</span></Link>
                <ul className={styles.hsubMenuDropdown}>
                  <li className={styles.hmenuItem}><Link href="/services/corporate-finance"><span>Corporate Finance</span></Link> </li>
                  <li className={styles.hmenuItem}><Link href="/services/capital-raising"><span>Capital Raising</span></Link></li>
                  <li className={styles.hmenuItem}><Link href="/services/mergers-acquisitions"><span>Mergers &#38; Acquisitions</span></Link></li>
                  <li className={styles.hmenuItem}><Link href="/services/due-diligence"><span>Due Diligence</span></Link></li>
                  <li className={styles.hmenuItem}><Link href="/services/lending"><span>Lending</span></Link></li>
              </ul>
                
                </li>
              <li className={styles.hlistItem}><Link href="/investors"><span>Investors</span></Link></li>
              <li className={styles.hlistItem}><Link href="/contact"><span>Contact</span></Link></li>

            </ul>
              {/* <ul className={styles.subMenuDropdown}>
                <li className={styles.menuItem}><Link href="/services/corporate-finance"><span>Corporate Finance</span></Link> </li>
                <li className={styles.menuItem}><Link href="/services/capital-raising"><span>Capital Raising</span></Link></li>
                <li className={styles.menuItem}><Link href="/services/mergers-acquisitions"><span>Mergers &#38; Acquisitions</span></Link></li>
                <li className={styles.menuItem}><Link href="/services/due-diligence"><span>Due Diligence</span></Link></li>
                <li className={styles.menuItem}><Link href="/services/lending"><span>Lending</span></Link></li>
            </ul> */}
        {/* </div> */}
    </div>
  )
}
