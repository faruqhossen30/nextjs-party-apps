import UserContext from '@/contexts/Usercontext';
import React, { useContext } from 'react'

const ProfileHead = () => {
    const user = useContext(UserContext);
    return (
        <div>
            <div className="relative">
                <img
                    class="w-full h-48 object-cover rounded"
                    src="https://images.pexels.com/photos/1274260/pexels-photo-1274260.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                    alt="Flower and sky"
                />

                <div className="ml-4 absolute -bottom-32 flex items-center">
                    <img src="/user.jpg" alt="" className="rounded w-48 h-48" />

                    <div className="ml-10 pt-10">
                        <h6 className="capitalize text-2xl">
                            <strong>{user.name}</strong>
                        </h6>
                        <h6>Jessore</h6>
                    </div>
                </div>
            </div>

            <div className="flex items-center relative md:justify-end md:-top-28 md:pr-2 pl-5 pt-36">
                <div className="text-center pr-6">
                    <h2 className="text-3xl m-0">
                        <strong>22323</strong>
                    </h2>
                    <span>Likes</span>
                </div>
                <div className="text-center pr-6">
                    <h2 className="text-3xl m-0">
                        <strong>22323</strong>
                    </h2>
                    <span>Likes</span>
                </div>
                <div className="text-center">
                    <h2 className="text-3xl m-0">
                        <strong>22323</strong>
                    </h2>
                    <span>Likes</span>
                </div>
            </div>
        </div>
    )
}

export default ProfileHead
