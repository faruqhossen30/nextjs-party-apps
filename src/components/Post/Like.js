import axios from "@/lib/axios";
import { useState } from "react"
import { FaThumbsUp } from "react-icons/fa"

const Like = ({ likes_count, postid }) => {
    const [likes, setLikes] = useState(likes_count)

    const likeClickHandaller = () => {
        axios.post(`${process.env.NEXT_PUBLIC_API_URL}/user/post/like/`,
            {
                'post_id': postid,
                'user_id': 2
            })
            .then((res)=>{
                console.log(res);
                setLikes(res.data)
            });
    };



    return (
        <div>
            <span className='flex items-center text-gray-600 font-semibold cursor-pointer' onClick={likeClickHandaller}>  <FaThumbsUp /> Like - {likes}</span>
        </div>
    )
}

export default Like
