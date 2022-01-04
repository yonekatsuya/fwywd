import React, { Component } from 'react';
import { Link as Scroll } from 'react-scroll';

class MenuList extends Component {
  constructor(props) {
    super(props);
    this.text = props.text;
    this.id = props.id;
  }

  render() {
    return (
      <>
        <div className='relative w-28 h-full text-lg hover:opacity-75 hover:cursor-pointer'>
          <div className='absolute top-2/4 left-2/4 -translate-x-1/2 -translate-y-1/2 text-text-green'>
            <Scroll to={this.id} smooth={true} duration={600}>
              {this.text}
            </Scroll>
          </div>
        </div>
      </>
    );
  }
}

export default MenuList;
