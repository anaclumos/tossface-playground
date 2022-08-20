import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='py-12 bg-white rounded-lg md:flex md:items-center md:justify-between dark:bg-slate-800'>
      <span className='text-sm text-gray-500 sm:text-center dark:text-gray-400'>
        © 2022{' '}
        <a href='https://cho.sh/' className='hover:underline'>
          Sunghyun Cho
        </a>
        {' ❤️ '}
        <a href='https://github.com/anaclumos/tossface-playground' className='hover:underline'>
          Open Source
        </a>
      </span>
      <ul className='flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0'>
        <li>
          <Link href='/more' className='mr-4 hover:underline md:mr-6 '>
            More
          </Link>
        </li>
      </ul>
    </footer>
  )
}

export default Footer
