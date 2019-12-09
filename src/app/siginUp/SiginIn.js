import React from 'react'




class SiginIn extends React.Component {




    render() {
        return <>
            <div class="form-container sign-in-container">
                <form action="#">
                    <h1>Sign in</h1>
                    <div class="social-container">
                        <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
                        <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
                        <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
                    </div>
                    <span>or use your account</span>
                    <input type="email" placeholder="Email" className='inputImportant' />
                    <input type="password" placeholder="Password" className='inputImportant' />
                    <a href="#">Forgot your password?</a>
                    <button className="btnImportant" >Sign In</button>
                </form>
            </div>
        </>
    }
}




export default SiginIn;