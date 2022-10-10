import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import "reactjs-popup/dist/index.css";
import "./CareerPostForm.css";

const CareerPostForm = (props) => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const {
      Type,
      Title,
      CompanyName,
      Location,
      Salary,
      Eligibility,
      ApplyLink
    } = event.target;
    const CareerPostResponse = await fetch("http://localhost:3001/careers/create", {
      method: "POST",
      headers: {"Content-Type":"application/json"},
      credentials: "include",
      body: JSON.stringify({
        Type: Type.value,
        Title: Title.value,
        CompanyName: CompanyName.value,
        Location: Location.value,
        Salary: Salary.value,
        Eligibility: Eligibility.value,
        ApplyLink: ApplyLink.value
      })
    });
    const resJson = await CareerPostResponse.json();
    if(CareerPostResponse.status === 200){
      console.log(resJson);
      alert("Career Post Created Successfully!");
      props.updatePage(prev => prev+1);
      props.close();
    }else{
      console.log(resJson);
      alert(resJson.error);
    }
  }
  return (
    <Form onSubmit={handleSubmit} className="CustomForm">
          <a className="close bi bi-x-square" style={{textAlign: "end"}} onClick={props.close}>
          </a>
      <Form.Group className="mb-3" controlId="">
        <Form.Label>Select Type</Form.Label>
        <Form.Select name="Type" aria-label="Default select example">
          <option value="1">Job</option>
          <option value="2">Internship</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3" controlId="">
        <Form.Label>Job title</Form.Label>
        <Form.Control name="Title"  placeholder="Job Title" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="">
        <Form.Label>Company Name</Form.Label>
        <Form.Control name="CompanyName" placeholder="Company Name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="">
        <Form.Label>Location</Form.Label>
        <Form.Control name="Location" placeholder="Location" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="">
        <Form.Label>salary</Form.Label>
        <Form.Control name="Salary" placeholder="Salary" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="">
        <Form.Label>Eligibility</Form.Label>
        <Form.Control name="Eligibility" placeholder="Eligibility" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="">
        <Form.Label>Apply Link</Form.Label>
        <Form.Control name="ApplyLink" placeholder="Link" />
      </Form.Group>
      <Button variant="primary" type="submit" className="submit-btn">
        Submit
      </Button>
    </Form>
  );
};

export default CareerPostForm;
