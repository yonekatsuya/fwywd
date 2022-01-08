import Image from 'next/image';
import Link from 'next/link';
import MenuList from '../components/pageHeader/MenuList';
import HeaderCt from '../constants/layouts/HeaderCt';

let headerCt = new HeaderCt();

// class PageHeader extends Component {
export default function PageHeader(props) {
  return (
    <div className='flex justify-between h-20'>
      <div className='w-full'>
        <Link href='/'>
          <a>
            <Image
              src='/image/logo.png'
              width={160}
              height={80}
              objectFit='contain'
              alt='ヘッダーアイコン'
              className='hover:opacity-75 hover:cursor-pointer'
            />
          </a>
        </Link>
      </div>
      <div className='flex justify-end w-full'>
        {headerCt.headerMenu.map((value) => (
          <>
            <MenuList text={value[0]} id={value[1]} />
          </>
        ))}
      </div>
    </div>
  );
}
