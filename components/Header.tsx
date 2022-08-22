import Link from 'next/link'

const Header = () => {
  return (
    <nav className='py-4 bg-white rounded-lg md:flex md:items-center md:justify-between dark:bg-slate-800'>
      <span className='text-sm text-gray-500 sm:text-center dark:text-gray-400'>
        <a href='https://cho.sh/' className='hover:underline' target='_blank' rel='noopener noreferrer'>
          Sunghyun Cho
        </a>
        {' ❤️ '}
        <a
          href='https://github.com/anaclumos/tossface-playground'
          className='hover:underline'
          target='_blank'
          rel='noopener noreferrer'
        >
          Open Source
        </a>
      </span>
      <ul className='grid items-center grid-cols-2 gap-4 mt-3 text-sm text-gray-500 dark:text-gray-400 sm:text-center md:text-right'>
        <li className='hover:underline'>
          <Link href='/'>Home</Link>
        </li>
        <li className='hover:underline'>
          <Link href='/more'>More</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Header
