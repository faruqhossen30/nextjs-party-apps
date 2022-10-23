import Navnew from '@/components/Header/Navnew'
import Tab from 'react-bootstrap/Tab'
import Row from 'react-bootstrap/Row'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import { Form } from 'react-bootstrap'

const settings = () => {
    return (
        <div>
            <Navnew />

            <div className="bg-gradient-to-r from-cyan-500 to-blue-500 m-2 p-20 rounded ">
                <h2 className="text-white font-bold uppercase">
                    Account Setting
                </h2>
            </div>

            <div className="container-fluid">
                <Tab.Container defaultActiveKey="profile_information">
                    <div className="bg-white rounded py-4 my-4">
                        <Row>
                            <Nav variant="pills" className="flex-column">
                                <div className="flex justify-center">
                                    <Nav.Item>
                                        <Nav.Link eventKey="profile_information" >
                                            Profile Information
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="account">
                                            Account
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="privacy">
                                            Privacy
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="notification">
                                            Notification
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="message">
                                            Message
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="close_account">
                                            Close Account
                                        </Nav.Link>
                                    </Nav.Item>
                                </div>
                            </Nav>
                        </Row>
                    </div>

                    <div className="bg-white p-3 rounded mb-2">
                        <Tab.Content>
                            <Tab.Pane eventKey="profile_information">
                                <Form>
                                    <h4>Profile Information</h4>
                                    <div className="grid grid-cols-12 mx-auto">
                                        <div className="col-span-12 md:col-span-6 mx-2">
                                            <Form.Group
                                                className="mb-3"
                                                controlId="exampleForm.ControlInput1">
                                                <Form.Label>
                                                    First Name
                                                </Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    placeholder="First Name"
                                                />
                                            </Form.Group>
                                            <Form.Group
                                                className="mb-3"
                                                controlId="exampleForm.ControlInput1">
                                                <Form.Label>
                                                    Last Name
                                                </Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    placeholder="Last Name"
                                                />
                                            </Form.Group>
                                            <Form.Group
                                                className="mb-3"
                                                controlId="exampleForm.ControlInput1">
                                                <Form.Label>Email</Form.Label>
                                                <Form.Control
                                                    type="email"
                                                    placeholder="Email Address"
                                                />
                                            </Form.Group>
                                            <Form.Group
                                                className="mb-3"
                                                controlId="exampleForm.ControlInput1">
                                                <Form.Label>
                                                    Relation Status
                                                </Form.Label>
                                                <Form.Select size="md">
                                                    <option>
                                                        Small select
                                                    </option>
                                                </Form.Select>
                                            </Form.Group>
                                            <Form.Group
                                                className="mb-3"
                                                controlId="exampleForm.ControlInput1">
                                                <Form.Label>Website</Form.Label>
                                                <Form.Control
                                                    type="url"
                                                    placeholder="abc.com"
                                                />
                                            </Form.Group>
                                        </div>
                                        <div className="col-span-12 md:col-span-6 mx-2 ">
                                            <Form.Group
                                                className="mb-3"
                                                controlId="exampleForm.ControlInput1">
                                                <Form.Label>
                                                    Last Name
                                                </Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    placeholder="Last Name"
                                                />
                                            </Form.Group>
                                            <Form.Group
                                                className="mb-3"
                                                controlId="exampleForm.ControlInput1">
                                                <Form.Label>
                                                    First Name
                                                </Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    placeholder="First Name"
                                                />
                                            </Form.Group>
                                            <Form.Group
                                                className="mb-3"
                                                controlId="exampleForm.ControlInput1">
                                                <Form.Label>
                                                    First Name
                                                </Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    placeholder="First Name"
                                                />
                                            </Form.Group>
                                            <Form.Group
                                                className="mb-3"
                                                controlId="exampleForm.ControlInput1">
                                                <Form.Label>
                                                    First Name
                                                </Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    placeholder="First Name"
                                                />
                                            </Form.Group>
                                            <Form.Group
                                                className="mb-3"
                                                controlId="exampleForm.ControlInput1">
                                                <Form.Label>
                                                    First Name
                                                </Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    placeholder="First Name"
                                                />
                                            </Form.Group>
                                        </div>
                                    </div>
                                    <Button variant="primary">Submit</Button>{' '}
                                </Form>
                            </Tab.Pane>
                            <Tab.Pane eventKey="account">
                                <Form>
                                    <h4>Account Information</h4>
                                    <div className="grid grid-cols-12 mx-auto">
                                        <div className="col-span-12 md:col-span-6 mx-2">
                                            <Form.Group
                                                className="mb-3"
                                                controlId="exampleForm.ControlInput1">
                                                <Form.Label>
                                                    First Name
                                                </Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    placeholder="First Name"
                                                />
                                            </Form.Group>
                                            <Form.Group
                                                className="mb-3"
                                                controlId="exampleForm.ControlInput1">
                                                <Form.Label>
                                                    Last Name
                                                </Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    placeholder="Last Name"
                                                />
                                            </Form.Group>
                                        </div>
                                        <div className="col-span-12 md:col-span-6 mx-2 ">
                                            <Form.Group
                                                className="mb-3"
                                                controlId="exampleForm.ControlInput1">
                                                <Form.Label>
                                                    Last Name
                                                </Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    placeholder="Last Name"
                                                />
                                            </Form.Group>
                                            <Form.Group
                                                className="mb-3"
                                                controlId="exampleForm.ControlInput1">
                                                <Form.Label>
                                                    First Name
                                                </Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    placeholder="First Name"
                                                />
                                            </Form.Group>
                                        </div>
                                    </div>
                                    <Button variant="primary">Submit</Button>{' '}
                                </Form>
                            </Tab.Pane>
                            <Tab.Pane eventKey="privacy">
                                <Form>
                                    <h4>Privacy Settings</h4>
                                    <div className="grid grid-cols-12 mx-auto">
                                        <div className="col-span-12 md:col-span-6 mx-2">
                                            <Form.Group
                                                className="mb-3"
                                                controlId="exampleForm.ControlInput1">
                                                <Form.Label>
                                                    First Name
                                                </Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    placeholder="First Name"
                                                />
                                            </Form.Group>
                                            <Form.Group
                                                className="mb-3"
                                                controlId="exampleForm.ControlInput1">
                                                <Form.Label>
                                                    Last Name
                                                </Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    placeholder="Last Name"
                                                />
                                            </Form.Group>
                                        </div>
                                        <div className="col-span-12 md:col-span-6 mx-2 ">
                                            <Form.Group
                                                className="mb-3"
                                                controlId="exampleForm.ControlInput1">
                                                <Form.Label>
                                                    Last Name
                                                </Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    placeholder="Last Name"
                                                />
                                            </Form.Group>
                                            <Form.Group
                                                className="mb-3"
                                                controlId="exampleForm.ControlInput1">
                                                <Form.Label>
                                                    First Name
                                                </Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    placeholder="First Name"
                                                />
                                            </Form.Group>
                                        </div>
                                    </div>
                                    <Button variant="primary">Submit</Button>{' '}
                                </Form>
                            </Tab.Pane>
                            <Tab.Pane eventKey="notification">
                                <Form>
                                    <h4>Notification</h4>
                                    <div className="grid grid-cols-12 mx-auto">
                                        <div className="col-span-12 md:col-span-6 mx-2">
                                            <div>
                                                <h6>
                                                    Send Me Messages To My Cell
                                                    Phone
                                                </h6>
                                                <Form>
                                                    {['checkbox'].map(type => (
                                                        <div
                                                            key={`inline-${type}`}
                                                            className="mb-3">
                                                            <Form.Check
                                                                inline
                                                                label="ON"
                                                                name="group1"
                                                                type={type}
                                                                id={`inline-${type}-1`}
                                                            />
                                                            <br></br>
                                                            <Form.Check
                                                                inline
                                                                label="OFF"
                                                                name="group1"
                                                                type={type}
                                                                id={`inline-${type}-2`}
                                                            />
                                                        </div>
                                                    ))}
                                                </Form>
                                            </div>
                                            <div>
                                                <h6>
                                                    Send Me Messages To My Cell
                                                    Phone
                                                </h6>
                                                <Form>
                                                    {['checkbox'].map(type => (
                                                        <div
                                                            key={`inline-${type}`}
                                                            className="mb-3">
                                                            <Form.Check
                                                                inline
                                                                label="ON"
                                                                name="group1"
                                                                type={type}
                                                                id={`inline-${type}-1`}
                                                            />
                                                            <br></br>
                                                            <Form.Check
                                                                inline
                                                                label="OFF"
                                                                name="group1"
                                                                type={type}
                                                                id={`inline-${type}-2`}
                                                            />
                                                        </div>
                                                    ))}
                                                </Form>
                                            </div>
                                            <div>
                                                <h6>
                                                    Send Me Messages To My Cell
                                                    Phone
                                                </h6>
                                                <Form>
                                                    {['checkbox'].map(type => (
                                                        <div
                                                            key={`inline-${type}`}
                                                            className="mb-3">
                                                            <Form.Check
                                                                inline
                                                                label="ON"
                                                                name="group1"
                                                                type={type}
                                                                id={`inline-${type}-1`}
                                                            />
                                                            <br></br>
                                                            <Form.Check
                                                                inline
                                                                label="OFF"
                                                                name="group1"
                                                                type={type}
                                                                id={`inline-${type}-2`}
                                                            />
                                                        </div>
                                                    ))}
                                                </Form>
                                            </div>
                                            <div>
                                                <h6>
                                                    Send Me Messages To My Cell
                                                    Phone
                                                </h6>
                                                <Form>
                                                    {['checkbox'].map(type => (
                                                        <div
                                                            key={`inline-${type}`}
                                                            className="mb-3">
                                                            <Form.Check
                                                                inline
                                                                label="ON"
                                                                name="group1"
                                                                type={type}
                                                                id={`inline-${type}-1`}
                                                            />
                                                            <br></br>
                                                            <Form.Check
                                                                inline
                                                                label="OFF"
                                                                name="group1"
                                                                type={type}
                                                                id={`inline-${type}-2`}
                                                            />
                                                        </div>
                                                    ))}
                                                </Form>
                                            </div>
                                        </div>
                                        <div className="col-span-12 md:col-span-6 mx-2 ">
                                            <div>
                                                <h6>
                                                    Send Me Messages To My Cell
                                                    Phone
                                                </h6>
                                                <Form>
                                                    {['checkbox'].map(type => (
                                                        <div
                                                            key={`inline-${type}`}
                                                            className="mb-3">
                                                            <Form.Check
                                                                inline
                                                                label="ON"
                                                                name="group1"
                                                                type={type}
                                                                id={`inline-${type}-1`}
                                                            />
                                                            <br></br>
                                                            <Form.Check
                                                                inline
                                                                label="OFF"
                                                                name="group1"
                                                                type={type}
                                                                id={`inline-${type}-2`}
                                                            />
                                                        </div>
                                                    ))}
                                                </Form>
                                            </div>
                                            <div>
                                                <h6>
                                                    Send Me Messages To My Cell
                                                    Phone
                                                </h6>
                                                <Form>
                                                    {['checkbox'].map(type => (
                                                        <div
                                                            key={`inline-${type}`}
                                                            className="mb-3">
                                                            <Form.Check
                                                                inline
                                                                label="ON"
                                                                name="group1"
                                                                type={type}
                                                                id={`inline-${type}-1`}
                                                            />
                                                            <br></br>
                                                            <Form.Check
                                                                inline
                                                                label="OFF"
                                                                name="group1"
                                                                type={type}
                                                                id={`inline-${type}-2`}
                                                            />
                                                        </div>
                                                    ))}
                                                </Form>
                                            </div>
                                        </div>
                                    </div>
                                    <Button variant="primary">Submit</Button>{' '}
                                </Form>
                            </Tab.Pane>
                            <Tab.Pane eventKey="message">
                                <Form>
                                    <h4>Messages Setting</h4>
                                    <div className="grid grid-cols-12 mx-auto">
                                        <div className="col-span-12 md:col-span-6 mx-2">
                                            <div>
                                                <h6>
                                                    Send Me Messages To My Cell
                                                    Phone
                                                </h6>
                                                <Form>
                                                    {['checkbox'].map(type => (
                                                        <div
                                                            key={`inline-${type}`}
                                                            className="mb-3">
                                                            <Form.Check
                                                                inline
                                                                label="ON"
                                                                name="group1"
                                                                type={type}
                                                                id={`inline-${type}-1`}
                                                            />
                                                            <br></br>
                                                            <Form.Check
                                                                inline
                                                                label="OFF"
                                                                name="group1"
                                                                type={type}
                                                                id={`inline-${type}-2`}
                                                            />
                                                        </div>
                                                    ))}
                                                </Form>
                                            </div>
                                            <div>
                                                <h6>
                                                    Send Me Messages To My Cell
                                                    Phone
                                                </h6>
                                                <Form>
                                                    {['checkbox'].map(type => (
                                                        <div
                                                            key={`inline-${type}`}
                                                            className="mb-3">
                                                            <Form.Check
                                                                inline
                                                                label="ON"
                                                                name="group1"
                                                                type={type}
                                                                id={`inline-${type}-1`}
                                                            />
                                                            <br></br>
                                                            <Form.Check
                                                                inline
                                                                label="OFF"
                                                                name="group1"
                                                                type={type}
                                                                id={`inline-${type}-2`}
                                                            />
                                                        </div>
                                                    ))}
                                                </Form>
                                            </div>
                                            <div>
                                                <h6>
                                                    Send Me Messages To My Cell
                                                    Phone
                                                </h6>
                                                <Form>
                                                    {['checkbox'].map(type => (
                                                        <div
                                                            key={`inline-${type}`}
                                                            className="mb-3">
                                                            <Form.Check
                                                                inline
                                                                label="ON"
                                                                name="group1"
                                                                type={type}
                                                                id={`inline-${type}-1`}
                                                            />
                                                            <br></br>
                                                            <Form.Check
                                                                inline
                                                                label="OFF"
                                                                name="group1"
                                                                type={type}
                                                                id={`inline-${type}-2`}
                                                            />
                                                        </div>
                                                    ))}
                                                </Form>
                                            </div>
                                            <div>
                                                <h6>
                                                    Send Me Messages To My Cell
                                                    Phone
                                                </h6>
                                                <Form>
                                                    {['checkbox'].map(type => (
                                                        <div
                                                            key={`inline-${type}`}
                                                            className="mb-3">
                                                            <Form.Check
                                                                inline
                                                                label="ON"
                                                                name="group1"
                                                                type={type}
                                                                id={`inline-${type}-1`}
                                                            />
                                                            <br></br>
                                                            <Form.Check
                                                                inline
                                                                label="OFF"
                                                                name="group1"
                                                                type={type}
                                                                id={`inline-${type}-2`}
                                                            />
                                                        </div>
                                                    ))}
                                                </Form>
                                            </div>
                                        </div>
                                        <div className="col-span-12 md:col-span-6 mx-2 ">
                                            <div>
                                                <h6>
                                                    Send Me Messages To My Cell
                                                    Phone
                                                </h6>
                                                <Form>
                                                    {['checkbox'].map(type => (
                                                        <div
                                                            key={`inline-${type}`}
                                                            className="mb-3">
                                                            <Form.Check
                                                                inline
                                                                label="ON"
                                                                name="group1"
                                                                type={type}
                                                                id={`inline-${type}-1`}
                                                            />
                                                            <br></br>
                                                            <Form.Check
                                                                inline
                                                                label="OFF"
                                                                name="group1"
                                                                type={type}
                                                                id={`inline-${type}-2`}
                                                            />
                                                        </div>
                                                    ))}
                                                </Form>
                                            </div>
                                            <div>
                                                <h6>
                                                    Send Me Messages To My Cell
                                                    Phone
                                                </h6>
                                                <Form>
                                                    {['checkbox'].map(type => (
                                                        <div
                                                            key={`inline-${type}`}
                                                            className="mb-3">
                                                            <Form.Check
                                                                inline
                                                                label="ON"
                                                                name="group1"
                                                                type={type}
                                                                id={`inline-${type}-1`}
                                                            />
                                                            <br></br>
                                                            <Form.Check
                                                                inline
                                                                label="OFF"
                                                                name="group1"
                                                                type={type}
                                                                id={`inline-${type}-2`}
                                                            />
                                                        </div>
                                                    ))}
                                                </Form>
                                            </div>
                                        </div>
                                    </div>
                                    <Button variant="primary">Submit</Button>{' '}
                                </Form>
                            </Tab.Pane>
                            <Tab.Pane eventKey="close_account">
                                <Form>
                                    <h4>Close Account</h4>
                                    <p>
                                        <strong className="text-red-500">
                                            Warning :{' '}
                                        </strong>
                                        If you close your account, all your
                                        followers and friends will be
                                        unsubscribed and you will lose access
                                        forever.
                                    </p>
                                    <div className="grid grid-cols-12 mx-auto">
                                        <div className="col-span-12 md:col-span-6 mx-2">
                                            <Form.Group
                                                className="mb-3"
                                                controlId="exampleForm.ControlInput1">
                                                <Form.Label>
                                                    First Name
                                                </Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    placeholder="First Name"
                                                />
                                            </Form.Group>
                                            <Form.Group
                                                className="mb-3"
                                                controlId="exampleForm.ControlInput1">
                                                <Form.Label>
                                                    Last Name
                                                </Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    placeholder="Last Name"
                                                />
                                            </Form.Group>
                                        </div>
                                        <div className="col-span-12 md:col-span-6 mx-2 ">
                                            <Form.Group
                                                className="mb-3"
                                                controlId="exampleForm.ControlInput1">
                                                <Form.Label>
                                                    Last Name
                                                </Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    placeholder="Last Name"
                                                />
                                            </Form.Group>
                                            <Form.Group
                                                className="mb-3"
                                                controlId="exampleForm.ControlInput1">
                                                <Form.Label>
                                                    First Name
                                                </Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    placeholder="First Name"
                                                />
                                            </Form.Group>
                                        </div>
                                    </div>
                                    <Button variant="primary">Submit</Button>{' '}
                                </Form>
                            </Tab.Pane>
                        </Tab.Content>
                    </div>
                </Tab.Container>
            </div>
        </div>
    )
}

export default settings
