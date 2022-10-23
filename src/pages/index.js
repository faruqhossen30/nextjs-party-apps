import Head from 'next/head'
import Link from 'next/link'
import { useAuth } from '@/hooks/auth'

import HomePage from "@/components/HomePage/HomePage";
import AppLayout from '@/components/Layouts/AppLayout';

export default function Home() {
    const { user } = useAuth({ middleware: 'guest' })
    return (
        <AppLayout>
            <Head>
                <title>Party Insider Application</title>
            </Head>
            <HomePage />
        </AppLayout>
    )
}
