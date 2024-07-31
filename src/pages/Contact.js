import React, { useState } from 'react'; // Remove setTimeout from the import
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ContactContent from '../components/ContactContent';
import CenteredHeading from '../components/CenteredHeading';

function Contact() {
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "fa1bb6fe-79eb-4a29-a91e-73afc2a02184");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            // Use setTimeout directly without importing it
            setTimeout(() => {
                setResult("");
            }, 3000);
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return (
        <div className='d-flex flex-column bg-dark text-light'>
            <CenteredHeading heading="Contact Me" />
      
            <Container id="contact" fluid className="p-0">
                <Row className="g-0">
                    <Col xs={12} md={6} className="d-flex justify-content-center align-items-center">
                        <Container className="p-4">
                            <ContactContent />
                        </Container>
                    </Col>
                    <Col xs={12} md={6} className="d-flex justify-content-center align-items-center">
                        <Container className="p-4">
                            <Form onSubmit={onSubmit}>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" name="name" placeholder="Full Name" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" name="email" placeholder="name@example.com" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    <Form.Label>Message</Form.Label>
                                    <Form.Control name="message" as="textarea" rows={5} />
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                                <span>{result}</span>
                            </Form>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Contact;
