import Footer from '../components/Footer'
import LicenseItem from '../components/LicenseItem'

const licenses = () => {
  return (
    <>
      <h1 className='my-6 text-3xl font-bold text-slate-900 dark:text-white'>Thank you for using this project!</h1>
      <h2 className='text-2xl font-semibold text-slate-900 dark:text-white'>Licenses and Attributions</h2>
      <LicenseItem
        title='Tossface'
        url='https://toss.im/tossface/copyright'
        text='Took the open-sourced Tossface emoji library to display the font.'
      />
      <LicenseItem
        title='Emojipedia: Toss Face'
        url='https://emojipedia.org/toss-face/'
        text='Noted some introduction texts.'
      />
      <LicenseItem title='Flowbite' url='https://flowbite.com/' text='Noted some Tailwind CSS designs.' />
      <Footer />
    </>
  )
}

export default licenses
