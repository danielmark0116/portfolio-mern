import React, { Component } from 'react';

import axios from 'axios';

export default class ImageTest extends Component {
  state = {
    pic: '',
    loading: true
  };

  componentDidMount() {
    this.image();
  }

  image = async () => {
    try {
      let response = await axios.get(
        'http://localhost:8000/api/project/5da0d8a92c00818688cff2c4'
      );

      console.log(response);

      const picc = response.data.response[0].pic;

      this.setState({
        pic: picc,
        loading: false
      });
      console.log('resp: ', picc);
    } catch (err) {
      console.log(err.message);
    }
  };

  render() {
    const { loading, pic } = this.state;

    if (loading) return <h3>LOADING</h3>;

    return (
      <div>
        <img src={`data:image/jpeg;base64,${pic}`} alt="" />
      </div>
    );
  }
}
