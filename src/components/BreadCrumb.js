import React from 'react'

const Breadcrumb = (props) => {
    return (
        <div>
            <div className="bg-gradient-to-r from-cyan-500 to-blue-500 m-2 p-10 sm:p-16 rounded ">
                <h2 className="text-white font-bold uppercase text-xl sm:text-2xl md:text-3xl">
                    {props.title}
                </h2>
            </div>
        </div>
    )
}

export default Breadcrumb