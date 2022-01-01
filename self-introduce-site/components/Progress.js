import React, { Component } from 'react';

class Progress extends Component {
  constructor(props) {
    super(props);
    this.skill = props.skill;
    this.status = props.status;
  }

  render() {
    return (
      <>
        <div style={{ color: '#008c8d' }}>{this.skill}</div>
        <div className='flex relative pt-1'>
          <div className='inline-block w-full'>
            <div
              className='flex overflow-hidden mb-4 h-4 text-xs rounded'
              style={{ backgroundColor: '#c5eaea' }}
            >
              <div
                style={{ width: this.status, backgroundColor: '#2bb9ba' }}
                className='flex flex-col justify-center text-center text-white whitespace-nowrap shadow-none'
              ></div>
            </div>
          </div>
          <div
            className='flex justify-center items-center ml-4 h-4 text-lg'
            style={{ color: '#008c8d' }}
          >
            {this.status}
          </div>
        </div>
      </>
    );
  }
}

export default Progress;
