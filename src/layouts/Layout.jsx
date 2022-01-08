import Head from 'next/head';
import React, { Component } from 'react';
import PageFooter from './PageFooter';
import PageHeader from './PageHeader';

class Layout extends Component {
  render() {
    return (
      <>
        <Head>
          <title>{this.props.title}</title>
          <meta name='description' content={this.props.description} />
          <meta charSet='utf-8' />
          <meta name='viewport' content='initial-scale=1.0' width='device-width' />
        </Head>
        <PageHeader />
        {this.props.children}
        <PageFooter />
      </>
    );
  }
}

export default Layout;
