import Head from 'next/head'
import Link from 'next/link'
import { useAuth } from '@/hooks/auth'
import Router, { useRouter } from 'next/router'

import HomePage from '@/components/HomePage/HomePage'
import AppLayout from '@/components/Layouts/AppLayout'

export default function Home() {
    const { user } = useAuth({ middleware: 'guest' })
    const router = useRouter()
    return (
        <>
            {user ? (
                <AppLayout>
                    <Head>
                        <title>Party Insider</title>
                    </Head>
                    <HomePage />
                </AppLayout>
            ) : (
                <>some</>
            )}
        </>
    )
}
