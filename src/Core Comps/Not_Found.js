import Button from '../Form Comps/Button'
import { Link } from 'react-router-dom'

const Not_Found = () => {
    return (
        <>
            <div className="flex justify-center place-items-center flex-col" role="alert" aria-live="assertive">
                <h1 className="w-4/5 h-desktop_nav text-center text-4xl py-11">404 Page Not Found</h1>
                <Link to="/"><Button label='Return Home' aria-label="Return to home page"/></Link>
            </div>
        </>
        
    )
}
export default Not_Found
