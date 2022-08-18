import { Head } from 'next/document'
import Footer from '../components/Footer'
import LicenseItem from '../components/LicenseItem'

const licenses = () => {
  return (
    <>
      <h2 className='text-2xl font-semibold text-slate-900 dark:text-white'>Licenses</h2>
      <LicenseItem
        title='Tossface Playground'
        url='https://cho.sh/'
        text='The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer space.'
      />
      <Footer />
    </>
  )
}

export default licenses
