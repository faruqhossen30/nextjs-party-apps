import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const login = () => {
    return (
        <div className="container-fluid bg-white vh-100 flex items-center fluid={sm}">
            <div className='Row flex justify-center'>
                <Col md={8} sm={12}>
                    <Row>
                        <Col className='p-0 '>
                            <div className="card text-center">
                                <div className="card-body shadow-2xl">
                                    <Form>
                                        <Row className='p-3'>
                                            <h2 className='pb-5 font-bold'>Sign Up</h2>
                                            <Col xs={12}>
                                                <Form.Group className="mb-3">
                                                    <Form.Control
                                                        type="text" className='p-2'
                                                        placeholder="Full Name"
                                                    />
                                                </Form.Group>
                                            </Col>
                                            <Col xs={12}>
                                                <Form.Group className="mb-3">
                                                    <Form.Control
                                                        type="email" className='p-2'
                                                        placeholder="Email Address"
                                                    />
                                                </Form.Group>
                                            </Col>
                                            <Col xs={12}>
                                                <Form.Group className="mb-3">
                                                    <Form.Control
                                                        type="text" className='p-2'
                                                        placeholder="Mobile Number"
                                                    />
                                                </Form.Group>
                                            </Col>
                                            <Col xs={12}>
                                                <Form.Group className="mb-3">
                                                    <Form.Control
                                                        type="password" className='p-2'
                                                        placeholder="Password"
                                                    />
                                                </Form.Group>
                                            </Col>
                                            <Col xs={12}>
                                                <Form.Group className="mb-3">
                                                    <Form.Control
                                                        type="password" className='p-2'
                                                        placeholder="Confirm Password"
                                                    />
                                                </Form.Group>
                                            </Col>
                                            <Form.Group className="mb-3 text-left" controlId="formBasicCheckbox">
                                                <Form.Check type="checkbox" label="Check me out" />
                                            </Form.Group>
                                            <div className="d-grid gap-2">
                                                <Button variant="primary" size="lg">
                                                    SIGN UP
                                                </Button>
                                            </div>
                                        </Row>
                                    </Form>
                                </div>
                            </div>
                        </Col>
                        <Col className='p-0 flex items-center bg-emerald-700'>
                            <div className='p-5 text-white'>
                                <h4>We are more than just a company</h4>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </div>
        </div>
    )
}

export default login
