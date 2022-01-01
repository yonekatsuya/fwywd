import Image from 'next/image';
import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <>
        <div className='h-96 text-white' style={{ backgroundColor: '#262c3a' }}>
          <div className='pt-11 text-center'>
            <div className='inline-block'>
              <span className='table-cell pr-3 text-xs align-middle'>CREATED BY</span>
              <span className='table-cell text-lg align-middle'>米 勝矢</span>
            </div>
          </div>
          <div className='mt-11 h-32 text-center'>
            <Image
              src='/image/logo_white.png'
              width={96}
              height={130}
              objectFit='contain'
              alt='フッターアイコン'
            />
          </div>
          <div className='mt-10 text-center'>
            <div className='inline-block mr-5'>
              <Image
                src='/image/twitter.png'
                width={20}
                height={20}
                objectFit='contain'
                alt='Twitterアイコン'
              />
            </div>
            <div className='inline-block'>
              <Image
                src='/image/facebook.png'
                width={20}
                height={20}
                objectFit='contain'
                alt='Facebookアイコン'
              />
            </div>
          </div>
          <div className='mt-7 text-xs text-center'>© 2022 KIKAGAKU</div>
        </div>
      </>
    );
  }
}

export default Footer;
