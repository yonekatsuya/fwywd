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
            <img src='image/logo_white.png' className='inline-block w-24' />
          </div>
          <div className='mt-10 text-center'>
            <img src='image/twitter.png' className='inline-block mr-4 w-5' />
            <img src='image/facebook.png' className='inline-block w-5' />
          </div>
          <div className='mt-7 text-xs text-center'>© 2022 KIKAGAKU</div>
        </div>
      </>
    );
  }
}

export default Footer;
