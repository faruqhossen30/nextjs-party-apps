import React, { useEffect, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import Video from './Video'
import { FaImage, FaFileVideo, FaList } from 'react-icons/fa'

const thumbsContainer = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 16,
}

const thumb = {
    display: 'inline-flex',
    borderRadius: 2,
    border: '1px solid #000',
    marginBottom: 8,
    marginRight: 8,
    width: 100,
    height: 100,
    padding: 4,
    boxSizing: 'border-box',
}

const thumbInner = {
    display: 'flex',
    minWidth: 0,
    overflow: 'hidden',
}

const img = {
    display: 'block',
    width: 'auto',
    height: '100%',
}

const HomepageCreatepost = () => {
    const [files, setFiles] = useState([])
    const { getRootProps, getInputProps } = useDropzone({
        accept: {
            'image/*': [],
        },
        onDrop: acceptedFiles => {
            setFiles(
                acceptedFiles.map(file =>
                    Object.assign(file, {
                        preview: URL.createObjectURL(file),
                    }),
                ),
            )
        },
    })

    const thumbs = files.map(file => (
        <div style={thumb} key={file.name}>
            <div style={thumbInner}>
                <img
                    src={file.preview}
                    style={img}
                    onLoad={() => {
                        URL.revokeObjectURL(file.preview)
                    }}
                />
            </div>
        </div>
    ))

    useEffect(() => {
        return () => files.forEach(file => URL.revokeObjectURL(file.preview))
    }, [])

    return (
        <form>
            <div className="bg-white rounded p-4 pb-3">
                <h6>
                    <strong>Create New Post</strong>
                </h6>
                <div>
                    <textarea
                        id="message"
                        rows="3"
                        class="block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-emerald-700 focus:ring-emerald-500 focus:border-emerald-700 mb-2"
                        placeholder="Write something here..."></textarea>
                    <span>{thumbs}</span>
                </div>
                <div className="flex items-center justify-between  px-3">
                    <div {...getRootProps({ className: 'dropzone' })}>
                        <input {...getInputProps()} />
                        <div className="flex items-center space-x-1 cursor-pointer">
                            <FaImage />
                            <span>Photo</span>
                        </div>
                    </div>
                    <div className="flex items-center space-x-1 cursor-pointer">
                        {/* <FaFileVideo />
                        <span>Video</span> */}
                        <Video />
                    </div>
                    <div className="flex items-center space-x-1 cursor-pointer">
                        <FaList />
                        <span>Pull</span>
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="bg-emerald-700 text-white font-bold px-3 py-1 rounded-lg">
                            Post
                        </button>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default HomepageCreatepost
