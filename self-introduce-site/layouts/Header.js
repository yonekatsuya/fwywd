import Image from 'next/image';
import Link from 'next/link';
import React, { Component } from 'react';
import MenuList from '../components/Header/MenuList';

class Header extends Component {
  header_menu = [
    ['ABOUT', 'about'], 
    ['SKILLS', 'skills'], 
    ['VALUES', 'values'], 
    ['FUTURE', 'future']
  ];

  render() {
    return (
      <>
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
            {this.header_menu.map((value) => (
              <>
                <MenuList text={value[0]} id={value[1]} />
              </>
            ))}
          </div>
        </div>
      </>
    );
  }
}

export default Header;
