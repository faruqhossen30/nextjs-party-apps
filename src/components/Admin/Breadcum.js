import Link from 'next/link'
import React from 'react'

const Breadcum = ({title, route}) => {
    return (
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item">
                    <Link href='/admin/dashboard'>
                        <a>Dashboard</a>
                    </Link>
                </li>
                <li className="breadcrumb-item">
                    <Link href={route}>
                        <a>{title}</a>
                    </Link>
                </li>
            </ol>
        </nav>
    )
}

export default Breadcum
