import React, { useState, useEffect } from 'react'
import { Card, Row, Col ,Button } from 'react-bootstrap';
// import { useHistory } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
export default function BooksPage() {
  const [books, setBooks] = useState([])
  const [loggedIn, setLoggedIn] = useState(false); 
  const navigate = useNavigate();

  useEffect(() => {
    const authToken = localStorage.getItem('authToken');
    if (authToken) {
      setLoggedIn(true);
    } else {
      navigate('/main'); // Redirect to login page if authToken is not present
    }
  }, []);

  // const history = useHistory();
  useEffect(() => {
    fetch('http://localhost:3000/books/')
      .then(response => response.json())
      .then(data => {
        setBooks(data);
      })
      .catch(error => console.log('error fetching data', error))
  }, [])

  const handleRentNow = (bookId) => {
    navigate(`/books/${bookId}`);
  };

  return (
    <>
      <Row className='d-flex justify-content-center'>
        {books.map(book => (
          <Col key={book.bookId} className='mt-5' md={4}>
            <Card className='card-card-x' style={{ width: '26rem', margin: '0 auto',backgroundColor: '#f0f0f0' }}>
              <Card.Img
                variant="top"
                src={book.image}
                style={{ height: '350px', width: '85%', objectFit: 'cover',marginLeft:'auto',marginRight:'auto'}} // Set fixed height and cover the image
              />
              <Card.Body>
                <Card.Title className="text-center" style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: '200px' }}>
                  {book.title}
                </Card.Title>
                <div style={{ overflowY: 'auto', height: '100px', marginBottom: '15px', marginTop: '5px', WebkitOverflowScrolling: 'touch', backgroundColor:'white', padding: '10px', borderRadius: '5px' }}>
                  <style>
                    {`
                    /* Style the scrollbar for Webkit (Safari, Chrome) */
                    ::-webkit-scrollbar {
                        width: 8px;
                        height: 8px;
                    }

                    ::-webkit-scrollbar-track {
                        background: #f0f0f0;
                    }

                    ::-webkit-scrollbar-thumb {
                        background: lightblue;
                        border-radius: 4px;
                    }

                    /* Style the scrollbar for Firefox */
                    scrollbar-width: thin;
                    scrollbar-color: lightblue #f0f0f0;
                  `}
                  </style>
                  <Card.Text>Author: {book.author}</Card.Text>
                  <Card.Text>Publisher: {book.publisher}</Card.Text>
                  <Card.Text>Description: {book.description}</Card.Text>
                </div>
                <Card.Text style={{ fontWeight: 'bold' }}>Price: {book.price}</Card.Text>
                <Card.Text>Stock: {book.stock}</Card.Text>
                <Row className="justify-content-center">
                  <Button className='mb-3' variant="outline-primary" onClick={() => handleRentNow(book.bookId)}>Rent Now</Button>
                  <Button variant="outline-success">Add to Cart</Button>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  )
}
