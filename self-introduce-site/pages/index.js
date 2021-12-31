import { urlObjectKeys } from 'next/dist/shared/lib/utils';
import Layout from '../layouts/Layout';
import AboutSelf from '../components/AboutSelf';
import Progress from '../components/Progress';
import Values from '../components/Values';

let test = [
  ['about-1.png', '趣味', 'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト', '176px'],
  ['about-2.png', '好きな食べ物', 'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト', '196px'],
  ['about-3.png', '性格', 'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト', '247px'],
]

let skills = [
  ['HTML', '40%'],
  ['CSS', '30%'],
  ['JavaScript', '60%'],
  ['Python', '80%']
]

let values = [
  ['value1.png', '価値観01', 'テキスト1テキスト1テキスト1テキスト1テキスト1テキスト1', true],
  ['value2.png', '価値観02', 'テキスト2テキスト2テキスト2テキスト2テキスト2テキスト2', true],
  ['value3.png', '価値観03', 'テキスト3テキスト3テキスト3テキスト3テキスト3テキスト3', false]
]

export default () => (
  <Layout>
    {/* ブロック1 */}
    <div className='flex' style={{'height': '500px', 'background-color': '#6bc2c3'}}>
      <div className="w-6/12 flex justify-center items-center text-white tracking-widest">
        <div className="w-full pl-24">
          <div className='text-4xl font-bold'>
            メインタイトル
          </div>
          <div className='text-2xl mt-4'>
            サブタイトル
          </div>
        </div>
      </div>
      <div className="w-6/12">
        <img src="hero.png" className="inline-block pt-8 ml-24" style={{'width': '520px'}} />
      </div>
    </div>
    {/* ブロック2 */}
    <div className="bg-bg-about bg-cover flex" style={{'height': '620px'}}>
      <div className="h-full" style={{'width': '15%'}}></div>
      <div className="h-full" style={{'width': '70%'}}>
        <div className="text-center" style={{'height': '16%'}}>
          <div className="pt-8 inline-block">
            <span className="table-cell align-middle text-2xl pr-2 tracking-widest font-bold">私について</span>
            <span className="table-cell align-middle" style={{'color': '#008c8d'}}>ABOUT</span>
          </div>
        </div>
        <div className='flex justify-between' style={{'height': '84%'}}>
          {test.map((value) => (
            <AboutSelf img={value[0]} title={value[1]} content={value[2]} width={value[3]} />
          ))}
        </div>
      </div>
      <div className="h-full" style={{'width': '15%'}}></div>
    </div>
    {/* ブロック3 */}
    <div className="bg-bg-skills bg-contain bg-no-repeat -mt-20 mb-8 flex" style={{'height': '650px'}}>
        <div className="mt-28 w-full flex">
          <div className="w-6/12 text-right">
            <img src="skill.png" className="w-9/12 inline-block pt-12" />
          </div>
          <div className="w-6/12 ml-6">
            <div className="h-full w-9/12">
              <div>
                <span className="table-cell align-middle text-2xl pr-2 tracking-widest font-bold">スキル</span>
                <span className="table-cell align-middle" style={{'color': '#008c8d'}}>SKILLS</span>
              </div>
              <div className="mt-4">テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</div>
              <div className="h-72 w-full mt-4 bg-white p-7 pr-10">
                {skills.map((value) => (
                  <Progress skill={value[0]} status={value[1]} />
                ))}
              </div>
            </div>
          </div>
        </div>
    </div>
    {/* ブロック４ */}
    <div className="text-center">
      <div className="inline-block">
        <span className="table-cell align-middle text-2xl pr-2 tracking-widest font-bold">価値観</span>
        <span className="table-cell align-middle" style={{'color': '#008c8d'}}>VALUES</span>
      </div>
    </div>
    <div className="text-center">
      <div className="mt-6 h-96 w-2/3 inline-block bg-white">
        <div className="flex h-full">
          {values.map((value) => (
            <Values src={value[0]} title={value[1]} content={value[2]} border_flg={value[3]} />
          ))}
        </div>
      </div>
    </div>
    {/* ブロック5 */}
    <div className="bg-bg-future bg-cover bg-no-repeat -mt-64" style={{'height': '570px'}}>
      <div className="text-center">
        <div className="mt-80 h-52 w-2/3 inline-block">
          <div className="flex h-full">
            <div className="w-1/2 h-full">
              <div>
                <span className="table-cell align-middle text-2xl pr-2 tracking-widest font-bold">3年後にやりたいこと</span>
                <span className="table-cell align-middle" style={{'color': '#008c8d'}}>FUTURE</span>
              </div>
              <div className="text-left mt-6 pr-6">
                テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
              </div>
            </div>
            <div className="w-1/2 h-full bg-future bg-cover bg-no-repeat">
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

