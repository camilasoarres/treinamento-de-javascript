import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 10,
      running: false,
      control: false,
      mensagem: '',
    }
    this.interval = 0;
  }

  handleStart = () => {
    if(!this.state.running) {
      this.interval = setInterval(() => {
        this.handleDecrementar();
      }, 1000);

      this.setState(prevState => ({
        running: !prevState.running,
        ...prevState.pause && {
          pause: !prevState.pause,
        }
      }))
    }
  }

  handlePause = () => {
    clearInterval(this.state.running);
    this.setState(prevState => ({
      pause: true,
      running: false,
    }));
    clearInterval(this.interval)
  }

  handleDecrementar = () => {
    const { running, pause } = this.state;
    let { time } = this.state;
    if(running && !pause) {
      if(time > 0) {
        this.setState({
        time: time - 1,
        mensagem: '',
      });
    } 
      if(time === 0) {
        this.setState({
          time: !this.state.control ? 5 : 10,
          control: !this.state.control,
          mensagem: 'Rodando o intervalo!',
        });
      } return null;
    } return null;
  }

  renderFormatTime = () => {
    const { time } = this.state;
    let minutos = Math.floor(time % 3600 / 60);
    let segundos =  Math.floor(time % 3600 % 60);
  
    return `${minutos < 10 ? "0" : ''}${minutos}:${segundos < 10 ? '0' : '' }${segundos}`
  }

  render() {
    return (
      <div className="App">
         <p>{this.renderFormatTime()}</p>
         <header className="App-header">
            <button onClick={this.handleStart}>Start</button>
            <button onClick={this.handlePause}>Pause</button>
            <span>{this.state.mensagem}</span>
          </header>
      </div>
    );
  }
}

export default App;
