import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    var Twit = require('twit');
    var T = new Twit({
      consumer_key: '52yIhZKBqzQYsEkUsMtF3Si4N',
      consumer_secret: 'BMCd2A33tNqqkRCbDRwbRf4JqhunlssOgva2EbBSUNub2eJWvs',
      access_token: '231790578-Igb7QArGDG0c2CRqYHpXMI3dNrlFDrYbrgP8D9O3',
      access_token_secret: '6iObYwx9wuZU2jY6zrwu9Ie3h1QD6uFe78dhKKbYDdyFU'
    });
    var params = {
      id: '1'
    }
    T.get('trends/place', params, gotData);

    function gotData(err, data, response) {
      console.log(data);
    }
    return (
      <h2>hello world</h2>
      
    );
  }
}

export default App;
