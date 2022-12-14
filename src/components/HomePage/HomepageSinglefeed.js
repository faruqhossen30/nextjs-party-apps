import React from 'react'
import moment from 'moment';
import UserContext, { UserConsumer } from '@/contexts/Usercontext';
import { useContext } from 'react';
import { FaFileVideo, FaThumbsUp, FaShareAlt, FaRegCommentDots, Fa500Px, FaHome } from 'react-icons/fa'
import Like from '../Post/Like';
const HomepageSinglefeed = ({ posts }) => {
    // console.log(posts);
    const user = useContext(UserContext);
    return (
        <>
            {
                posts.map((post, index) => {
                    return (
                        <div className='my-3 bg-white rounded' key={index}>
                            <div className='flex items-center justify-between p-3'>
                                <div className='flex items-center'>
                                    {/* <a href='#'><img src="/user.jpg" alt="" className='rounded-full w-12 h-12' /></a> */}
                                    <a href='#'><img src={post.user.avatar ? `${process.env.NEXT_PUBLIC_BACKEND_URL}/${post.user.avatar}` : 'profile.jpg' } alt="" className='rounded-full w-12 h-12' /></a>
                                    <div className='ml-2 capitalize'>
                                        <a href='#'>
                                            <h6 className='leading-none p-0 m-0'> {post.user.name}</h6>
                                        </a>
                                        <span className='text-sm text-gray-600'>{moment(post.created_at).fromNow()}</span>
                                    </div>
                                </div>
                                <div>
                                    ...
                                </div>
                            </div>
                            <div>
                                <p className='py-2 text-justify text-base p-3'>{post.body}</p>
                                {post.photo &&
                                     <img src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/uploads/photos/post/${post.photo.name}`} alt="one" className='object-contain w-full ' />
                                }

                                {/* <img src="/user.jpg" alt="" className='object-contain rounded w-full ' /> */}
                            </div>
                            <div className='mt-4'>
                                <hr />
                                <div className='flex justify-between px-2 py-3'>
                                    <Like likes_count={post.likes_count} postid={post.id} />
                                    <div>
                                        <span className='flex items-center'>  <a href='#' className='mr-1'><FaRegCommentDots /> </a>comments | 1200</span>
                                    </div>
                                    <div>
                                        <div className='flex items-center'> <a href='#' className='mr-1'> <FaShareAlt /></a> share | 1200</div>
                                    </div>
                                </div>
                                <hr />
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}

export default HomepageSinglefeed
