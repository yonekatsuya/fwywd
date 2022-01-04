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
        <div className='text-text-green'>{this.skill}</div>
        <div className='flex relative pt-1'>
          <div className='inline-block w-full'>
            <div className='flex overflow-hidden mb-4 h-4 text-xs rounded bg-thin-green'>
              <div
                style={{ width: this.status }}
                className='flex flex-col justify-center text-center text-white whitespace-nowrap shadow-none bg-dark-green'
              ></div>
            </div>
          </div>
          <div className='flex justify-center items-center ml-4 h-4 text-lg text-text-green'>
            {this.status}
          </div>
        </div>
      </>
    );
  }
}

export default Progress;
