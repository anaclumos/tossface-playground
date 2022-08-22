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
      <ul className='grid items-center grid-cols-3 py-2 mt-3 text-sm text-right text-gray-500 dark:text-gray-400'>
        <li className='hover:underline'>
          <a href='https://toss.im/tossface'>Tossface</a>
        </li>
        <li className='hover:underline'>
          <Link href='/'>
            <a>Home</a>
          </Link>
        </li>
        <li className='hover:underline'>
          <Link href='/more'>
            <a>More</a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Header
