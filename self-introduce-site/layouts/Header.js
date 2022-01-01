import Image from 'next/image';
import React, { Component } from 'react';
import MenuList from '../components/Header/MenuList';

class Header extends Component {
  header_menu = ['ABOUT', 'SKILLS', 'VALUES', 'FUTURE'];

  render() {
    return (
      <>
        <div className='flex justify-between h-20'>
          <div className='w-full'>
            <Image
              src='/image/logo.png'
              width={160}
              height={80}
              objectFit='contain'
              alt='ヘッダーアイコン'
            />
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
