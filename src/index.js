import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { lat: null, lng: null, errorMessage: '' };

    window.navigator.geolocation.getCurrentPosition(
      ({coords}) => this.setState({lat: coords.latitude, lng: coords.longitude}),
      (error) => this.setState({errorMessage: error.message}));
  }

  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return (
        <div>
          Error: {this.state.errorMessage}
        </div>
      );
    }
    if (!this.state.errorMessage && this.state.lat) {
      return (
        <div>
          Latitude: {this.state.lat}, Latitude: {this.state.lng} <br/>
        </div>
      );
    }
    return <div>Loading...</div>;
  }
}


ReactDOM.render(
  <App/>,
  document.querySelector('#root')
);