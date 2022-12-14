import { svgMap } from '../public/svg'
import Image from 'next/image'

type Props = {
  unicode: string
  name: string
  info: string
  link: string
  fn: (arg0: string) => void
}

const EmojiListItem = ({ unicode, name, info, link, fn }: Props) => {
  return (
    <button
      className='w-full min-h-24'
      onClick={() => {
        navigator.clipboard.writeText(unicode)
        fn(`Copied ${unicode} ${name}!`)
      }}
    >
      <span className='flex items-center h-full p-2 transition-colors rounded-lg bg-slate-100 dark:bg-slate-700 active:bg-slate-200 dark:active:bg-slate-800'>
        <span
          className='pl-4 pr-6 text-6xl font-medium text-center text-slate-900 font-size-large min-w-48 dark:text-white max-w-16'
          style={{ fontFamily: 'Tossface' }}
        >
          <Image
            src={svgMap[unicode.charCodeAt(0).toString(16).toUpperCase()]}
            className='w-full h-full'
            alt={unicode}
            width={100}
            height={100}
            layout='fixed'
            priority={true}
          />
        </span>
        <div className='py-6 pr-4 text-left'>
          <code className='text-base font-medium text-slate-500 dark:text-slate-400'>
            {'U+' + unicode.charCodeAt(0).toString(16).toUpperCase()}
          </code>
          <h3 className='text-lg font-medium text-slate-900 dark:text-white'>
            <a className='hover:underline' href={link} target='_blank' rel='noopener noreferrer'>
              {name}
            </a>
          </h3>
          <div className='flex'>
            <div className='text-base text-slate-500 dark:text-slate-400'>{info}</div>
          </div>
        </div>
      </span>
    </button>
  )
}

export default EmojiListItem
