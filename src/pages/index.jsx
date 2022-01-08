import { urlObjectKeys } from 'next/dist/shared/lib/utils';
import Image from 'next/image';
import AboutSelf from '../components/AboutSelf';
import Progress from '../components/Progress';
import Values from '../components/Values';
import IndexCt from '../constants/IndexCt';
import Layout from '../layouts/Layout';

let indexCt = new IndexCt();

export default function Index() {
  return (
    <Layout title={indexCt.pageTitle} description={indexCt.pageDescription}>
      {/* ブロック1 */}
      <div className={'flex h-[500px] bg-header-green'}>
        <div className='flex justify-center items-center w-6/12 tracking-widest text-white'>
          <div className='pl-24 w-full'>
            <div className='text-4xl font-bold'>【米 勝矢】の自己紹介ページ</div>
            <div className='mt-4 text-2xl'>「現在」と「未来」について</div>
          </div>
        </div>
        <div className='w-6/12'>
          <div className='pl-24'>
            <Image
              src='/image/hero.png'
              alt='アイキャッチ画像'
              objectFit='contain'
              width={520}
              height={505}
            />
          </div>
        </div>
      </div>
      {/* ブロック2 */}
      <div className={'flex h-[620px] bg-cover bg-bg-about'} id='about'>
        <div className={'w-[15%] h-full'}></div>
        <div className={'w-[70%] h-full'}>
          <div className={'h-[16%] text-center'}>
            <div className='inline-block pt-8'>
              <span className='table-cell pr-2 text-2xl font-bold tracking-widest align-middle'>
                私について
              </span>
              <span className='table-cell text-text-green align-middle'>ABOUT</span>
            </div>
          </div>
          <div className={'flex justify-between h-[84%]'}>
            {indexCt.abouts.map((value) => (
              <>
                <AboutSelf img={value[0]} title={value[1]} content={value[2]} width={value[3]} />
              </>
            ))}
          </div>
        </div>
        <div className={'w-[15%] h-full'}></div>
      </div>
      {/* ブロック3 */}
      <div className={'flex -mt-20 mb-8 h-[645px] bg-contain bg-bg-skills'} id='skills'>
        <div className='flex mt-28 w-full'>
          <div className={'w-[45%] text-right'}>
            <Image
              src='/image/skill.png'
              width={500}
              height={460}
              objectFit='contain'
              alt='スキルの画像'
            />
          </div>
          <div className={'ml-6 w-[55%]'}>
            <div className='w-9/12 h-full'>
              <div>
                <span className='table-cell pr-2 text-2xl font-bold tracking-widest align-middle'>
                  スキル
                </span>
                <span className='table-cell text-text-green align-middle'>SKILLS</span>
              </div>
              <div className='mt-4'>{indexCt.skillDesc}</div>
              <div className='p-7 pr-10 mt-4 w-full h-72 bg-white'>
                {indexCt.skills.map((value) => (
                  <>
                    <Progress skill={value[0]} status={value[1]} />
                  </>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ブロック４ */}
      <div className='text-center' id='values'>
        <div className='inline-block'>
          <span className='table-cell pr-2 text-2xl font-bold tracking-widest align-middle'>
            価値観
          </span>
          <span className='table-cell text-text-green align-middle'>VALUES</span>
        </div>
      </div>
      <div className='text-center'>
        <div className='inline-block mt-6 w-2/3 h-96 bg-white'>
          <div className='flex h-full'>
            {indexCt.values.map((value) => (
              <>
                <Values src={value[0]} title={value[1]} content={value[2]} border_flg={value[3]} />
              </>
            ))}
          </div>
        </div>
      </div>
      {/* ブロック5 */}
      <div className={'-mt-64 h-[570px] bg-no-repeat bg-cover bg-bg-future'}>
        <div className='text-center'>
          <div className='inline-block mt-80 w-2/3 h-52' id='future'>
            <div className='flex h-full'>
              <div className='w-1/2 h-full'>
                <div>
                  <span className='table-cell pr-2 text-2xl font-bold tracking-widest align-middle'>
                    3年後にやりたいこと
                  </span>
                  <span className='table-cell text-text-green align-middle'>FUTURE</span>
                </div>
                <div className='pr-6 mt-6 text-left'>{indexCt.futureDesc}</div>
              </div>
              <div className='w-1/2 h-full bg-no-repeat bg-cover bg-future'></div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
