type Props = {
  title: string
  text: string
  emoji: string
  learnmore: string
}

const EmojiListItem = ({ title, text, emoji, learnmore }: Props) => {
  return (
    <span className='flex items-center mx-auto'>
      <span className='pr-6 text-base text-6xl font-medium tracking-tight text-slate-900 font-size-large'>{emoji}</span>
      <div className='py-6'>
        <a className='mt-5 text-lg font-medium tracking-tight text-slate-900 dark:text-white hover:underline'>
          <h3>{title}</h3>
        </a>
        <div className='flex'>
          <div className='mt-2 text-base text-slate-500 dark:text-slate-400'>
            {text}{' '}
            <a
              className='mt-2 text-base tracking-tight text-slate-500 dark:text-white hover:underline'
              href={learnmore}
            >
              Learn more.
            </a>
          </div>
        </div>
      </div>
    </span>
  )
}

export default EmojiListItem
