import Link from 'next/link'
import renderHTML from 'react-render-html';

const PaginationComponent = ({ links, data }) => {

    function pageNumber(pageURL) {
        let url = new URL(pageURL);
        let page = url.searchParams.get("page");
        return page;
    }

    return (
        <>
            <nav className="d-flex justify-items-center justify-content-between">

                <div className="d-none flex-sm-fill d-sm-flex align-items-sm-center justify-content-sm-between">

                    <div>
                        <ul className="pagination">
                            {
                                data.links.map((link, index) => {
                                    // console.log(link.url + '=' + typeof (link.url))
                                    return (
                                        <li className={`page-item ${link.active && 'active' || link.url == null && 'disabled'}`} key={index}>
                                            <Link href={`?page=${typeof link.url === 'string' && pageNumber(link.url)}`} >
                                                <a className={`page-link`} > {renderHTML(link.label)} </a>
                                            </Link>
                                        </li>
                                    )
                                })
                            }

                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default PaginationComponent
