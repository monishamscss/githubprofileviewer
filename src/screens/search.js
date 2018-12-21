import React, { Component } from 'react';
import '../App.css';
import api from '../config'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: null,
            users: null
        };
        this.getUserName = this.getUserName.bind(this);
    }

    getUserName = (props) => {
        this.setState({
            userName: props
        });
    }

    onSubmit(e) {
        e.preventDefault()
        let username = this.state.userName.trim();
        console.log(username);
        if (!username) {
            alert("Please enter a username");
            return;
        }
        fetch(api.search + username)
            .then(response => response.json())
            .then(response => {
                console.log(response)
                this.setState({ users: response.items })
            })

        this.setState({
            userName: ''
        });
    }

    render() {
        let fontStyle = {
            fontSize: 14,
            fontFamily:'inherit',
            margin: 20,
            lineHeight: 2,
        };
        return (
            <div>
      <table>
          <tr>
     <td><img src="github.jpg" width="42" height="42"/></td>
      <td><font size="6">GitHub Profile Viewer</font></td>
         </tr>
    </table>
                <form onSubmit={this.onSubmit.bind(this)}>
                    <input placeholder="  Search Here & Enter"
                        style={fontStyle} size="35"
                        onChange={(e) => this.getUserName(e.target.value)}
                        value={this.state.userName}
                    />
                </form>
                <div className="grid-container">
                    {this.state.users == null                       
                        ? (
                            <div className="col-sm-6">
                                Please Search...
                                <br />
                            </div>
                        )
                        : (
                            this.state.users.map((user, i) =>
                                <div className="item1" key={i}>
                                    <div className="col-sm-2">
                                        <img className="img-circle" width="80" height="80" src={user.avatar_url} />
                                    </div>
                                    <div className="col-sm-6">
                                        <Link to={`/profile/${user.login}`}>{user.login}</Link>
                                    <br />
                                    </div>
                                </div>) 
                        )
                    }
                </div>
            </div>
        );
    }
}

export default Search;
