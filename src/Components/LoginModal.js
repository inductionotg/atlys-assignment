import LoginForm from "./LoginForm"
import './LoginModal.css'
const LoginModal=()=>{
    return (
        <div className="modal-container">
            <div className="login-modal">
                <LoginForm/>
            </div>
            
        </div>
    )
}

export default LoginModal