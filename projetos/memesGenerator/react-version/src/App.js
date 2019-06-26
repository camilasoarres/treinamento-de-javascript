import React, { Component } from 'react';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
    this.state = {
      sorteando: false,
      memesList: [
        'https://i.pinimg.com/236x/40/36/59/403659fa9ac1c278d2227f921dfcb0c5.jpg',
        'https://pbs.twimg.com/media/DdgpGBoU0AAX1Vy.jpg',
        'https://pbs.twimg.com/media/D7SbuS1W4AAKTNL.jpg',
        'https://i.pinimg.com/236x/63/a0/01/63a001466ea0fefc5c7bd34d85af3bee.jpg',
        'https://i.pinimg.com/236x/29/a2/a8/29a2a81356162386e52ae98127a6db6d.jpg',
        'https://i.pinimg.com/236x/59/70/13/597013c08e53315c5c0488600dc74c62.jpg',
        'https://i.pinimg.com/236x/40/42/88/40428824382cad5e6318068cf3371ea4.jpg',
        'http://pm1.narvii.com/6787/81c033fe7fb40fbbb5f5f1589dca6c1496d25eecv2_00.jpg',
        'https://i.pinimg.com/236x/8e/15/76/8e1576cac0f428aa66c1fdaa2bae3df4.jpg',
        'https://pbs.twimg.com/media/Dqojj8nWwAEwm2c.jpg:large',
        'https://pbs.twimg.com/media/Dq-Hd3OU0AAMpI-.jpg:large',
        'https://i.pinimg.com/236x/d0/dc/7b/d0dc7bcc178aec4570599f1c51d2405c.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlI15diCV6JhoQnnGDCSHnZcGex0X_y1Vmr2p2I9g3WKW7iVNX',
      ],
    };
  }

  componentWillUpdate() {
    this.renderMeme();
  }

  getRandomArbitrary = (min, max) => {
    return Math.random() * (max - min) + min;
  }

  renderMeme = () => {
    const { memesList } = this.state;
    let meme = memesList[Math.floor(this.getRandomArbitrary(0, memesList.length))];

    // eslint-disable-next-line jsx-a11y/alt-text
    return <img src={meme}/>
  }

  handleSorteioClick = () => {
    this.setState({
      sorteando: !this.state.sorteando,
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Memes da gretchen :)</h1>
        {this.renderMeme()}
        <button onClick={this.handleSorteioClick}>Sorteio</button>
      </div>
    );
  }
}

export default App;
