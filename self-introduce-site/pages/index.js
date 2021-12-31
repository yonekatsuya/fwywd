import { urlObjectKeys } from 'next/dist/shared/lib/utils';
import Layout from '../layouts/Layout';
import AboutSelf from '../components/AboutSelf';

let test = [
  ['about-1.png', '趣味', 'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト', '176px'],
  ['about-2.png', '好きな食べ物', 'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト', '196px'],
  ['about-3.png', '性格', 'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト', '247px'],
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
  </Layout>
);

