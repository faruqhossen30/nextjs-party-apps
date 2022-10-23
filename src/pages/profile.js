import Navnew from '@/components/Header/Navnew'
import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import 'bootstrap/dist/css/bootstrap.min.css'


const Profile = () => {



    return (
        <>
            <Navnew />

            <div className='m-2 px-1'>

                <Tab.Container>
                    <div className='bg-white rounded pb-2'>
                        <div className='relative'>
                            <img class="w-full h-48 object-cover rounded" src="https://images.pexels.com/photos/1274260/pexels-photo-1274260.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="Flower and sky" />

                            <div className='ml-4 absolute -bottom-32 flex items-center'>
                                <img src="https://images.prothomalo.com/prothomalo-bangla%2F2022-10%2Ff717609c-4123-4215-a5a5-104aca30db48%2FPakistan_1.jpg?auto=format%2Ccompress&format=webp&w=640&dpr=1.0" alt="" className='rounded w-48 h-48' />

                                <div className='ml-20 pt-6'>
                                    <h6 className='capitalize text-xl'><strong>najmul hasan</strong></h6>
                                    <h6>Jessore</h6>
                                </div>
                            </div>
                        </div>

                        <div className='relative pt-24 -top-16 flex items-center justify-end gap-8 mr-4'>
                            <div className='text-center border-r-2 border-indigo-600 pr-6'>
                                <h2><strong>22323</strong></h2>
                                <span>Likes</span>
                            </div>
                            <div className='text-center border-r-2 border-indigo-600 pr-6'>
                                <h2><strong>22323</strong></h2>
                                <span>Likes</span>
                            </div>
                            <div className='text-center'>
                                <h2><strong>22323</strong></h2>
                                <span>Likes</span>
                            </div>
                        </div>

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
                                    <div>
                                        loremdsfdsfdsfdsfsdfds
                                    </div>
                                </div>
                            </Nav>
                        </Row>
                    </div>
                    <Tab.Content>
                        <Tab.Pane eventKey="tileline">
                            <div className='mt-4 bg-white rounded p-3'>

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
                                    <div className='col-span-12  md:col-span-8 bg-white rounded p-3 ml-2'>

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
                                    <Tab.Container>
                                        <div className='md:flex items-center justify-between flex-grow bg-white rounded p-3'>
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
                                                <div className='mt-4 bg-white rounded p-3'>

                                                    <div className='grid grid-cols-12'>
                                                        <div className='col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 pr-1 pl-1 pb-2'>
                                                            <img src="https://images.prothomalo.com/prothomalo-bangla%2F2022-10%2Ff717609c-4123-4215-a5a5-104aca30db48%2FPakistan_1.jpg?auto=format%2Ccompress&format=webp&w=640&dpr=1.0" alt="" className='rounded w-full h-72 ' />
                                                        </div>
                                                        <div className='col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 pr-1 pl-1 pb-2'>
                                                            <img src="https://images.prothomalo.com/prothomalo-bangla%2F2022-10%2Ff717609c-4123-4215-a5a5-104aca30db48%2FPakistan_1.jpg?auto=format%2Ccompress&format=webp&w=640&dpr=1.0" alt="" className='rounded w-full h-72' />
                                                        </div>
                                                        <div className='col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 pr-1 pl-1 pb-2'>
                                                            <img src="https://images.prothomalo.com/prothomalo-bangla%2F2022-10%2Ff717609c-4123-4215-a5a5-104aca30db48%2FPakistan_1.jpg?auto=format%2Ccompress&format=webp&w=640&dpr=1.0" alt="" className='rounded w-full h-72' />
                                                        </div>
                                                        <div className='col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 pr-1 pl-1 pb-2'>
                                                            <img src="https://images.prothomalo.com/prothomalo-bangla%2F2022-10%2Ff717609c-4123-4215-a5a5-104aca30db48%2FPakistan_1.jpg?auto=format%2Ccompress&format=webp&w=640&dpr=1.0" alt="" className='rounded w-full h-72' />
                                                        </div>
                                                    </div>

                                                </div>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="photos">
                                                <div className='mt-4 bg-white rounded p-3'>
                                                    <div className='grid grid-cols-12'>
                                                        <div className='col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 pr-1 pl-1 pb-2'>
                                                            <img src="https://images.prothomalo.com/prothomalo-bangla%2F2022-10%2Ff717609c-4123-4215-a5a5-104aca30db48%2FPakistan_1.jpg?auto=format%2Ccompress&format=webp&w=640&dpr=1.0" alt="" className='rounded w-full h-72 ' />
                                                        </div>
                                                        <div className='col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 pr-1 pl-1 pb-2'>
                                                            <img src="https://images.prothomalo.com/prothomalo-bangla%2F2022-10%2Ff717609c-4123-4215-a5a5-104aca30db48%2FPakistan_1.jpg?auto=format%2Ccompress&format=webp&w=640&dpr=1.0" alt="" className='rounded w-full h-72' />
                                                        </div>
                                                        <div className='col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 pr-1 pl-1 pb-2'>
                                                            <img src="https://images.prothomalo.com/prothomalo-bangla%2F2022-10%2Ff717609c-4123-4215-a5a5-104aca30db48%2FPakistan_1.jpg?auto=format%2Ccompress&format=webp&w=640&dpr=1.0" alt="" className='rounded w-full h-72' />
                                                        </div>
                                                        <div className='col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 pr-1 pl-1 pb-2'>
                                                            <img src="https://images.prothomalo.com/prothomalo-bangla%2F2022-10%2Ff717609c-4123-4215-a5a5-104aca30db48%2FPakistan_1.jpg?auto=format%2Ccompress&format=webp&w=640&dpr=1.0" alt="" className='rounded w-full h-72' />
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
                            <div className='mt-4 bg-white rounded p-3'>
                                <div className='grid grid-cols-12'>
                                    <div className='col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 pr-1 pl-1 pb-2'>
                                        <img src="https://images.prothomalo.com/prothomalo-bangla%2F2022-10%2Ff717609c-4123-4215-a5a5-104aca30db48%2FPakistan_1.jpg?auto=format%2Ccompress&format=webp&w=640&dpr=1.0" alt="" className='rounded w-full h-72' />
                                    </div>
                                    <div className='col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 pr-1 pl-1 pb-2'>
                                        <img src="https://images.prothomalo.com/prothomalo-bangla%2F2022-10%2Ff717609c-4123-4215-a5a5-104aca30db48%2FPakistan_1.jpg?auto=format%2Ccompress&format=webp&w=640&dpr=1.0" alt="" className='rounded w-full h-72' />
                                    </div>
                                    <div className='col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 pr-1 pl-1 pb-2'>
                                        <img src="https://images.prothomalo.com/prothomalo-bangla%2F2022-10%2Ff717609c-4123-4215-a5a5-104aca30db48%2FPakistan_1.jpg?auto=format%2Ccompress&format=webp&w=640&dpr=1.0" alt="" className='rounded w-full h-72' />
                                    </div>
                                    <div className='col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 pr-1 pl-1 pb-2'>
                                        <img src="https://images.prothomalo.com/prothomalo-bangla%2F2022-10%2Ff717609c-4123-4215-a5a5-104aca30db48%2FPakistan_1.jpg?auto=format%2Ccompress&format=webp&w=640&dpr=1.0" alt="" className='rounded w-full h-72' />
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