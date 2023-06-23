import React from 'react'
import styles from '../styles/ProductOptions.module.scss'
import Image from 'next/image'
export default function ProductOptions({product}) {
  return (
    <div className={styles.container}>

    {product.links.map((item)=>(
        <div key={item.key} className={styles.options}>
        <div className={styles.wrapper}>
        <div className={styles.img}>
            <Image src={`/images/${item.image}`} width="275" height="175" ></Image>
        </div>
        <div className={styles.item}>
        <h2 className={styles.title}>{item.title}</h2>
        <div className={styles.border}></div>
        <p className={styles.desc}>{item.desc}</p>

    </div>
    </div>
    </div>
    ))}
        
    </div>
  )
}
