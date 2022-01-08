import IndexCt from 'constants/IndexCt';
import AboutMeCard from 'components/index/AboutMeCard';

let indexCt = new IndexCt();

export default function AboutMe() {
  return (
    <div className={'flex h-[620px] bg-cover bg-about-me-img'} id='about'>
      <div className={'w-[15%] h-full'}></div>
      <div className={'w-[70%] h-full'}>
        <div className={'h-[16%] text-center'}>
          <div className='inline-block pt-8'>
            <span className='table-cell pr-2 text-2xl font-bold tracking-widest align-middle'>
              私について
            </span>
            <span className='table-cell text-base-green align-middle'>ABOUT</span>
          </div>
        </div>
        <div className={'flex justify-between h-[84%]'}>
          {indexCt.abouts.map((value) => (
            <>
              <AboutMeCard img={value[0]} title={value[1]} content={value[2]} width={value[3]} />
            </>
          ))}
        </div>
      </div>
      <div className={'w-[15%] h-full'}></div>
    </div>
  );
}
