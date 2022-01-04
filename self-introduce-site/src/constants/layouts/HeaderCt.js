import React, { Component } from 'react';

class HeaderCt extends Component {
  constructor(props) {
    super(props);

    this.headerMenu = [
      ['ABOUT', 'about'],
      ['SKILLS', 'skills'],
      ['VALUES', 'values'],
      ['FUTURE', 'future'],
    ];
  }
}

export default HeaderCt;
