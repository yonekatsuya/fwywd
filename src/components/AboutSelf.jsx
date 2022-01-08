import Image from 'next/image';

export default function AboutSelf(props) {
  return (
    <div className='w-2/6'>
      <div className='text-center'>
        <Image
          src={props.img}
          width={props.width}
          height={140}
          objectFit='contain'
          alt='私を表す画像'
        />
      </div>
      <div className='pt-5 text-xl font-bold tracking-widest text-center text-text-green'>
        {props.title}
      </div>
      <div className='flex justify-center'>
        <div className='pt-4 pl-2 w-11/12'>{props.content}</div>
      </div>
    </div>
  );
}
