import React, { Component } from 'react';
import '../App.css';
import api from '../config'

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userBio: ""
        };
    }

    componentDidMount() {
        fetch(api.bio + this.props.match.params.id)
            .then(response => response.json())
            .then(response => {
                console.log(response);
                this.setState({ userBio: response })
            }
            )
    }

    render() {
        return (
            <div className="col-sm-6">
                please search
                <br />
            </div>
        )
    }
}

export default Profile