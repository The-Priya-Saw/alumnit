import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";

const AlumniProfileCard = ({ profilePicture, username, title, skills }) => {
  const [showSkills, setShowSkills] = useState(false);

  const toggleSkills = () => {
    setShowSkills(!showSkills);
  };

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img height={"100px"} variant="top" className="object-fit-cover" src={profilePicture} />
      <Card.Body>
        <Card.Title className="text-center">{username}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted text-center">{title}</Card.Subtitle>
        <Button variant="primary" className="mb-2" onClick={toggleSkills} block>
          {showSkills ? "Hide Skills" : "Show Skills"}
        </Button>
        {showSkills && (
          <Card.Text>
            <ul>
              {skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </Card.Text>
        )}
      </Card.Body>
    </Card>
  );
};

export default AlumniProfileCard;
