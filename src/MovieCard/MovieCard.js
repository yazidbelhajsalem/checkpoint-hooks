import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


 class MovieCard extends Component {
    constructor(props) {
        super(props);
        
      }
  render() {
    return (
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={this.props.imgUrl} />
        <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>
              <h5>rate:</h5> <p>{this.props.rate}</p>
              
              <h5>:</h5> <p>{this.props.description}</p>
            </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    );
  
  }}
    
  

  export default MovieCard;