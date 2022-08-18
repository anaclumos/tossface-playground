import { Head } from 'next/document'
import Footer from '../components/Footer'
import LicenseItem from '../components/LicenseItem'

const licenses = () => {
  return (
    <>
      <h2 className='text-2xl font-semibold text-slate-900 dark:text-white'>Licenses</h2>
      <LicenseItem
        title='Tossface'
        url='https://toss.im/tossface/copyright'
        text='Tossface is an emoji library designed by a Korean Decacorn company Toss.'
      />
      <Footer />
    </>
  )
}

export default licenses
