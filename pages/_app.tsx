import type { AppProps } from 'next/app'
import 'tailwindcss/tailwind.css'

const App = ({ Component, pageProps }: AppProps) => (
  <div className='min-h-screen px-6 py-8 mx-auto bg-white shadow-xl dark:bg-slate-800 ring-1 ring-slate-900/5'>
    <div className='max-w-screen-xl px-4 mx-auto sm:px-6 md:px-8'>
      <Component {...pageProps} />
    </div>
  </div>
)

export default App
