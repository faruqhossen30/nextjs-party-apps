import axios from "axios";
import { FaImage, FaFileVideo, FaList } from 'react-icons/fa'

const HomepageCreatepost = () => {


    function createPost(e) {
        e.preventDefault()
        let url = `${process.env.NEXT_PUBLIC_API_URL}/post`
        console.log(url);
        const csrf = () => axios.get('/sanctum/csrf-cookie')
        console.log(csrf);
        axios
          .post(`${process.env.NEXT_PUBLIC_API_URL}/post`, {
            body: "This is a new post.",
            user_id: 1,
            _token: csrf()
          })
          .then((response) => {
            setPost(response.data);
          });
      }



    return (
        <div>
            <form method="POST" onSubmit={createPost} className='bg-white rounded p-4'>
                <h6>
                    <strong>Create New Post</strong>
                </h6>
                <div>
                    <textarea
                        name="body"
                        id="message"
                        rows="4"
                        className="block p-2.5 w-full text-sm text-gray-900 border-emerald-700 rounded-lg border border-emerald-700 focus:ring-emerald-500 focus:border-emerald-700"
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
                            // onClick={createPost}
                            type="submit"
                            className="bg-emerald-700 text-white font-bold px-3 py-1 rounded-lg">
                            Post
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default HomepageCreatepost
