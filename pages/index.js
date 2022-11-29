import Head from 'next/head'
import Image from 'next/image'
import PageLayout from '../components/PageLayout'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <PageLayout title='Home' desc='Home page'>
      <h1>Home</h1>
    </PageLayout>
  )
}
