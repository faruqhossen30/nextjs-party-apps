import axios from '@/lib/axios'
import UserContext from '@/contexts/Usercontext'
import React, { useContext, useEffect, useState } from 'react'
import Tab from 'react-bootstrap/Tab'
import Row from 'react-bootstrap/Row'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import { Form } from 'react-bootstrap'

const SettingTab = ({user}) => {
    const[profile, setProfile]=useState(null);
    useEffect(()=>{
        setProfile(user)
    },[]);

    const changeHandaller = (e)=>{
        setProfile({'name': e.target.value});
    }


    async function profileUpdate(e) {
        e.preventDefault()
        let url = `${process.env.NEXT_PUBLIC_API_URL}/profile`
        console.log(profile)
        axios
            .post(`${process.env.NEXT_PUBLIC_API_URL}/profile`, {
                ...profile
            })
            .then(response => {
                console.log(response);
            })
    }

    return (
        <>
            {profile &&
                <div className="container-fluid">
                {/* <p>{user.name && user.name}</p> */}
                <Tab.Container defaultActiveKey="profile_information">
                    <div className="bg-white rounded py-4 my-4">
                        <Row>
                            <Nav variant="pills" className="flex-column">
                                <div className="flex flex-wrap justify-center">
                                    <Nav.Item>
                                        <Nav.Link eventKey="profile_information">
                                            Profile Information
                                        </Nav.Link>
                                    </Nav.Item>
                                    {/* <Nav.Item>
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
                                    </Nav.Item> */}
                                </div>
                            </Nav>
                        </Row>
                    </div>

                    <div className="bg-white p-3 rounded mb-2">
                        <Tab.Content>
                            <Tab.Pane eventKey="profile_information">
                                <Form
                                    method="POST"
                                    onSubmit={profileUpdate}
                                    encType='multipart/form-data'>
                                    <h4>Profile Information</h4>
                                    <div className="grid grid-cols-12 mx-auto">
                                        <div className="col-span-12 md:col-span-6 mx-2">

                                            <div className="grid grid-cols-12 mx-auto ">
                                                <div className='col-span-8'>
                                                    <Form.Group
                                                        className="mb-3">
                                                        <Form.Label>
                                                            Avatar
                                                        </Form.Label>
                                                        <Form.Control
                                                            type="file"
                                                            name='file'

                                                        />
                                                    </Form.Group>
                                                </div>
                                                <div className='col-span-4 ml-auto'>
                                                    <img src="/user.jpg" alt="" className="rounded w-32 h-32" />
                                                </div>
                                            </div>

                                            <Form.Group
                                                className="mb-3">
                                                <Form.Label>
                                                    Name
                                                </Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    name='name'
                                                    value={profile.name}
                                                    onChange={changeHandaller}
                                                    placeholder="Enter Your Name"

                                                />
                                            </Form.Group>

                                            <Form.Group
                                                className="mb-3">
                                                <Form.Label>Email</Form.Label>
                                                <Form.Control
                                                    type="email"
                                                    name='email'
                                                    disabled
                                                    placeholder="Email Address"

                                                />
                                            </Form.Group>

                                            <Form.Group
                                                className="mb-3">
                                                <Form.Label>Mobile</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    name='mobile'
                                                    placeholder="Enter Mobile"

                                                />
                                            </Form.Group>

                                            <Form.Group
                                                className="mb-3">
                                                <Form.Label>Date of Birth</Form.Label>
                                                <Form.Control
                                                    type="date"
                                                    name='dob'

                                                />
                                            </Form.Group>

                                            <Form.Group
                                                className="mb-3">
                                                <Form.Label>
                                                    Gender
                                                </Form.Label>
                                                <select

                                                    className="form-control"
                                                    name='gender'

                                                >
                                                    <option value="male">Male</option>
                                                    <option value="female">Female</option>
                                                    <option value="other">Other</option>
                                                </select>
                                            </Form.Group>

                                            <Form.Group
                                                className="mb-3">
                                                <Form.Label>Occupation</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    placeholder='Occupation'
                                                    name='occupation'

                                                />
                                            </Form.Group>
                                        </div>
                                        <div className="col-span-12 md:col-span-6 mx-2 ">

                                            <Form.Group className="mb-3">
                                                <Form.Label>Address</Form.Label>
                                                <Form.Control
                                                    name='address'
                                                    placeholder='Address'
                                                    as="textarea" rows={2} />
                                            </Form.Group>
                                            <Form.Group
                                                className="mb-3">
                                                <Form.Label>
                                                    Relation Status
                                                </Form.Label>
                                                <select
                                                    name="relation_status"
                                                    className="form-control"

                                                >
                                                    <option value="married">Married</option>
                                                    <option value="unmarried">Unmarried</option>
                                                </select>
                                            </Form.Group>

                                            <Form.Group
                                                className="mb-3">
                                                <Form.Label>
                                                    Blood Group
                                                </Form.Label>
                                                <select
                                                    className="form-control"
                                                    name='blood'

                                                >
                                                    <option value="a+">A+</option>
                                                    <option value="a-">A-</option>
                                                    <option value="b+">B+</option>
                                                    <option value="b-">B-</option>
                                                    <option value="o+">O+</option>
                                                    <option value="o-">O-</option>
                                                    <option value="ab+">AB+</option>
                                                    <option value="ab-">AB-</option>
                                                </select>
                                            </Form.Group>

                                            <Form.Group
                                                className="mb-3">
                                                <Form.Label>Website</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    name='website'

                                                    placeholder='Enter Your Website'
                                                />
                                            </Form.Group>

                                            <Form.Group
                                                className="mb-3">
                                                <Form.Label>Facebook</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    name='facebook'
                                                    placeholder='Enter Your Facebook Link'
                                                />
                                            </Form.Group>

                                            <Form.Group
                                                className="mb-3">
                                                <Form.Label>Youtube</Form.Label>
                                                <Form.Control
                                                    type="text"

                                                    name='youtube'
                                                    placeholder='Enter Your Youtube Link'
                                                />
                                            </Form.Group>

                                            <Form.Group
                                                className="mb-3">
                                                <Form.Label>Twitter</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    name='twitter'

                                                    placeholder='Enter Your Twitter Link'
                                                />
                                            </Form.Group>
                                        </div>
                                    </div>
                                    <Button
                                        variant="primary"
                                        type='submit'
                                        className="bg-emerald-700">
                                        Submit
                                    </Button>{' '}
                                </Form>
                            </Tab.Pane>
                            {/* <Tab.Pane eventKey="account">
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
                                                                // id={`inline-${type}-1`}
                                                            />
                                                            <br></br>
                                                            <Form.Check
                                                                inline
                                                                label="OFF"
                                                                name="group1"
                                                                type={type}
                                                                // id={`inline-${type}-2`}
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
                            </Tab.Pane> */}
                        </Tab.Content>
                    </div>
                </Tab.Container>
            </div>
            }
        </>
    )
}

export default SettingTab
