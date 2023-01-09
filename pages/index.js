import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Section1 from '../components/page1/Section1'
import Section2left from '../components/page1/Section2left'
import Section2right from '../components/page1/Section2right'
import Section3 from '../components/page1/Section3'
import Footer from '../components/Footer'


export default function Home() {
  return (
    <>
      <Section1/>
      <Section2left />
      <Section2right />
      <Section2left />
      <Section2right />
      <Section3 />
      <Footer />
    </>
  )
}
