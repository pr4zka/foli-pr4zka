import { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Dev from '../assets/img/Dev.svg'


export const Contact = () => {
    const formInitialDetails = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    }

    const [formDetails, setFormDetails] = useState(formInitialDetails)
    const [buttonText, setButtonText] = useState('send')
    const [status, setStatus] = useState({})

    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value
        })
    }

 const API_URL = () => {
  return import.meta.env.API_URL; // will return API URL in .env file.
};

    const handleSubmit = async (e) => {
        e.preventDefault();
        setButtonText("Sending...");
        let response = await fetch(API_URL(), {
            method: "POST",
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json;charset=utf-8",

            },
            body: JSON.stringify(formDetails),
        })
        setButtonText("Send");
        let result = await response.json();
        setFormDetails(formInitialDetails);
        if (result.code == 200) {
            setStatus({ succes: true, message: 'Message sent successfully' });
        } else {
            setStatus({ succes: false, message: 'Something went wrong, please try again later.' });
        }
    }

    return (
        <section className='contact' id='contact'>
            <Container>
                <Row className='align-items-center'>
                    <Col md={6}>
                        <img src={Dev} alt='contact Us' />
                    </Col>
                    <Col md={6}>
                        <h2>Contact me</h2>
                        <form onSubmit={handleSubmit} className='form-s'>
                            <Row>
                                <Col sm={6} className="px-1">
                                    <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="text" value={formDetails.lastName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)} />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="text" value={formDetails.email} placeholder="Email" onChange={(e) => onFormUpdate('email', e.target.value)} />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="text" value={formDetails.phone} placeholder="Phone" onChange={(e) => onFormUpdate('phone', e.target.value)} />
                                </Col>
                                <Col>
                                    <textarea rows="5" value={formDetails.message} placeholder="type your message" onChange={((e) => onFormUpdate('message', e.target.value))}></textarea>
                                    <button type='submit'><span>{buttonText}</span></button>
                                </Col>                            
                                {
                                    status.message &&
                                    <Col>
                                        <p className={status.success === false ? 'danger' : 'success'}></p>
                                    </Col>
                                }
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}