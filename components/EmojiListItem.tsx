import { emoji } from '../emoji'

const EmojiListItem = ({ name, info, unicode, link }: emoji) => {
  return (
    <button
      className='justify-between w-full focus:outline-none focus:shadow-outline-blue md:w-1/2 lg:w-1/3 xl:w-1/4'
      onClick={() => {
        navigator.clipboard.writeText(unicode)
      }}
    >
      <span
        className='flex items-center p-2 m-2 transition-colors rounded-lg bg-slate-100 dark:bg-slate-800 active:bg-slate-200 dark:active:bg-slate-900'
        style={{ fontFamily: 'Tossface' }}
      >
        <span className='pl-2 pr-6 text-6xl font-medium tracking-tight text-center text-slate-900 font-size-large min-w-48 dark:text-white max-w-16'>
          {unicode}
        </span>
        <div className='py-6 text-left'>
          <code className='text-base font-medium tracking-tight text-slate-500 dark:text-white'>
            {'U+' + unicode.charCodeAt(0).toString(16).toUpperCase()}
          </code>
          <a className='mt-5 text-lg font-medium tracking-tight text-slate-900 dark:text-white'>
            <h3>{name}</h3>
          </a>
          <div className='flex'>
            <div className='text-base text-slate-500 dark:text-slate-400'>
              {info}{' '}
              <a className='text-base tracking-tight text-slate-500 dark:text-white hover:underline' href={link}>
                Learn more.
              </a>
            </div>
          </div>
        </div>
      </span>
    </button>
  )
}

export default EmojiListItem
