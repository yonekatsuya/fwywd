import Image from 'next/image';

export default function PageMain() {
  return (
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
  );
}
