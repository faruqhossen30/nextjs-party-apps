import UserContext from '@/contexts/Usercontext'
import { useAuth } from '@/hooks/auth'
import 'tailwindcss/tailwind.css'
import '../styles/admin.css'
import '../styles/front.css'


const App = ({ Component, pageProps }) => {
    const { user } = useAuth({ middleware: 'guest' })

    return(
        <UserContext.Provider value={user} >
            <Component {...pageProps} />
        </UserContext.Provider>
    )
}

export default App
