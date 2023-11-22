import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './SearchPage.css';

export function SearchPage() {
  return (
    <>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Instagram Account</Form.Label> <br/>
          <Form.Control className='form' type="text" placeholder="Enter user wanna finding" />
        </Form.Group>
        <Button className='btn' variant="primary" type="button">
          Search
        </Button>
      </Form>
    </>
  );
}

