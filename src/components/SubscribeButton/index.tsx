import { useSession,signIn,signOut } from 'next-auth/react'
import styles from './styles.module.scss'

interface SubscribeButtonProps {
    priceId : string;
}

//getServerSideProps (SSR)
//getStaticProps (SSG)
//API routes

export function SubscribeButton( { priceId } : SubscribeButtonProps){

    const { data : session } = useSession()

    function handleSubscriibe( ) {
        if(!session){
            signIn('github')
            return;
        }

        //criação da checkout session
        
    }

    return(
        <button
            type="button"
            className={styles.subscribeButton}
        >
            Subscribe Now!
        </button>
    )
}