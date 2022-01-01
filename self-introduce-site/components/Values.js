import Image from 'next/image';
import React, { Component } from 'react';

class Values extends Component {
  constructor(props) {
    super(props);
    this.src = props.src;
    this.title = props.title;
    this.content = props.content;
    this.border_flg = props.border_flg;

    if (this.border_flg == true) {
      this.style = { borderRight: '1px solid #6bc2c3' };
    } else {
      this.style = {};
    }
  }

  render() {
    return (
      <>
        <div className='w-1/3 h-full'>
          <div style={this.style}>
            <div className='inline-block'>
              <Image
                src={this.src}
                width={160}
                height={160}
                objectFit='contain'
                alt='価値観を表す画像'
              />
            </div>
            <div>
              <span className='inline-block mt-3 font-bold'>{this.title}</span>
            </div>
            <div className='inline-block mt-3 w-10/12 h-40 text-left break-words'>
              {this.content}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Values;
