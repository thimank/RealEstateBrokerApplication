import React from 'react'

function UserTable({ allUser }) {

    return (
        <div>
            <h1>User Table</h1>
            <br />
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">User Id</th>
                        <th scope="col">City</th>
                        <th scope="col">Email</th>
                        <th scope="col">Mobile</th>
                        <th scope="col">Password</th>
                        <th scope="col">Role</th>
                    </tr>
                </thead>
                <tbody>
                { allUser.userList.map( (user) =>
                        <tr key={user.userid}>
                        <td>{user.userid}</td>
                        <td>{user.city}</td>
                        <td>{user.email}</td>
                        <td>{user.mobile}</td>
                        <td>{user.password}</td>
                        <td>{user.role}</td>
                   </tr>)}
                </tbody>
            </table>

        </div>
    )
}

export default UserTable
