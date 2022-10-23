

import { FaHeart, FaImage, FaFileVideo, FaList, FaThumbsUp, FaShareAlt, FaRegCommentDots } from 'react-icons/fa'


const HomePage = () => {
    return (
        <>
            <div className="grid grid-cols-12 mx-auto">
                <div className="hidden md:block md:col-span-3">

                    <div className='p-4 bg-white m-2 rounded'>

                        <div className='relative'>
                            <img class="w-full h-20 object-cover rounded" src="https://images.pexels.com/photos/1274260/pexels-photo-1274260.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="Flower and sky" />

                            <div className='ml-4 absolute top-16 flex items-center'>
                                <img src="https://images.prothomalo.com/prothomalo-bangla%2F2022-10%2Ff717609c-4123-4215-a5a5-104aca30db48%2FPakistan_1.jpg?auto=format%2Ccompress&format=webp&w=640&dpr=1.0" alt="" className='rounded w-24 h-24' />

                                <div className='ml-2 pt-6'>
                                    <h6 className='capitalize text-lg leading-none'><strong>najmul hasan</strong></h6>
                                    <h6>Jessore</h6>
                                </div>
                            </div>
                        </div>

                        <div className='relative pt-24 flex items-center justify-evenly'>
                            <div className='text-center border-r-2 border-indigo-600 pr-6'>
                                <h6><strong>22323</strong></h6>
                                <span>Likes</span>
                            </div>
                            <div className='text-center border-r-2 border-indigo-600 pr-6'>
                                <h6><strong>22323</strong></h6>
                                <span>Likes</span>
                            </div>
                            <div className='text-center'>
                                <h6><strong>22323</strong></h6>
                                <span>Likes</span>
                            </div>
                        </div>

                        <div className='flex items-center justify-center py-4'>
                            <FaHeart />
                            <h6> New Likes This Week</h6>
                        </div>

                        <div className='text-center'>
                            <div className='flex justify-center'>
                                <a href=""> <img src="https://images.prothomalo.com/prothomalo-bangla%2F2022-10%2Ff717609c-4123-4215-a5a5-104aca30db48%2FPakistan_1.jpg?auto=format%2Ccompress&format=webp&w=640&dpr=1.0" alt="" className='rounded-full w-10 h-10' /></a>
                                <a href=""> <img src="https://images.prothomalo.com/prothomalo-bangla%2F2022-10%2Ff717609c-4123-4215-a5a5-104aca30db48%2FPakistan_1.jpg?auto=format%2Ccompress&format=webp&w=640&dpr=1.0" alt="" className='rounded-full w-10 h-10' /></a>
                                <a href=""> <img src="https://images.prothomalo.com/prothomalo-bangla%2F2022-10%2Ff717609c-4123-4215-a5a5-104aca30db48%2FPakistan_1.jpg?auto=format%2Ccompress&format=webp&w=640&dpr=1.0" alt="" className='rounded-full w-10 h-10' /></a>
                                <a href=""> <img src="https://images.prothomalo.com/prothomalo-bangla%2F2022-10%2Ff717609c-4123-4215-a5a5-104aca30db48%2FPakistan_1.jpg?auto=format%2Ccompress&format=webp&w=640&dpr=1.0" alt="" className='rounded-full w-10 h-10' /></a>
                                <a href=""> <img src="https://images.prothomalo.com/prothomalo-bangla%2F2022-10%2Ff717609c-4123-4215-a5a5-104aca30db48%2FPakistan_1.jpg?auto=format%2Ccompress&format=webp&w=640&dpr=1.0" alt="" className='rounded-full w-10 h-10' /></a>
                            </div>
                            <button className='py-2 mt-4 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75'>View Profile</button>
                        </div>

                    </div>

                    <div className='p-2 bg-white m-2 rounded'>
                        <h6>
                            <strong>Page You Like</strong>
                        </h6>
                        <div className='mt-4'>
                            <a href="#" className='flex items-center mb-6'>
                                <div>
                                    <img src="https://images.prothomalo.com/prothomalo-bangla%2F2022-10%2Ff717609c-4123-4215-a5a5-104aca30db48%2FPakistan_1.jpg?auto=format%2Ccompress&format=webp&w=640&dpr=1.0" alt="" className='rounded-full w-16 h-16' />
                                </div>
                                <div className='ml-4 capitalize'>
                                    <h6><strong>Graphic Design</strong></h6>
                                    <span>1215 Members</span>
                                </div>
                            </a>
                            <a href="#" className='flex items-center mb-6'>
                                <div>
                                    <img src="https://images.prothomalo.com/prothomalo-bangla%2F2022-10%2Ff717609c-4123-4215-a5a5-104aca30db48%2FPakistan_1.jpg?auto=format%2Ccompress&format=webp&w=640&dpr=1.0" alt="" className='rounded-full w-16 h-16' />
                                </div>
                                <div className='ml-4 capitalize'>
                                    <h6><strong>Graphic Design</strong></h6>
                                    <span>1215 Members</span>
                                </div>
                            </a>
                            <a href="#" className='flex items-center mb-6'>
                                <div>
                                    <img src="https://images.prothomalo.com/prothomalo-bangla%2F2022-10%2Ff717609c-4123-4215-a5a5-104aca30db48%2FPakistan_1.jpg?auto=format%2Ccompress&format=webp&w=640&dpr=1.0" alt="" className='rounded-full w-16 h-16' />
                                </div>
                                <div className='ml-4 capitalize'>
                                    <h6><strong>Graphic Design</strong></h6>
                                    <span>1215 Members</span>
                                </div>
                            </a>
                            <a href="#" className='flex items-center mb-6'>
                                <div>
                                    <img src="https://images.prothomalo.com/prothomalo-bangla%2F2022-10%2Ff717609c-4123-4215-a5a5-104aca30db48%2FPakistan_1.jpg?auto=format%2Ccompress&format=webp&w=640&dpr=1.0" alt="" className='rounded-full w-16 h-16' />
                                </div>
                                <div className='ml-4 capitalize'>
                                    <h6><strong>Graphic Design</strong></h6>
                                    <span>1215 Members</span>
                                </div>
                            </a>
                        </div>
                    </div>

                    <div className='p-4 pt-0'>
                        <h6>
                            <strong>Advertisement</strong>
                        </h6>
                        <a href='#'>
                            <img src="https://images.prothomalo.com/prothomalo-bangla%2F2022-10%2Ff717609c-4123-4215-a5a5-104aca30db48%2FPakistan_1.jpg?auto=format%2Ccompress&format=webp&w=640&dpr=1.0" alt="" className='rounded w-full h-48 pt-3' />
                        </a>
                    </div>


                    <div className='pr-4 p-2 bg-white m-2 rounded'>
                        <h6>
                            <strong>Suggested Groups</strong>
                        </h6>
                        <div className='mt-4'>
                            <a href='#' className='flex items-center mb-6'>
                                <div>
                                    <img src="https://images.prothomalo.com/prothomalo-bangla%2F2022-10%2Ff717609c-4123-4215-a5a5-104aca30db48%2FPakistan_1.jpg?auto=format%2Ccompress&format=webp&w=640&dpr=1.0" alt="" className='rounded w-16 h-16' />
                                </div>
                                <div className='ml-4 capitalize'>
                                    <h6><strong>Graphic Design</strong></h6>
                                    <span>1215 Members</span> <br />
                                    <a href="#">Join Community</a>
                                </div>
                            </a>
                            <a href='#' className='flex items-center mb-6'>
                                <div>
                                    <img src="https://images.prothomalo.com/prothomalo-bangla%2F2022-10%2Ff717609c-4123-4215-a5a5-104aca30db48%2FPakistan_1.jpg?auto=format%2Ccompress&format=webp&w=640&dpr=1.0" alt="" className='rounded w-16 h-16' />
                                </div>
                                <div className='ml-4 capitalize'>
                                    <h6><strong>Graphic Design</strong></h6>
                                    <span>1215 Members</span> <br />
                                    <a href="#">Join Community</a>
                                </div>
                            </a>
                            <a href='#' className='flex items-center mb-6'>
                                <div>
                                    <img src="https://images.prothomalo.com/prothomalo-bangla%2F2022-10%2Ff717609c-4123-4215-a5a5-104aca30db48%2FPakistan_1.jpg?auto=format%2Ccompress&format=webp&w=640&dpr=1.0" alt="" className='rounded w-16 h-16' />
                                </div>
                                <div className='ml-4 capitalize'>
                                    <h6><strong>Graphic Design</strong></h6>
                                    <span>1215 Members</span> <br />
                                    <a href="#">Join Community</a>
                                </div>
                            </a>
                        </div>
                    </div>

                </div>
                <div className="col-span-12 md:col-span-6 px-4 py-2 rounded">

                    <div className='bg-white rounded p-4'>
                        <h6>
                            <strong>Create New Post</strong>
                        </h6>
                        <div>
                            <textarea
                                id="message"
                                rows="4"
                                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Write something here..."></textarea>
                        </div>
                        <div className="flex items-center justify-between py-2 px-3">
                            <div className="flex items-center space-x-1 cursor-pointer">
                                <FaImage />
                                <span>Photo</span>
                            </div>
                            <div className="flex items-center space-x-1 cursor-pointer">
                                <FaFileVideo />
                                <span>Video</span>
                            </div>
                            <div className="flex items-center space-x-1 cursor-pointer">
                                <FaList />
                                <span>Pull</span>
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    className="bg-purple-600 text-white font-bold px-3 py-1 rounded-lg">
                                    Post
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className='pt-4'>
                        <div className='flex justify-between pb-4'>
                            <h6>
                                <strong>Stories</strong>
                            </h6>
                            <h6>
                                <a href='#' className='underline'>See All</a>
                            </h6>
                        </div>
                        <div className='grid grid-cols-12 mx-auto gap-4'>
                            <div className='col-span-2 cursor-pointer'>
                                <div>
                                    <img src="https://images.prothomalo.com/prothomalo-bangla%2F2022-10%2Ff717609c-4123-4215-a5a5-104aca30db48%2FPakistan_1.jpg?auto=format%2Ccompress&format=webp&w=640&dpr=1.0" alt="" className='rounded w-72 h-20' />
                                    <span className='capitalize text-sm text-center block py-1'>add story</span>
                                </div>
                            </div>
                            <div className='col-span-2 cursor-pointer'>
                                <div>
                                    <img src="https://images.prothomalo.com/prothomalo-bangla%2F2022-10%2Ff717609c-4123-4215-a5a5-104aca30db48%2FPakistan_1.jpg?auto=format%2Ccompress&format=webp&w=640&dpr=1.0" alt="" className='rounded w-72 h-20' />
                                    <span className='capitalize text-sm text-center block py-1'>najmul hasan</span>
                                </div>
                            </div>
                            <div className='col-span-2 cursor-pointer'>
                                <div>
                                    <img src="https://images.prothomalo.com/prothomalo-bangla%2F2022-10%2Ff717609c-4123-4215-a5a5-104aca30db48%2FPakistan_1.jpg?auto=format%2Ccompress&format=webp&w=640&dpr=1.0" alt="" className='rounded w-72 h-20' />
                                    <span className='capitalize text-sm text-center block py-1'>najmul hasan</span>
                                </div>
                            </div>
                            <div className='col-span-2 cursor-pointer'>
                                <div>
                                    <img src="https://images.prothomalo.com/prothomalo-bangla%2F2022-10%2Ff717609c-4123-4215-a5a5-104aca30db48%2FPakistan_1.jpg?auto=format%2Ccompress&format=webp&w=640&dpr=1.0" alt="" className='rounded w-72 h-20' />
                                    <span className='capitalize text-sm text-center block py-1'>najmul hasan</span>
                                </div>
                            </div>
                            <div className='col-span-2 cursor-pointer'>
                                <div>
                                    <img src="https://images.prothomalo.com/prothomalo-bangla%2F2022-10%2Ff717609c-4123-4215-a5a5-104aca30db48%2FPakistan_1.jpg?auto=format%2Ccompress&format=webp&w=640&dpr=1.0" alt="" className='rounded w-72 h-20' />
                                    <span className='capitalize text-sm text-center block py-1'>najmul hasan</span>
                                </div>
                            </div>
                            <div className='col-span-2 cursor-pointer'>
                                <div>
                                    <img src="https://images.prothomalo.com/prothomalo-bangla%2F2022-10%2Ff717609c-4123-4215-a5a5-104aca30db48%2FPakistan_1.jpg?auto=format%2Ccompress&format=webp&w=640&dpr=1.0" alt="" className='rounded w-72 h-20' />
                                    <span className='capitalize text-sm text-center block py-1'>najmul hasan</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='my-3 bg-white rounded p-4'>
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center'>
                                <div>
                                    <a href='#'><img src="https://images.prothomalo.com/prothomalo-bangla%2F2022-10%2Ff717609c-4123-4215-a5a5-104aca30db48%2FPakistan_1.jpg?auto=format%2Ccompress&format=webp&w=640&dpr=1.0" alt="" className='rounded-full w-12 h-12' /></a>
                                </div>
                                <div className='ml-2 capitalize'>
                                    <a href='#'><h6 className='leading-none'><strong>najmul hasan</strong></h6></a>
                                    <span>10 minits ago</span>
                                </div>
                            </div>
                            <div>
                                ...
                            </div>
                        </div>
                        <div>
                            <p className='py-4 text-justify text-base'>najmul ipsum dolor sit amet consectetur adipisicing elit. Velit assumenda natus harum, illum quaerat praesentium nisi officia, obcaecati in soluta perspiciatis hic nemo aspernatur dicta voluptas exercitationem beatae nulla quisquam nam! Placeat veritatis dicta est, modi provident repellat quidem neque, quo distinctio iusto quaerat? Ducimus officiis inventore voluptate maiores incidunt.</p>
                            <img src="https://images.prothomalo.com/prothomalo-bangla%2F2022-10%2Ff717609c-4123-4215-a5a5-104aca30db48%2FPakistan_1.jpg?auto=format%2Ccompress&format=webp&w=640&dpr=1.0" alt="" className='rounded w-full h-96 object-fill' />
                        </div>
                        <div className='mt-4'>
                            <hr />
                            <div className='flex justify-between px-2 py-3'>
                                <div>
                                    <span className='flex items-center'> <a href='#' className='mr-1'> <FaThumbsUp /></a> likes | 1200</span>
                                </div>
                                <div>
                                    <span className='flex items-center'>  <a href='#' className='mr-1'><FaRegCommentDots /> </a>comments | 1200</span>
                                </div>
                                <div>
                                    <div className='flex items-center'> <a href='#' className='mr-1'> <FaShareAlt /></a> share | 1200</div>
                                </div>
                            </div>
                            <hr />
                        </div>
                        <div className='flex pt-6'>
                            <div>
                                <a href='#'>
                                    <img src="https://images.prothomalo.com/prothomalo-bangla%2F2022-10%2Ff717609c-4123-4215-a5a5-104aca30db48%2FPakistan_1.jpg?auto=format%2Ccompress&format=webp&w=640&dpr=1.0" alt="" className='rounded-full w-60 h-12' />
                                </a>
                            </div>
                            <div className='ml-2 capitalize'>
                                <a href='#'><h6 className='leading-none'><strong>najmul hasan</strong></h6></a>
                                <span>10 minits ago</span>
                                <p className='text-justify text-sm'>হামলা-মারধরের ঘটনায় ছাত্রলীগের ১৪ জন নেতা-কর্মীর নাম উল্লেখ করে মামলার আবেদন করেছেন ছাত্র অধিকার পরিষদের সভাপতি বিন ইয়ামীন মোল্লা। আবেদনে ৪০ থেকে ৫০ জনকে অজ্ঞাত আসামি করা হয়েছে।

                                    আজ মঙ্গলবার ঢাকার চিফ মেট্রোপলিটন ম্যাজিস্ট্রেট (সিএমএম) আদালতে এই আবেদন করা হয়।

                                    মেট্রোপলিটন ম্যাজিস্ট্রেট শফি উদ্দিন বাদীর জবানবন্দি রেকর্ড করেন, তবে তিনি কোনো আদেশ দেননি। প্রথম আলোকে এই তথ্য নিশ্চিত করেন আদালতের বেঞ্চ সহকারী গৌতম চন্দ্র দাস।</p>
                                <div className='py-4'>
                                    <span className='cursor-pointer'>Likes( 10 )</span>
                                    <span className='pl-4 cursor-pointer'>Reply</span>
                                </div>
                                <div className='text-center'>
                                    <h6 className='cursor-pointer inline'>
                                        More Comments +
                                    </h6>
                                </div>
                            </div>
                        </div>

                        <div className='flex pt-4 relative'>
                            <img src="https://images.prothomalo.com/prothomalo-bangla%2F2022-10%2Ff717609c-4123-4215-a5a5-104aca30db48%2FPakistan_1.jpg?auto=format%2Ccompress&format=webp&w=640&dpr=1.0" alt="" className='rounded-full w-12 h-12' />
                            <textarea
                                id="message"
                                rows="4"
                                class="ml-2 block p-2.5 h-16 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Write something here..."></textarea>
                            <div className='absolute right-2 top-10'>
                                <FaFileVideo className='cursor-pointer' />
                            </div>
                        </div>
                    </div>

                </div>
                <div className="hidden md:block md:col-span-3">

                    <div className='pr-4 pt-2 bg-white m-2 rounded p-4'>
                        <div className='flex justify-between pb-4'>
                            <h6>
                                <strong>Today Birthdays</strong>
                            </h6>
                            <h6>
                                <a href='#' className='underline'>See All</a>
                            </h6>
                        </div>
                        <div>
                            <a href='#' className='flex items-center mb-6'>
                                <div>
                                    <img src="https://images.prothomalo.com/prothomalo-bangla%2F2022-10%2Ff717609c-4123-4215-a5a5-104aca30db48%2FPakistan_1.jpg?auto=format%2Ccompress&format=webp&w=640&dpr=1.0" alt="" className='rounded-full w-12 h-12' />
                                </div>
                                <div className='ml-4 capitalize'>
                                    <h6><strong>najmul hasan</strong></h6>
                                    <span>10 minits ago</span>
                                </div>
                            </a>
                            <a href='#' className='flex items-center mb-6'>
                                <div>
                                    <img src="https://images.prothomalo.com/prothomalo-bangla%2F2022-10%2Ff717609c-4123-4215-a5a5-104aca30db48%2FPakistan_1.jpg?auto=format%2Ccompress&format=webp&w=640&dpr=1.0" alt="" className='rounded-full w-12 h-12' />
                                </div>
                                <div className='ml-4 capitalize'>
                                    <h6><strong>najmul hasan</strong></h6>
                                    <span>10 minits ago</span>
                                </div>
                            </a>
                            <a href='#' className='flex items-center'>
                                <div>
                                    <img src="https://images.prothomalo.com/prothomalo-bangla%2F2022-10%2Ff717609c-4123-4215-a5a5-104aca30db48%2FPakistan_1.jpg?auto=format%2Ccompress&format=webp&w=640&dpr=1.0" alt="" className='rounded-full w-12 h-12' />
                                </div>
                                <div className='ml-4 capitalize'>
                                    <h6><strong>najmul hasan</strong></h6>
                                    <span>10 minits ago</span>
                                </div>
                            </a>
                        </div>
                    </div>

                    <div className='pr-4 bg-white m-2 rounded p-4'>
                        <h6>
                            <strong>Who's Following</strong>
                        </h6>
                        <div className='mt-6'>
                            <a href='#' className='flex items-center justify-between mb-4'>
                                <div className='flex items-center'>
                                    <img src="https://images.prothomalo.com/prothomalo-bangla%2F2022-10%2Ff717609c-4123-4215-a5a5-104aca30db48%2FPakistan_1.jpg?auto=format%2Ccompress&format=webp&w=640&dpr=1.0" alt="" className='rounded-full w-12 h-12' />

                                    <h6 className='ml-2 capitalize text-base'><strong>najmul hasan</strong></h6>
                                </div>
                                <p>Add</p>
                            </a>
                            <a href='#' className='flex items-center justify-between mb-4'>
                                <div className='flex items-center'>
                                    <img src="https://images.prothomalo.com/prothomalo-bangla%2F2022-10%2Ff717609c-4123-4215-a5a5-104aca30db48%2FPakistan_1.jpg?auto=format%2Ccompress&format=webp&w=640&dpr=1.0" alt="" className='rounded-full w-12 h-12' />

                                    <h6 className='ml-2 capitalize text-base'><strong>najmul hasan</strong></h6>
                                </div>
                                <p>Add</p>
                            </a>
                            <a href='#' className='flex items-center justify-between mb-4'>
                                <div className='flex items-center'>
                                    <img src="https://images.prothomalo.com/prothomalo-bangla%2F2022-10%2Ff717609c-4123-4215-a5a5-104aca30db48%2FPakistan_1.jpg?auto=format%2Ccompress&format=webp&w=640&dpr=1.0" alt="" className='rounded-full w-12 h-12' />

                                    <h6 className='ml-2 capitalize text-base'><strong>najmul hasan</strong></h6>
                                </div>
                                <p>Add</p>
                            </a>
                            <a href='#' className='flex items-center justify-between mb-4'>
                                <div className='flex items-center'>
                                    <img src="https://images.prothomalo.com/prothomalo-bangla%2F2022-10%2Ff717609c-4123-4215-a5a5-104aca30db48%2FPakistan_1.jpg?auto=format%2Ccompress&format=webp&w=640&dpr=1.0" alt="" className='rounded-full w-12 h-12' />

                                    <h6 className='ml-2 capitalize text-base'><strong>najmul hasan</strong></h6>
                                </div>
                                <p>Add</p>
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default HomePage
