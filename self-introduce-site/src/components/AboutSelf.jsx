import Image from 'next/image';
import React, { Component } from 'react';

class AboutSelf extends Component {
  constructor(props) {
    super(props);
    this.img = props.img;
    this.title = props.title;
    this.content = props.content;
    this.width = props.width;
  }

  render() {
    return (
      <>
        <div className='w-2/6'>
          <div className='text-center'>
            <Image
              src={this.img}
              width={this.width}
              height={140}
              objectFit='contain'
              alt='私を表す画像'
            />
          </div>
          <div className='pt-5 text-xl font-bold tracking-widest text-center text-text-green'>
            {this.title}
          </div>
          <div className='flex justify-center'>
            <div className='pt-4 pl-2 w-11/12'>{this.content}</div>
          </div>
        </div>
      </>
    );
  }
}

export default AboutSelf;
