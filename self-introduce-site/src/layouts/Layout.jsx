import React, { Component } from 'react';
import PageFooter from './PageFooter';
import PageHeader from './PageHeader';

class Layout extends Component {
  render() {
    return (
      <>
        <PageHeader />
        {this.props.children}
        <PageFooter />
      </>
    );
  }
}

export default Layout;
