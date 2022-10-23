import Head from 'next/head'
import Link from 'next/link'
import { useAuth } from '@/hooks/auth'
import Navnew from "@/components/Header/Navnew";
import HomePage from "@/components/HomePage/HomePage";

export default function Home() {
    const { user } = useAuth({ middleware: 'guest' })

    return (
        <>
            <Head>
                <title>Party Insider</title>
            </Head>

            <Navnew />
            <HomePage />
        </>
    )
}
