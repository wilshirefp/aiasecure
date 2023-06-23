import Head from 'next/head'
import React from 'react'
import ProductDesc from '../../components/ProductDesc';
import ProductHero from '../../components/ProductHero';
import {data} from '../../data'
import styles from '../../styles/Product.module.scss'
import ProductOptions from '../../components/ProductOptions';
import Newsletter from '../../components/Newsletter';
import ProductIndustries from '../../components/ProductIndustries';



export default function Product({product}) {
  return (
    <div className={styles.container}>
    <Head>
        <title>A|A Securities</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta name="description" content="Alternative Investment Advisors" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <ProductHero product={product}/>
    <ProductDesc product={product}/>
    <ProductOptions product={product}/>
    <ProductIndustries product={product}/>
    <Newsletter />
    </div>
  )
}

export const getStaticPaths = async () =>{
    const products = data;
    const paths =  products.map((item)=>{
        return {
            params: {name: item.name}
        }
    });
    return {
        paths,
        fallback: false
    };
};

export const getStaticProps = async (ctx) =>{
    const name = ctx.params.name;
    const product = data.filter((item)=> item.name===name)[0];
    return{
        props:{product},
    }
}