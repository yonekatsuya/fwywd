import IndexCt from 'constants/IndexCt';
import ValuesCard from 'components/index/ValuesCard';

let indexCt = new IndexCt();

export default function Values() {
  return (
    <>
      <div className='text-center' id='values'>
        <div className='inline-block'>
          <span className='table-cell pr-2 text-2xl font-bold tracking-widest align-middle'>
            価値観
          </span>
          <span className='table-cell text-base-green align-middle'>VALUES</span>
        </div>
      </div>
      <div className='text-center'>
        <div className='inline-block mt-6 w-2/3 h-96 bg-white'>
          <div className='flex h-full'>
            {indexCt.values.map((value) => (
              <>
                <ValuesCard
                  src={value[0]}
                  title={value[1]}
                  content={value[2]}
                  border_flg={value[3]}
                />
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
