import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      category: '',
      color: '#800000',
      tasks: [],
      check: false
    };
  }

  handleChange = (ev) => {
    const value = ev.target.name;
    this.setState({
      [value]: ev.target.value,
    });
  }

  renderMap = () => {
    const { tasks } = this.state;

    return (
      tasks.map((task, index) => {
        return (
          <li style={{ backgroundColor: task.color }}
            key={index}>
            <label>
              <p>{task.title}</p>
              <p>{task.description}</p>
              <p>{task.category}</p>
              <p>{task.color}</p>
            </label>
            <div>
              {!this.state.check && (
                <div>
                  <button onClick={() => this.handleEdit(task, index)}>edit</button>
                  <button onClick={() => this.deleteTask(task)}>delete</button>
                </div>
              )}
              
              {/* <button onClick={() => this.handleCheck(index)}>
                {this.state.check ? "feita!" : "a fazer"}
              </button> */}
            </div>
          </li>
        );
      })
    )
  }

  handleSubmit = (event) => {
    const { title, description, category, color } = this.state;
    event.preventDefault();

    if (typeof(this.state.edit) == 'number') {
      const { tasks } = this.state;

      tasks[this.state.edit] = {
        title: title,
        description: description,
        category: category,
        color: color,
      }

      this.setState({
        tasks,
        title: '',
        description: '',
        category: '',
        color: '#800000',
        edit: undefined,
      })

    } else {
      const task = {
        title: title,
        description: description,
        category: category,
        color: color,
      }
  
      this.setState({
        title: '',
        description: '',
        category: '',
        color: '#800000',
        tasks: [
          ...this.state.tasks,
          task
        ],
      });
    }
  }

  handleEdit = (task, index) => {
    this.setState({
      title: task.title,
      description: task.description,
      category: task.category,
      color: task.color,
      edit: index,
    })
  }

  handleCheck = (index) => {
    const { tasks } = this.state;
    const task = this.state.tasks[index];

    tasks[index] = {
      ...task,
      check: !this.state.check,
    }
    console.log(tasks[index]);
    // this.setState({
    //   tasks,
    // });
    

  }

  deleteTask = (task) => {
    this.setState({
      tasks: this.state.tasks.filter((item) => item !== task)
    })
  }

  render() {
    return (
      <div className='container'>
        <h1>ToDo List</h1>
        <form className='box'>
          <label>Adicione uma nova tarefa:</label>
          <input
            type='text'
            name='title'
            value={this.state.title}
            onChange={this.handleChange}
          />
          <label>Descrição</label>
          <input
            type='text'
            name='description'
            value={this.state.description}
            onChange={this.handleChange}
          />
          <label>Categoria</label>
          <input
            type='text'
            name='category'
            value={this.state.category}
            onChange={this.handleChange}
          />
          <label>Color</label>
          <input
            type='color'
            name='color'
            value={this.state.color}
            onChange={this.handleChange}
          />
          <button onClick={this.handleSubmit}>Save</button>
        </form>
        <ul>
          {this.renderMap()}
        </ul>
      </div>
    );
  }
}

export default App;
