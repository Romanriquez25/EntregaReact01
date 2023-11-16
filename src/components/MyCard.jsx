import Card from 'react-bootstrap/Card';
import Tags from "./tags"; 

const MyCard = ({ image, nombrePerrito, descripcionPerrito,razaDelPerrito,color }) => {
  return (
    <> 
        
        <Card className='cartas' style={{ width: '18rem'}}>
        <Card.Img variant="top" src={image} className='img' />
        <Card.Body>
          <Card.Title>{nombrePerrito}</Card.Title>
          <Card.Text>
            {descripcionPerrito}
          </Card.Text>
          <Tags razaDelPerrito={razaDelPerrito} color={color} />
        </Card.Body>
      </Card>
     
    
    </>
  );
};

export default MyCard;