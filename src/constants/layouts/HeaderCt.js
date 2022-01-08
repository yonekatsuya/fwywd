import React, { Component } from 'react';

export default class HeaderCt extends Component {
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
