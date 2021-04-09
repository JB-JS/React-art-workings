import React, { Component } from 'react';

class HistorySample extends Component {
  handleGoBack = () => {
    console.log(this);
    this.props.history.goBack();
  };

  handleGoHome = () => {
    this.props.history.push('/');
  };

  componentDidMount() {
    console.log(this);
    this.unblock = this.props.history.block('정말 떠나실 건가요?');
  }

  componentWillUnmount() {
    if (this.unblock) {
      this.unblock();
    }
  }

  render() {
    console.log('render');
    return (
      <div>
        <button onClick={this.handleGoBack}>뒤로</button>
        <button onClick={this.handleGoHome}>홈으로</button>
      </div>
    );
  }
}

export default HistorySample;
