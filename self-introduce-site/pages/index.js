import Layout from '../layouts/Layout';

export default () => (
  <Layout>
    {/* ブロック1 */}
    <div className='bg-gray-300 flex' style={{'height': '500px', 'background-color': '#6bc2c3'}}>
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
  </Layout>
);

