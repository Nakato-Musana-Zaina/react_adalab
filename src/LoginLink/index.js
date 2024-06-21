import'./index.css';
import{Link} from 'react-router-dom'

function LoginLink(){
    return(
        <div className='loginlinking'>
            <nav>
                
                <h1> Welcome to My application: Please Click to login</h1>
                <button type='submit'> <Link  to= "/login">Login </Link></button>
            </nav>
        </div>
    )
}
export default LoginLink