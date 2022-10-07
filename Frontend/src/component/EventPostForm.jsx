import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import "reactjs-popup/dist/index.css";
import "./CareerPostForm.css";
import { useState } from "react"; 

const EventPostForm = (props) => {
    // const [images, setImages] = useState();
    const handleSubmit = async (event) => {
        event.preventDefault();
        const target = event.target;
        const {EventName, Date, Location, Description, ApplyLink,EventImage} = target;

        const data = new FormData();
        data.append("EventImage", EventImage.files[0]);
        data.append("EventName",EventName.value);
        data.append("Date",Date.value);
        data.append("Location",Location.value);
        data.append("Description",Description.value);
        data.append("ApplyUrl",ApplyLink.value);

        const EventResponse = await fetch("http://localhost:3001/events/add", {
            method: "POST",
            // headers: {"Content-Type": "application/json"},
            // body: JSON.stringify(
            //     {   
            //         EventName: EventName.value, 
            //         Date: Date.value, 
            //         Location: Location.value, 
            //         Description: Description.value, 
            //         ApplyLink: ApplyLink.value
            //     }
            // )
            body: data
        });
        const resJson = await EventResponse.json();
        if(EventResponse.status === 200){
            alert("Event Uploaded SuccessFully");
            console.log(resJson);
        }else{
            console.log(resJson);
            alert(resJson);
        }

    }

    // const handleImageChange = (event) => {
    //     if (event.target.files && event.target.files[0]) {
    //         var reader = new FileReader();

    //         reader.onload = function (e) {
    //             setImages({data: e.target.result, name: event.target.files[0].name});
    //         };

    //         reader.readAsDataURL(event.target.files[0]);
    //     }
    // }


    return (
        <Form onSubmit={handleSubmit} className="CustomForm">
            <a className="close bi bi-x-square" style={{ textAlign: "end" }} onClick={props.close}>
            </a>
            <Form.Group className="mb-3" controlId="">
                <Form.Label>Event Name</Form.Label>
                <Form.Control name="EventName" placeholder="Enter the name of Event" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="">
                {/* <img src={ images && images.data} height={"100px"} width={"100px"}></img><br/> */}
                <Form.Label>select image</Form.Label>
                <input type="file" multiple accept="image/*" name="EventImage" className="form-control" id="" />

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
