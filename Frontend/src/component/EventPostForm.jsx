import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import "reactjs-popup/dist/index.css";
import "./CareerPostForm.css";
import Image from 'react-bootstrap/Image';

const EventPostForm = (props) => {
    const handleSubmit = () => {



    }

    return (
        <Form onSubmit={handleSubmit} className="CustomForm">
            <a className="close bi bi-x-square" style={{ textAlign: "end" }} onClick={props.close}>
            </a>
            <Form.Group className="mb-3" controlId="">
                <Form.Label>Event Name</Form.Label>
                <Form.Control name="EventName" placeholder="Enter the name of Event" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="">
                <Form.Label>select image</Form.Label>
                <input type="file" name="EventImage" className="form-control" id="" />

            </Form.Group>
          

            <Form.Group className="mb-3" controlId="">
                <Form.Label>Date and Time</Form.Label>
                <input type="datetime-local" className="form-control" name="Date"  id=""/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="">
                <Form.Label>Where to attend</Form.Label>
                <Form.Control name="Location" placeholder="location" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="">
                <Form.Label>Description</Form.Label>
                <Form.Control name="Description" placeholder="About event" />
            </Form.Group>


            <Form.Group className="mb-3" controlId="">
                <Form.Label>Apply link</Form.Label>
                <Form.Control name="ApplyLink" placeholder="Link" />
            </Form.Group>
            <Button variant="primary" type="submit" className="submit-btn">
                Submit
            </Button>
        </Form>
    );
};

export default EventPostForm;
