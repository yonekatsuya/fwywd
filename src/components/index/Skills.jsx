import IndexCt from 'constants/IndexCt';
import SkillsProgress from 'components/index/SkillsProgress';
import Image from 'next/image';

let indexCt = new IndexCt();

export default function Skills() {
  return (
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
                  <SkillsProgress skill={value[0]} status={value[1]} />
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
