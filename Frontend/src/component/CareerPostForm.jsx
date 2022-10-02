import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import "reactjs-popup/dist/index.css";
import "./CareerPostForm.css";

const CareerPostForm = () => {
  return (
    <Form className="CustomForm">
      <Form.Group className="mb-3" controlId="">
        <Form.Label>Job title</Form.Label>
        <Form.Control type="Job-title" placeholder="Job Title" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="">
        <Form.Label>Company Name</Form.Label>
        <Form.Control type="Job-title" placeholder="Job Title" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="">
        <Form.Label>Location</Form.Label>
        <Form.Control type="Job-title" placeholder="Job Title" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="">
        <Form.Label>salary</Form.Label>
        <Form.Control type="Job-title" placeholder="Job Title" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="">
        <Form.Label>Eligibility</Form.Label>
        <Form.Control type="Job-title" placeholder="Job Title" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="">
        <Form.Label>Apply Link</Form.Label>
        <Form.Control type="Job-title" placeholder="Job Title" />
      </Form.Group>
      <Button variant="primary" type="submit" className="submit-btn">
        Submit
      </Button>
    </Form>
  );
};

export default CareerPostForm;
