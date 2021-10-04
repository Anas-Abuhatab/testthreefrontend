import React, { Component } from 'react';
import { withAuth0 } from "@auth0/auth0-react";
import {Card,Button} from 'react-bootstrap';
import LoginButton from './LoginButton';



class Login extends Component {
    render() {
        const {isAuthenticated}= this.props.auth0
        return (
            <div>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>login</Card.Title>
                        <Card.Text>
                            Click Below to Login
                        </Card.Text>
                        <Button variant="primary">
                        {isAuthenticated&&<LoginButton/>}
                        </Button>
                    </Card.Body>
                </Card>

            </div>
        )
    }
}

export default withAuth0(Login)
