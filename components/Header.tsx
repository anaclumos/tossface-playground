import Link from 'next/link'

const Header = () => {
  return (
    <nav className='py-4 mx-auto text-center md:flex md:items-center md:justify-between dark:bg-slate-800 md:text-left lg:text-left'>
      <span className='mx-auto text-sm text-center text-gray-500 dark:text-gray-400 sm:mx-0'>
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
      <ul className='grid items-center grid-cols-3 py-2 mx-auto mt-3 text-sm text-center text-gray-500 lg:text-right dark:text-gray-400 sm:mx-0'>
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
