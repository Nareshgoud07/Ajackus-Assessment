import React, { Component } from 'react';
import UserList from './components/UserList';
import UserForm from './components/UserForm';
import './App.css';

class App extends Component {
  state = {
    users: [],
    selectedUser: null,
    error: null,
  };

  
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => this.setState({ users: data }))
      .catch(error => this.setState({ error: 'Failed to fetch users.' }));
  }

  addUser = (newUser) => {
    fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newUser),
    })
      .then(response => response.json())
      .then(data => {
        this.setState({ users: [...this.state.users, data] });
      })
      .catch(error => this.setState({ error: 'Failed to add user.' }));
  };

  
  editUser = (id, updatedUser) => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedUser),
    })
      .then(response => response.json())
      .then(data => {
        this.setState({
          users: this.state.users.map(user =>
            user.id === id ? data : user
          ),
          selectedUser: null,
        });
      })
      .catch(error => this.setState({ error: 'Failed to edit user.' }));
  };

  
  deleteUser = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: 'DELETE',
    })
      .then(() => {
        this.setState({
          users: this.state.users.filter(user => user.id !== id),
        });
      })
      .catch(error => this.setState({ error: 'Failed to delete user.' }));
  };

  
  selectUser = (user) => {
    this.setState({ selectedUser: user });
  };

  render() {
    const { users, selectedUser, error } = this.state;

    return (
      <div className="App">
        <h1 className='Dashboard-Main-Heading'>User Management Dashboard</h1>
        {error && <p className="error">{error}</p>}
        <div className='dashboard-card'>
          <UserList
            users={users}
            onEdit={this.selectUser}
            onDelete={this.deleteUser}
          />
          <UserForm
            selectedUser={selectedUser}
            onAdd={this.addUser}
            onEdit={this.editUser}
          />
        </div>
      </div>
    );
  }
}

export default App;