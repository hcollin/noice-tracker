import React from 'react';
import MainHeader from './MainHeader';
import MainFooter from './MainFooter';
import MainContent from './MainContent';

export default class App extends React.Component {
  render() {
    return (
      <div id="content" className="layout">
          <MainHeader />
          <MainContent />
          <MainFooter />
      </div>
    );
  }
}

