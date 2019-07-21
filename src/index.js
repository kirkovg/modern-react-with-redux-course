import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {
  state = { lat: null, errorMessage: '' };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      ({coords}) => this.setState({lat: coords.latitude}),
      (error) => this.setState({errorMessage: error.message}));
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate', prevState, prevProps, snapshot);
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return (
        <div>
          Error: {this.state.errorMessage}
        </div>
      );
    }
    if (!this.state.errorMessage && this.state.lat) {
      return (
        <SeasonDisplay lat={this.state.lat}/>
      );
    }
    return <Spinner message='Please accept location request'/>;
  }

  // NOTE: border-red is not actually defined
  render() {
    return (
      <div className='border-red'>
        {this.renderContent()}
      </div>
    );
  }
}


ReactDOM.render(
  <App/>,
  document.querySelector('#root')
);