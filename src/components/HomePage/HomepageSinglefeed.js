import React from 'react'
import moment from 'moment';
import UserContext, { UserConsumer } from '@/contexts/Usercontext';
import { useContext } from 'react';
import { FaFileVideo, FaThumbsUp, FaShareAlt, FaRegCommentDots, Fa500Px, FaHome } from 'react-icons/fa'
const HomepageSinglefeed = ({ posts }) => {
    // console.log(posts);
    const user = useContext(UserContext);
    return (
        <>
            {
                posts.map((post, index) => {
                    return (
                        <div className='my-3 bg-white rounded p-4' key={index}>
                            <div className='flex items-center justify-between'>
                                <div className='flex items-center'>
                                    <a href='#'><img src="/user.jpg" alt="" className='rounded-full w-12 h-12' /></a>
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
                                <p className='py-2 text-justify text-base'>{post.body}</p>

                                {/* <img src="/user.jpg" alt="" className='object-contain rounded w-full ' /> */}
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
                            {/* <div className='flex pt-6'>
                                <div>
                                    <a href='#'>
                                        <img src="/avatar.jpg" alt="" className='object-contain rounded-full h-10 w-60' />
                                    </a>
                                </div>
                                <div className='ml-2 capitalize'>
                                    <a href='#'><h6 className='leading-none m-0'><strong>najmul hasan</strong></h6></a>
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
                                <img src="/user.jpg" alt="" className='rounded-full w-12 h-12' />
                                <textarea
                                    id="message"
                                    rows="4"
                                    className="ml-2 block p-2.5 h-16 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-emerald-700 focus:ring-emerald-700 focus:border-emerald-700 "
                                    placeholder="Write something here..."></textarea>
                                <div className='absolute right-2 top-10'>
                                    <FaFileVideo className='cursor-pointer' />
                                </div>
                            </div> */}
                        </div>
                    )
                })
            }
        </>
    )
}

export default HomepageSinglefeed
