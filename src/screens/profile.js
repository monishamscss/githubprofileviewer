import React, { Component } from 'react';
import '../App.css';
import api from '../config'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userBio: '',
            repo: null
        };
    }
    componentDidMount() {
        fetch(api.bio + this.props.match.params.id)
            .then(response => response.json())
            .then(response => {
                this.setState({ userBio: response })
            }
            )
            fetch(api.bio + this.props.match.params.id+api.repo)
            .then(response => response.json())
            .then(response => {
                this.setState({ repo: response })
                console.log(this.state.repo);
            }
            )
    }

    render() {
        let sstyle = {
            margin: 20,
        };
        return (
            <div style={sstyle}>
            <Link to={`/`}><button type="button">Back</button></Link>
               <br/><br/><br/>
        <img src={this.state.userBio.avatar_url}  width="100" height="100"/>
        &nbsp;&nbsp;&nbsp;
        <span><strong>{this.state.userBio.name}</strong></span>
        <br/><br/><br/>
        <strong>Bio</strong>
        <p>{this.state.userBio.bio}</p>
        <br/>
        <strong>Works At</strong>
        <p>{this.state.userBio.company}</p>
        <br/><strong>Repositories&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Followers</strong> <p>&nbsp;&nbsp;&nbsp;&nbsp;
            {this.state.userBio.public_repos}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{this.state.userBio.followers}</p>
        <strong>Pinned Repositories</strong><br/>
        <div className="list-group">
                        {this.state.repo == null                       
                        ? (
                            <div>No Repositories found</div>
                        )
                        : (
                        this.state.repo.map((user, i) =>
                         <div className="list-group-item"><b>{user.full_name}</b><br/>{user.description}</div>
                            )
                        )    
                        }  
        </div>
            </div>
        )
    }
}

export default Profile