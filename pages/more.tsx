import Header from '../components/Header'
import ListItem from '../components/ListItem'

const licenses = () => {
  return (
    <>
      <Header />
      <h1 className='my-6 text-3xl font-bold text-slate-900 dark:text-white'>More Info</h1>
      <h2 className='py-2 mt-4 text-2xl font-semibold text-slate-900 dark:text-white' lang='ko'>
        한국어 번역
      </h2>
      <p className='py-1 text-base font-medium text-slate-900 dark:text-white' lang='ko'>
        토스페이스는 대한민국의 (거의) 데카콘 기업 비바 리퍼블리카가 창작한 이모지 폰트 페이스입니다. 초기 토스페이스는
        의도적으로 변화된 이모지 디자인을 포함하고 있었습니다. 일본의 특정 문화를 나타내는 이모지를 대응되는 한국 문화의
        모습으로 변경하거나, 과거의 기술을 나타내는 이모지를 대응되는 현대 기술의 모습으로 변경하는 것이 그
        예시였습니다. 안타깝게도 이런 변화는 여러 이해 관계자들의 반발을 일으켰고, 비바 리퍼블리카는 이모지를 제거해야
        했습니다. 저는 이 이모지들을 Unicode Private Area라고 하는 표준 기술을 활용하여 반환하는 것을 비바 리퍼블리카
        측에 제안하였고, 비바 리퍼블리카는 이 요청을 수락했습니다. 그러나 이 이모지들은 Unicode 표준에 없기에 쉽게
        입력할 수 있는 방법이 없었습니다. 저는 이 찾기 어려운 한국적, 시대적 가치를 담은 이모지들을 쉽게 복사할 수
        있도록 이 웹페이지를 제작했습니다. 무엇보다 이 웹사이트는 한국의 문화를 알리는 예쁜 박물관의 역할도 합니다.
      </p>

      <h2 className='py-2 mt-4 text-2xl font-semibold text-slate-900 dark:text-white'>Relavant Links</h2>
      <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
        <ListItem
          title='GitHub Repository'
          url='https://github.com/anaclumos/tossface-playground'
          text='Completely Open-sourced on GitHub!'
        />
        <ListItem title='Blog Post' url='https://cho.sh/blog/92B47B' text='A postmortem of this project' />
      </div>

      <h2 className='py-2 mt-4 text-2xl font-semibold text-slate-900 dark:text-white'>Licenses and Attributions</h2>
      <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
        <ListItem
          title='Tossface'
          url='https://toss.im/tossface/copyright'
          text='Took the open-sourced Tossface emoji library to display the font.'
        />
        <ListItem
          title='Emojipedia: Toss Face'
          url='https://emojipedia.org/toss-face/'
          text='Noted some introduction texts.'
        />
        <ListItem title='Flowbite' url='https://flowbite.com/' text='Noted some Tailwind CSS designs.' />
      </div>
      <h2 className='py-2 mt-4 text-2xl font-semibold text-slate-900 dark:text-white'>Privacy</h2>
      <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
        <ListItem
          title='Simple Analytics'
          url='https://simpleanalytics.com/tossface.cho.sh'
          text='Tracking user origin and source of visit without collecting any personal information.'
        />
      </div>
    </>
  )
}

export default licenses
