import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { getTask, addNewTask}  from './redux/actions/tarea-actions';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      texto : ''
    };
  }
  componentDidMount(){
    this.nameInput.focus();
    const { getTask } = this.props;
    console.log(this.props);
    getTask();
  }

  onChangeText = text =>{
    this.setState({texto : text.target.value});
  }

  addTask = () =>{
    const { addNewTask } = this.props;
    if(this.nameInput.value){

      addNewTask(this.nameInput.value);
      
      this.setState({texto:''});
    }
    //this.componentDidMount();
  } 

  render() {
    return (
      <div className="App">
        <header className="container">
          <h2>Lista de tareas</h2>
          <input placeholder="Write your task" ref={(input) => { this.nameInput = input; }}  value={this.state.texto} onChange={(e) => this.onChangeText(e)} className="form-control" type="text"></input>
          <button className="btn btn-primary" onClick={this.addTask}>Add task</button>
          <ul className="list-group">
            {this.props.tareas && this.props.tareas.map((tarea, key)=>
              <li key={key} className="list-group-item">{tarea.nombre}</li>
            )}
          </ul>

        </header>
      </div>
    )
  }
}


const mapStateToPros = state => {
  return { 
    tareas: state.tareas 
  };
};

const mapDispatchToProps = {
  getTask : getTask,
  addNewTask: addNewTask
}

export default connect(mapStateToPros, mapDispatchToProps)(App);
