import { emoji } from '../emoji'

const EmojiListItem = ({ name, info, unicode, link }: emoji) => {
  return (
    <span className='flex items-center mx-auto' style={{ fontFamily: 'Tossface' }}>
      <span className='pr-6 text-6xl font-medium tracking-tight text-center text-slate-900 font-size-large min-w-48 dark:text-white max-w-16'>
        {String.fromCodePoint(parseInt(unicode.substring(2), 16))}
      </span>
      <div className='py-6'>
        <code className='text-base font-medium tracking-tight text-slate-900 dark:text-white'>
          {unicode.toUpperCase()}
        </code>
        <a className='mt-5 text-lg font-medium tracking-tight text-slate-900 dark:text-white hover:underline'>
          <h3>{name}</h3>
        </a>
        <div className='flex'>
          <div className='mt-2 text-base text-slate-500 dark:text-slate-400'>
            {info}{' '}
            <a className='mt-2 text-base tracking-tight text-slate-500 dark:text-white hover:underline' href={link}>
              Learn more.
            </a>
          </div>
        </div>
      </div>
    </span>
  )
}

export default EmojiListItem
