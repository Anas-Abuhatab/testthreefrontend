import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';


class FavCards extends Component {
    render() {
        return (
        <>
                <div className="row">
                     {this.props.favData.map(item => {
                        return (<Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={item.image} />
                            <Card.Body>
                                <Card.Title>{item.name}</Card.Title>
                                <Card.Text>
                                    {item.price}
                                </Card.Text>
                                <Button variant="primary" onClick={()=>{this.props.handleUpdate(
                                    item._id,
                                    item.name,
                                    item.image,
                                    item.price)}}>Edit</Button>
                                <Button variant="primary" onClick={()=>{this.props.handleDelete(item._id)}}>Deleta</Button>
                            </Card.Body>
                        </Card>)
                    })};
                   
                </div>

        </>
        )
    }
}

export default FavCards
