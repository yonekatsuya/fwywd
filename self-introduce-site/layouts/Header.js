import Image from 'next/image';
import Link from 'next/link';
import React, { Component } from 'react';
import MenuList from '../components/Header/MenuList';

class Header extends Component {
  header_menu = ['ABOUT', 'SKILLS', 'VALUES', 'FUTURE'];

  render() {
    return (
      <>
        <div className='flex justify-between h-20'>
          <div className='w-full'>
            {/* <div className='inline-block bg-gray-300'> */}
            <Link href='/'>
              <a>
                <Image
                  src='/image/logo.png'
                  width={160}
                  height={80}
                  objectFit='contain'
                  alt='ヘッダーアイコン'
                />
              </a>
            </Link>
            {/* </div> */}
          </div>
          <div className='flex justify-end w-full'>
            {this.header_menu.map((value) => (
              <>
                <MenuList text={value} />
              </>
            ))}
          </div>
        </div>
      </>
    );
  }
}

export default Header;
