import Image from 'next/image';
import Link from 'next/link';

export default function PageFooter(props) {
  return (
    <div className='h-96 text-white bg-footer-black'>
      <div className='pt-11 text-center'>
        <div className='inline-block'>
          <span className='table-cell pr-3 text-xs align-middle'>CREATED BY</span>
          <span className='table-cell text-lg align-middle'>米 勝矢</span>
        </div>
      </div>
      <div className='mt-11 h-32 text-center'>
        <Link href='/'>
          <a>
            <Image
              src='/image/logo_white.png'
              width={96}
              height={130}
              objectFit='contain'
              alt='フッターアイコン'
              className='hover:opacity-75 hover:cursor-pointer'
            />
          </a>
        </Link>
      </div>
      <div className='mt-10 text-center'>
        <div className='inline-block mr-5'>
          <Link href='https://google.com'>
            <a>
              <Image
                src='/image/twitter.png'
                width={20}
                height={20}
                objectFit='contain'
                alt='Twitterアイコン'
                className='hover:opacity-75 hover:cursor-pointer'
              />
            </a>
          </Link>
        </div>
        <div className='inline-block'>
          <Link href='https://www.youtube.com/'>
            <a>
              <Image
                src='/image/facebook.png'
                width={20}
                height={20}
                objectFit='contain'
                alt='Facebookアイコン'
                className='hover:opacity-75 hover:cursor-pointer'
              />
            </a>
          </Link>
        </div>
      </div>
      <div className='mt-7 text-xs text-center'>© 2022 KIKAGAKU</div>
    </div>
  );
}
