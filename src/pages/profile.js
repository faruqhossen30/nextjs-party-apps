import Navnew from '@/components/Header/Navnew'
import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import 'bootstrap/dist/css/bootstrap.min.css'
import HomepageLike from '@/components/HomePage/HomepageLike';
import HomepageAdvertisement from '@/components/HomePage/HomepageAdvertisement';
import HomepageSuggestiongroup from '@/components/HomePage/HomepageSuggestiongroup';
import HomepageCreatepost from '@/components/HomePage/HomepageCreatepost';
import HomepageStory from '@/components/HomePage/HomepageStory';
import HomepageSinglefeed from '@/components/HomePage/HomepageSinglefeed';
import HomepageBirthday from '@/components/HomePage/HomepageBirthday';
import HomepageFollow from '@/components/HomePage/HomepageFollow';
import { FaFacebook, FaTwitterSquare, FaInstagramSquare, FaLinkedin, FaYoutube } from "react-icons/fa";
import ProfileHead from '@/components/Profile/ProfileHead';


const Profile = () => {



    return (
        <>
            <Navnew />
            <div className='m-2 px-1'>
                <Tab.Container defaultActiveKey="tileline">
                    <div className='bg-white rounded pb-2'>

                        <ProfileHead />

                        <Row className='px-8'>
                            <Nav variant="pills" className="flex-column">
                                <div className='flex items-center justify-between'>
                                    <div className='flex'>
                                        <Nav.Item>
                                            <Nav.Link eventKey="tileline">Timeline</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="about">About</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="photos">Photos</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="videos">Videos</Nav.Link>
                                        </Nav.Item>
                                    </div>
                                    <div className='flex gap-1 text-2xl'>
                                        <a href='#'>
                                            <FaFacebook />
                                        </a>
                                        <a href='#'>
                                            <FaTwitterSquare />
                                        </a>
                                        <a href='#'>
                                            <FaInstagramSquare />
                                        </a>
                                        <a href='#'>
                                            <FaLinkedin />
                                        </a>
                                    </div>
                                </div>
                            </Nav>
                        </Row>
                    </div>
                    <Tab.Content>
                        <Tab.Pane eventKey="tileline">
                            <div className='mt-1 rounded'>

                                <div className="grid grid-cols-12 mx-auto">
                                    <div className="hidden md:block md:col-span-3">

                                        <HomepageLike />

                                        <HomepageAdvertisement />

                                        <HomepageSuggestiongroup />

                                    </div>
                                    <div className="col-span-12 md:col-span-6 px-1 py-2 rounded">

                                        <HomepageCreatepost />

                                        <HomepageStory />

                                        <HomepageSinglefeed />

                                    </div>
                                    <div className="hidden md:block md:col-span-3">

                                        <HomepageBirthday />

                                        <HomepageFollow />

                                    </div>
                                </div>

                            </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="about" className='show'>
                            <div className='mt-4 rounded'>
                                <div className='grid grid-cols-12 mx-auto'>
                                    <div className='col-span-12  md:col-span-4 bg-white rounded p-3 mr-2'>
                                        <div className='flex items-center justify-between'>
                                            <h4 className='border-b-2'>Personal Information</h4>
                                            <span>...</span>
                                        </div>
                                        <div>
                                            <span className='text-lg block mb-2'><strong>Email : </strong>najmulcse2@gmail.com</span>
                                            <span className='text-lg block mb-2'><strong>Birthday : </strong>najmulcse2@gmail.com</span>
                                            <span className='text-lg block mb-2'><strong>Occupation : </strong>najmulcse2@gmail.com</span>
                                            <span className='text-lg block mb-2'><strong>Birthplace : </strong>najmulcse2@gmail.com</span>
                                            <span className='text-lg block mb-2'><strong>Phone : </strong>najmulcse2@gmail.com</span>
                                            <span className='text-lg block mb-2'><strong>Gender : </strong>najmulcse2@gmail.com</span>
                                            <span className='text-lg block mb-2'><strong>Relationship Status : </strong>najmulcse2@gmail.com</span>
                                            <span className='text-lg block mb-2'><strong>Blood Group : </strong>najmulcse2@gmail.com</span>
                                            <span className='text-lg block mb-2'><strong>Website : </strong>najmulcse2@gmail.com</span>
                                            <span className='text-lg block mb-2'><strong>Social Link : </strong>najmulcse2@gmail.com</span>
                                            <span className='text-lg block'><strong>Languages : </strong>najmulcse2@gmail.com</span>
                                        </div>
                                    </div>
                                    <div className='col-span-12  md:col-span-8 bg-white rounded p-3 ml-1'>

                                        <div>
                                            <h4>About Me!</h4>
                                            <p className='text-justify'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id eum iste magni molestiae. Itaque iusto quasi ipsum quam odit numquam veritatis, consequatur soluta rerum assumenda nostrum, laboriosam vel. Eum id neque quis, adipisci consequatur nobis doloribus dolorum libero corporis. Pariatur odit rerum repudiandae magnam. Repudiandae nam, quae in soluta ad laborum neque delectus minima reprehenderit sit cum quo distinctio obcaecati explicabo, hic dolor quas exercitationem fugiat cupiditate? Alias iure mollitia aliquam minima delectus voluptates neque dolores commodi repudiandae, quasi, laboriosam vel suscipit voluptatibus repellendus debitis earum ut officiis dolorum sint corrupti? Unde labore, perspiciatis recusandae esse consequuntur exercitationem illum blanditiis!</p>
                                        </div>
                                        <div>
                                            <h4>About Me!</h4>
                                            <p className='text-justify'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id eum iste magni molestiae. Itaque iusto quasi ipsum quam odit numquam veritatis, consequatur soluta rerum assumenda nostrum, laboriosam vel. Eum id neque quis, adipisci consequatur nobis doloribus dolorum libero corporis. Pariatur odit rerum repudiandae magnam. Repudiandae nam, quae in soluta ad laborum neque delectus minima reprehenderit sit cum quo distinctio obcaecati explicabo, hic dolor quas exercitationem fugiat cupiditate? Alias iure mollitia aliquam minima delectus voluptates neque dolores commodi repudiandae, quasi, laboriosam vel suscipit voluptatibus repellendus debitis earum ut officiis dolorum sint corrupti? Unde labore, perspiciatis recusandae esse consequuntur exercitationem illum blanditiis!</p>
                                        </div>
                                        <div>
                                            <h4>About Me!</h4>
                                            <p className='text-justify'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id eum iste magni molestiae. Itaque iusto quasi ipsum quam odit numquam veritatis, consequatur soluta rerum assumenda nostrum, laboriosam vel. Eum id neque quis, adipisci consequatur nobis doloribus dolorum libero corporis. Pariatur odit rerum repudiandae magnam. Repudiandae nam, quae in soluta ad laborum neque delectus minima reprehenderit sit cum quo distinctio obcaecati explicabo, hic dolor quas exercitationem fugiat cupiditate? Alias iure mollitia aliquam minima delectus voluptates neque dolores commodi repudiandae, quasi, laboriosam vel suscipit voluptatibus repellendus debitis earum ut officiis dolorum sint corrupti? Unde labore, perspiciatis recusandae esse consequuntur exercitationem illum blanditiis!</p>
                                        </div>
                                        <div>
                                            <h4>About Me!</h4>
                                            <p className='text-justify'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id eum iste magni molestiae. Itaque iusto quasi ipsum quam odit numquam veritatis, consequatur soluta rerum assumenda nostrum, laboriosam vel. Eum id neque quis, adipisci consequatur nobis doloribus dolorum libero corporis. Pariatur odit rerum repudiandae magnam. Repudiandae nam, quae in soluta ad laborum neque delectus minima reprehenderit sit cum quo distinctio obcaecati explicabo, hic dolor quas exercitationem fugiat cupiditate? Alias iure mollitia aliquam minima delectus voluptates neque dolores commodi repudiandae, quasi, laboriosam vel suscipit voluptatibus repellendus debitis earum ut officiis dolorum sint corrupti? Unde labore, perspiciatis recusandae esse consequuntur exercitationem illum blanditiis!</p>
                                        </div>
                                        <div>
                                            <h4>About Me!</h4>
                                            <p className='text-justify'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id eum iste magni molestiae. Itaque iusto quasi ipsum quam odit numquam veritatis, consequatur soluta rerum assumenda nostrum, laboriosam vel. Eum id neque quis, adipisci consequatur nobis doloribus dolorum libero corporis. Pariatur odit rerum repudiandae magnam. Repudiandae nam, quae in soluta ad laborum neque delectus minima reprehenderit sit cum quo distinctio obcaecati explicabo, hic dolor quas exercitationem fugiat cupiditate? Alias iure mollitia aliquam minima delectus voluptates neque dolores commodi repudiandae, quasi, laboriosam vel suscipit voluptatibus repellendus debitis earum ut officiis dolorum sint corrupti? Unde labore, perspiciatis recusandae esse consequuntur exercitationem illum blanditiis!</p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </Tab.Pane>


                        <Tab.Pane eventKey="photos">
                            <div className='mt-4  rounded p-3'>
                                <div>
                                    <Tab.Container defaultActiveKey="allPhotos">
                                        <div className='flex items-center justify-between  flex-grow bg-white rounded p-3'>
                                            <div className='w-full'><strong>Photos</strong> <br /> 100 </div>
                                            <div className='w-full'>
                                                <Row className='px-8'>
                                                    <Nav variant="pills" className="flex-column">
                                                        <div className='flex items-center justify-between'>
                                                            <div className='flex'>
                                                                <Nav.Item>
                                                                    <Nav.Link eventKey="allPhotos">All Photos</Nav.Link>
                                                                </Nav.Item>
                                                                <Nav.Item>
                                                                    <Nav.Link eventKey="photos">Photos</Nav.Link>
                                                                </Nav.Item>
                                                            </div>
                                                        </div>
                                                    </Nav>
                                                </Row>

                                            </div>
                                            <div className='w-full'>
                                                <input
                                                    type="text"
                                                    className="rounded-full w-full"
                                                    placeholder="Search..."></input></div>
                                        </div>
                                        <Tab.Content>
                                            <Tab.Pane eventKey="allPhotos">
                                                <div className='mt-4 bg-white rounded p-2'>

                                                    <div className='grid grid-cols-12'>
                                                        <div className='col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 pr-1 pl-1 pb-2'>
                                                            <img src="/user.jpg" alt="" className='rounded w-full h-72 ' />
                                                        </div>
                                                        <div className='col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 pr-1 pl-1 pb-2'>
                                                            <img src="/user.jpg" alt="" className='rounded w-full h-72' />
                                                        </div>
                                                        <div className='col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 pr-1 pl-1 pb-2'>
                                                            <img src="/user.jpg" alt="" className='rounded w-full h-72' />
                                                        </div>
                                                        <div className='col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 pr-1 pl-1 pb-2'>
                                                            <img src="/user.jpg" alt="" className='rounded w-full h-72' />
                                                        </div>
                                                    </div>

                                                </div>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="photos">
                                                <div className='mt-4 bg-white rounded p-2'>
                                                    <div className='grid grid-cols-12'>
                                                        <div className='col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 pr-1 pl-1 pb-2'>
                                                            <img src="/user.jpg" alt="" className='rounded w-full h-72 ' />
                                                        </div>
                                                        <div className='col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 pr-1 pl-1 pb-2'>
                                                            <img src="/user.jpg" alt="" className='rounded w-full h-72' />
                                                        </div>
                                                        <div className='col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 pr-1 pl-1 pb-2'>
                                                            <img src="/user.jpg" alt="" className='rounded w-full h-72' />
                                                        </div>
                                                        <div className='col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 pr-1 pl-1 pb-2'>
                                                            <img src="/user.jpg" alt="" className='rounded w-full h-72' />
                                                        </div>
                                                    </div>
                                                </div>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Tab.Container>
                                </div>
                            </div>
                        </Tab.Pane>



                        <Tab.Pane eventKey="videos">
                            <div className='mt-4 bg-white rounded p-2'>
                                <div className='grid grid-cols-12'>
                                    <div className='col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 pr-1 pl-1 pb-2'>
                                        <img src="/user.jpg" alt="" className='rounded w-full h-72' />
                                    </div>
                                    <div className='col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 pr-1 pl-1 pb-2'>
                                        <img src="/user.jpg" alt="" className='rounded w-full h-72' />
                                    </div>
                                    <div className='col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 pr-1 pl-1 pb-2'>
                                        <img src="/user.jpg" alt="" className='rounded w-full h-72' />
                                    </div>
                                    <div className='col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 pr-1 pl-1 pb-2'>
                                        <img src="/user.jpg" alt="" className='rounded w-full h-72' />
                                    </div>
                                    <div className='col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 pr-1 pl-1 pb-2'>
                                        <img src="/user.jpg" alt="" className='rounded w-full h-72' />
                                    </div>
                                    <div className='col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 pr-1 pl-1 pb-2'>
                                        <img src="/user.jpg" alt="" className='rounded w-full h-72' />
                                    </div>
                                    <div className='col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 pr-1 pl-1 pb-2'>
                                        <img src="/user.jpg" alt="" className='rounded w-full h-72' />
                                    </div>
                                    <div className='col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 pr-1 pl-1 pb-2'>
                                        <img src="/user.jpg" alt="" className='rounded w-full h-72' />
                                    </div>
                                </div>
                            </div>
                        </Tab.Pane>


                    </Tab.Content>
                </Tab.Container>



            </div>

        </>
    )
}

export default Profile