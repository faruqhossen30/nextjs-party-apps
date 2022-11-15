import Axios from 'axios'
import Head from 'next/head'
import Link from 'next/link'
import { useAuth } from '@/hooks/auth'
import Router, { useRouter } from 'next/router'

import HomePage from '@/components/HomePage/HomePage'
import AppLayout from '@/components/Layouts/AppLayout'
import { useContext } from 'react'
import UserContext from '@/contexts/Usercontext'

export default function Home({posts}) {
    // const { user } = useAuth({ middleware: 'guest' })
    const user = useContext(UserContext)
    const router = useRouter()
    return (
        <>
            {user ? (
                <AppLayout>
                    <Head>
                        <title>Party Insider</title>
                    </Head>
                    <HomePage posts={posts} />
                </AppLayout>
            ) : (
                <>some</>
            )}
        </>
    )
}


export async function getServerSideProps({ query }) {
    // console.log(query.page)
    let page = null;
    page = query.page;
    // Fetch data from external API
    // let page = Number(query.page) || 1;
    if (page) {
        const res = await Axios.get(`${process.env.NEXT_PUBLIC_API_URL}/posts?page=${page}`)
        const posts = res.data.data
        const links = res.data.links
        // Pass data to the page via props
        return { props: { posts, links } }
    } else {
        const res = await Axios.get(`${process.env.NEXT_PUBLIC_API_URL}/posts`)
        const posts = res.data.data
        const links = res.data.links
        // Pass data to the page via props
        // console.log(posts)
        return { props: { posts, links } }
    }

}
