import Link from 'next/link'
import React from 'react'
import Pagination from 'react-bootstrap/Pagination';

const PaginationComponent = ({ links }) => {
    return (
        <>
            <Pagination>
            {
                links.map((link, index) => {
                    return (
                        <Pagination.Item key={index} active={link.active} href={link.url} disabled={link.active} >{link.label}</Pagination.Item>
                    )
                })
            }
            </Pagination>

        </>
    )
}

export default PaginationComponent
