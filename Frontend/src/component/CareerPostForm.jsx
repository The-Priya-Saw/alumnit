import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import "reactjs-popup/dist/index.css";
import "./CareerPostForm.css";

const CareerPostForm = () => {
  return (
    <Form className="CustomForm">
      <Form.Group className="mb-3" controlId="">
        <Form.Label>Select Type</Form.Label>
        <Form.Select name="type" aria-label="Default select example">
          <option value="1">Job</option>
          <option value="2">Internship</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3" controlId="">
        <Form.Label>Job title</Form.Label>
        <Form.Control name="title"  placeholder="Job Title" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="">
        <Form.Label>Company Name</Form.Label>
        <Form.Control name="companyName" placeholder="Company Name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="">
        <Form.Label>Location</Form.Label>
        <Form.Control name="location" placeholder="Location" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="">
        <Form.Label>salary</Form.Label>
        <Form.Control name="salary" placeholder="Salary" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="">
        <Form.Label>Eligibility</Form.Label>
        <Form.Control name="eligibility" placeholder="Eligibility" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="">
        <Form.Label>Apply Link</Form.Label>
        <Form.Control name="applyLink" placeholder="Link" />
      </Form.Group>
      <Button variant="primary" type="submit" className="submit-btn">
        Submit
      </Button>
    </Form>
  );
};

export default CareerPostForm;
