import React, { Component } from 'react';
import {Card,Button} from 'react-bootstrap';

 class FruitsCard extends Component {
    render() {
        return (
            <div className="row">
            {this.props.alldata.map(item=>{
                return ( <Card style={{ width: '18rem' }}>
                   <Card.Img variant="top" src={item.image} />
                   <Card.Body>
                       <Card.Title>{item.name}</Card.Title>
                       <Card.Text>
                          {item.price}
                       </Card.Text>
                       <Button variant="primary" onClick={()=>{this.props.addFav(item.name,item.image,item.price)}}>Add to Favourites</Button>
                   </Card.Body>
               </Card>)
               })};
               </div>
        )
    }
}

export default FruitsCard
