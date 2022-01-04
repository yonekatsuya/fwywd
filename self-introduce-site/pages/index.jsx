import { urlObjectKeys } from 'next/dist/shared/lib/utils';
import Image from 'next/image';
import AboutSelf from '../components/AboutSelf';
import Progress from '../components/Progress';
import Values from '../components/Values';
import IndexCt from '../constants/IndexCt';
import Layout from '../layouts/Layout';
import styles from '../styles/pages/Index.module.scss';

let indexCt = new IndexCt();

export default function Index() {
  return (
    <Layout>
      {/* ブロック1 */}
      <div className={`flex bg-header-green ${styles.h500}`}>
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
      <div className={`flex bg-cover bg-bg-about ${styles.h620}`} id='about'>
        <div className={`h-full ${styles.w15per}`}></div>
        <div className={`h-full ${styles.w70per}`}>
          <div className={`text-center ${styles.h16per}`}>
            <div className='inline-block pt-8'>
              <span className='table-cell pr-2 text-2xl font-bold tracking-widest align-middle'>
                私について
              </span>
              <span className='table-cell align-middle text-text-green'>ABOUT</span>
            </div>
          </div>
          <div className={`flex justify-between ${styles.h84per}`}>
            {indexCt.abouts.map((value) => (
              <>
                <AboutSelf img={value[0]} title={value[1]} content={value[2]} width={value[3]} />
              </>
            ))}
          </div>
        </div>
        <div className={`h-full ${styles.w15per}`}></div>
      </div>
      {/* ブロック3 */}
      <div className={`flex -mt-20 mb-8 bg-contain bg-bg-skills ${styles.h645}`} id='skills'>
        <div className='flex mt-28 w-full'>
          <div className={`text-right ${styles.w45per}`}>
            <Image
              src='/image/skill.png'
              width={500}
              height={460}
              objectFit='contain'
              alt='スキルの画像'
            />
          </div>
          <div className={`ml-6 ${styles.w55per}`}>
            <div className='w-9/12 h-full'>
              <div>
                <span className='table-cell pr-2 text-2xl font-bold tracking-widest align-middle'>
                  スキル
                </span>
                <span className='table-cell align-middle text-text-green'>SKILLS</span>
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
          <span className='table-cell align-middle text-text-green'>VALUES</span>
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
      <div className={`-mt-64 bg-no-repeat bg-cover bg-bg-future ${styles.h570}`}>
        <div className='text-center'>
          <div className='inline-block mt-80 w-2/3 h-52' id='future'>
            <div className='flex h-full'>
              <div className='w-1/2 h-full'>
                <div>
                  <span className='table-cell pr-2 text-2xl font-bold tracking-widest align-middle'>
                    3年後にやりたいこと
                  </span>
                  <span className='table-cell align-middle text-text-green'>FUTURE</span>
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
