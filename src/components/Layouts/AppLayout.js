import Head from 'next/head'
import Navnew from "@/components/Header/Navnew";

const AppLayout = ({ children }) => {
    return (
        <>
            <Head>
                <title>Laravel</title>
            </Head>
            <Navnew />
            {children}
        </>
    )
}

export default AppLayout
