import Head from 'next/head'

const GuestLayout = ({ children }) => {
    return (
        <div>
            <Head>
                <title>Laravel Login page </title>
            </Head>
            {children}
        </div>
    )
}

export default GuestLayout
