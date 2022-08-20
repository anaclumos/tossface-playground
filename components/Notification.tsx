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
      document.querySelector('#notification-container')?.classList.add('translate-y-24')
      setIsOpen(false)
    }
    if (!isOpen && open) {
      document.querySelector('#notification-container')?.classList.remove('translate-y-24')
      setIsOpen(true)
    }
  }, [open, isOpen])

  return (
    <div
      id='notification-container'
      className='fixed inset-0 bottom-0 flex items-center justify-center px-4 pb-4 mt-auto transition-transform duration-700 translate-y-24 h-fit transform-gpu'
      style={{ zIndex: 1, fontFamily: 'Tossface, ui-san-serif, system-ui, Pretendard' }}
    >
      <div
        id='notification'
        className='flex items-center w-full max-w-xs p-4 mx-auto mb-4 text-gray-500 bg-white rounded-lg shadow bottom-8 dark:text-gray-400 dark:bg-gray-800'
        role='alert'
      >
        <div className='inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200'>
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
        <div className='ml-3 text-sm font-normal'>{children}</div>
        <button
          type='button'
          className='ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700 transition-background transition-colors'
          data-dismiss-target='#notification-container'
          aria-label='Close'
          onClick={onClose}
        >
          <span className='sr-only'>Close</span>
          <svg
            aria-hidden='true'
            className='w-5 h-5'
            fill='currentColor'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fillRule='evenodd'
              d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
              clipRule='evenodd'
            ></path>
          </svg>
        </button>
      </div>
    </div>
  )
}

export default Notification
