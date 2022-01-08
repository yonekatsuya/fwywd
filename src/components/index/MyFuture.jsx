import IndexCt from 'constants/IndexCt';

let indexCt = new IndexCt();

export default function MyFuture() {
  return (
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
  );
}
