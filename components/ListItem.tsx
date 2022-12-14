type Props = {
  title: string
  url: string
  text: string
}

const ListItem = ({ title, url, text }: Props) => {
  return (
    <a
      className='text-base font-medium text-slate-900 dark:text-white'
      href={url}
      target='_blank'
      rel='noopener noreferrer'
    >
      <div className='items-center h-full p-2 mx-auto transition-colors rounded-lg active:bg-slate-200 bg-slate-100 dark:bg-slate-700 dark:active:bg-slate-800'>
        <h3>{title}</h3>
        <div className='mt-2 text-sm text-slate-500 dark:text-slate-400'>{text}</div>
      </div>
    </a>
  )
}

export default ListItem
