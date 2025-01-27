import React, { Component } from 'react';
import './index.css'

class UserList extends Component {
  render() {
    const { users, onEdit, onDelete } = this.props;

    return (
      <div className="user-list">
        <h1 className='User-List-Heading'>User List</h1>
        <table>
          <thead className='Table-Head-Card'>
            <tr>
              <th className='table-headings'>ID</th>
              <th className='table-headings'>First Name</th>
              <th className='table-headings'>Last Name</th>
              <th className='table-headings'>Email</th>
              <th className='table-headings'>Department</th>
              <th className='table-headings'>Actions</th>
            </tr>
          </thead>
          <tbody className='Table-card-body'>
            {users.map(user => (
              <tr key={user.id}>
                <td className='table-body-card-para'>{user.id}</td>
                <td className='table-body-card-para'>{user.name.split(' ')[0]}</td>
                <td className='table-body-card-para'>{user.name.split(' ')[1]}</td>
                <td className='table-body-card-para'>{user.email}</td>
                <td className='table-body-card-para'>{user.company.name}</td>
                <td className='table-body-card-para '>
                  <button className='table-body-card-button' onClick={() => onEdit(user)}>Edit</button>
                  <button className='table-body-card-button'  onClick={() => onDelete(user.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default UserList;