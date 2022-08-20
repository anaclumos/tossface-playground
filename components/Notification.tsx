import React from 'react'

type Props = {
  open: boolean
  children: React.ReactNode
  onClose?: () => void
}

const Notification = ({ open, children, onClose }: Props) => {
  const [isOpen, setIsOpen] = React.useState(false)

  React.useEffect(() => {
    if (onClose) {
      setIsOpen(false)
      const timeout = setTimeout(onClose, 2000)
      return () => clearTimeout(timeout)
    }
  }, [onClose])

  // fade in/out animation
  React.useEffect(() => {
    if (isOpen && !open) {
      document.querySelector('#notification-container')?.classList.add('translate-y-36')
      setIsOpen(false)
    }
    if (!isOpen && open) {
      document.querySelector('#notification-container')?.classList.remove('translate-y-36')
      setIsOpen(true)
    }
  }, [open, isOpen])

  return (
    <div
      id='notification-container'
      className='fixed inset-0 bottom-0 flex items-center justify-center px-4 pb-4 mt-auto transition-transform duration-700 translate-y-36 h-fit transform-gpu'
      style={{ zIndex: 1, fontFamily: 'Tossface, ui-san-serif, system-ui, Pretendard' }}
    >
      <div
        id='notification'
        className='flex items-center w-full max-w-xs p-4 mx-auto mb-4 font-medium bg-white rounded-lg shadow bottom-8 dark:text-slate-200 dark:bg-slate-600 text-slate-900'
        role='alert'
      >
        <div className='inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-600 dark:text-green-200'>
          <svg
            aria-hidden='true'
            className='w-5 h-5'
            fill='currentColor'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fillRule='evenodd'
              d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
              clipRule='evenodd'
            ></path>
          </svg>
          <span className='sr-only'>Check icon</span>
        </div>
        <div className='ml-3 text-lg font-normal'>{children}</div>
      </div>
    </div>
  )
}

export default Notification
