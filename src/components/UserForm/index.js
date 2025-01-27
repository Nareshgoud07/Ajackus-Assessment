import React, { Component } from 'react';
import './index.css'

class UserForm extends Component {
  state = {
    id: '',
    firstName: '',
    lastName: '',
    email: '',
    department: '',
  };


  componentDidUpdate(prevProps) {
    if (prevProps.selectedUser !== this.props.selectedUser && this.props.selectedUser) {
      const { id, name, email, company } = this.props.selectedUser;
      const [firstName, lastName] = name.split(' ');
      this.setState({
        id,
        firstName,
        lastName,
        email,
        department: company.name,
      });
    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { id, firstName, lastName, email, department } = this.state;
    const user = {
      id,
      name: `${firstName} ${lastName}`,
      email,
      company: { name: department },
    };

    if (id) {
      this.props.onEdit(id, user);
    } else {
      this.props.onAdd(user);
    }

    this.setState({
      id: '',
      firstName: '',
      lastName: '',
      email: '',
      department: '',
    });
  };

  render() {
    const { firstName, lastName, email, department } = this.state;

    return (
      <div className="user-form">
        <h2 className='add-user-head'>{this.state.id ? 'Edit User' : 'Add User'}</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input
                type="text"
                name="firstName"
                value={firstName}
                onChange={this.handleChange}
                placeholder="First Name"
                required
                className='first-name-input-field'
            />
            <input
                type="text"
                name="lastName"
                value={lastName}
                onChange={this.handleChange}
                placeholder="Last Name"
                required
                className='first-name-input-field'
            />
            <input
                type="email"
                name="email"
                value={email}
                onChange={this.handleChange}
                placeholder="Email"
                required
                className='first-name-input-field'
            />
            <input
                type="text"
                name="department"
                value={department}
                onChange={this.handleChange}
                placeholder="Department"
                required
                className='first-name-input-field'
            />
          </div>
          <button type="submit" className='submit-button'>{this.state.id ? 'Update' : 'Add'}</button>
        </form>
      </div>
    );
  }
}

export default UserForm;