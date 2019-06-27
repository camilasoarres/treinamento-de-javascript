import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        {id: 0, task: 'Beber água'},
      ],
      nextId: 1,
      value: '',
    };
  }

  addTodo = (todoTask) => {
    const { tasks, nextId, value } = this.state;
    let taskItem = tasks.slice();

    if (value !== '') {
      taskItem.push({
        id: nextId,
        task: todoTask
      });
    }
  
    this.setState({
      tasks: taskItem,
      nextId: nextId + 1,
      value: '',
    });
  }

  removeTodo = (id) => {
    const { tasks } = this.state;

    this.setState({
      tasks: tasks.filter((todo) => todo.id !== id),
    });
  }

  handleChange = (ev) => {
    this.setState({
      value: ev.target.value,
    });
  }

  handleKeyUp = (event) => {
		if (event.key === 'Enter') {
			this.addTodo(this.state.value);
		}
  }
  
  renderMap = () => {
    const { tasks } = this.state;

    return (
      tasks.map((todo) => {
        return (
          <li key={todo.id}>
            <label todo={todo}>
              {todo.task}
            </label>
            <div>
              <button onClick={()=> this.removeTodo(todo.id)} className='delete'>Deletar</button>
            </div>
          </li>
        );
      })
    )
  }

  render() {
    return (
      <div className='container'>
        <div className='header'>
          <h1>ToDo List</h1>
          <div className='box'>
            <input
              className='task-input'
              type="text"
              value={this.state.value}
              onKeyUp={this.handleKeyUp}
              onChange={this.handleChange} />
            <button className='addButton' onClick={() => this.addTodo(this.state.value)}>Submit</button>
          </div>
        </div>
        <ul className='todo-list'>
          {this.renderMap()}
        </ul>
      </div>
    );
  }
}

export default App;
