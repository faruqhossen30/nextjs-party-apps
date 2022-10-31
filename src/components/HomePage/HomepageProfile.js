import React from 'react'

import { FaHeart } from 'react-icons/fa'

const HomepageProfile = () => {
    return (
        <div>
            <div className='p-2 bg-white m-2 rounded'>

                <div className='relative text-center'>
                    <img className="w-full h-20 object-cover" src="https://images.pexels.com/photos/1274260/pexels-photo-1274260.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="Flower and sky" />

                    <div className='relative -top-8'>
                        <img src="/user.jpg" alt="" className='rounded w-24 h-24 relative l-0 r-0 m-auto' />

                        <div className='pt-3'>
                            <h6 className='capitalize text-lg leading-none m-0'><strong>najmul hasan</strong></h6>
                            <h6 className='m-0'>Jessore</h6>
                        </div>
                    </div>
                </div>

                <div className='relative flex items-center justify-center space-x-4'>
                    <div className='text-center border-emerald-700'>
                        <h6 className='m-0'><strong>22323</strong></h6>
                        <span className='muted'>Likes</span>
                    </div>
                    <div className='text-center border-emerald-700'>
                        <h6 className='m-0'><strong>22323</strong></h6>
                        <span className='muted'>Likes</span>
                    </div>
                    <div className='text-center'>
                        <h6 className='m-0'><strong>22323</strong></h6>
                        <span className='muted'>Likes</span>
                    </div>
                </div>

                <div className='flex items-center justify-center py-4'>
                    <FaHeart />
                    <h6 className='m-0 pl-1'> New Likes This Week</h6>
                </div>

                <div className='text-center'>
                    <div className="flex -space-x-2 justify-center overflow-hidden">
                        <img className="inline-block h-12 w-12 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                        <img className="inline-block h-12 w-12 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                        <img className="inline-block h-12 w-12 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80" alt="" />
                    </div>
                    <button className='py-2 mt-2 px-4 bg-emerald-700 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75'>View Profile</button>
                </div>

            </div>
        </div>
    )
}

export default HomepageProfile
