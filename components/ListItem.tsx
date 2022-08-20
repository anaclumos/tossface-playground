type Props = {
  title: string
  url: string
  text: string
}

const ListItem = ({ title, url, text }: Props) => {
  return (
    <div className='py-2 mx-auto'>
      <a
        className='mt-5 text-base font-medium tracking-tight text-slate-900 dark:text-white hover:underline'
        href={url}
      >
        <h3>{title}</h3>
      </a>
      <div className='mt-2 text-sm text-slate-500 dark:text-slate-400'>{text}</div>
    </div>
  )
}

export default ListItem