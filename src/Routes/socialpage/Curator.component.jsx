import React from 'react';

import './Social.styles.scss'
export default class Curator extends React.Component {
  constructor(props) {
    super(props);
    this.loadScript = this.loadScript.bind(this)
  }

  loadScript(src, libraryId) {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = src;
      script.id = libraryId;
      document.body.appendChild(script);

      script.onload = () => {
      
        setTimeout(() => {
          resolve(true);
        }, 100);
      };
    });
  }

  componentDidMount() {
    this.loadScript('https://cdn.curator.io/published/' + this.props.feedId + '.js');
  }

  render() {
    return <div data-crt-feed-id={this.props.feedId}></div>;
  }
}
