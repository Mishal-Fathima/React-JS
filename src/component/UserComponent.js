import React from 'react';
import UserService from '../service/UserService';

class UserComponent extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            user:[]
        }
    }

    componentDidMount(){
        UserService.getUsers().then((response) => {
        console.log(response)
        this.setState({ user: response.data})
        });
    }

    render (){
        return (
            <div>
                <h1 className = "text-center"> MEMBERSHIP LIST</h1>
                <table className = "table table-striped">
                    <thead>
                        <tr>

                            <td> Customer ID</td>
                            <td> Customer First Name</td>
                            <td> CustomerLast Name</td>
                            <td> Customer Email Id</td>
                        </tr>

                    </thead>
                    <tbody>
                        {
                            this.state.user.map(
                                user => 
                                <tr key = {user.id}>
                                     <td> {user.id}</td>   
                                     <td> {user.firstname}</td>   
                                     <td> {user.lastname}</td>   
                                     <td> {user.email}</td>   
                                </tr>
                            )
                        }

                    </tbody>
                </table>

            </div>

        )
    }
}

export default UserComponent