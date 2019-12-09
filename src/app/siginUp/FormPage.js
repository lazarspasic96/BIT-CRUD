import React from "react";
import './Style.css'
/* import './SiginUpInteractive.js' */

const FormPage = () => {
    return (
        <main className='FormLandingPage'>
            {/*    <div class="imgDiv">
                <img src="https://jekyllrb.com/img/octojekyll.png" alt="" />
                <img src="https://digio.com.au/wp-content/uploads/2018/04/react-native-logo.png" alt="" />



            </div> */}
            <div class="containerForm" id="container">
                <div class="form-container sign-up-container">
                    <form action="#">
                        <h1>Create Account</h1>
                        <div class="social-container">
                            <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
                            <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
                            <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
                        </div>
                        <span>or use your email for registration</span>
                        <input type="text" placeholder="Name" className='inputForm' />
                        <input type="email" placeholder="Email" className='inputForm' />
                        <input type="password" placeholder="Password" className='inputForm' />
                        <button className='btnForm'>Sign Up</button>
                    </form>
                </div>
                <div class="form-container sign-in-container">
                    <form action="#">
                        <h1>Sign in</h1>
                        <div class="social-container">
                            <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
                            <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
                            <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
                        </div>
                        <span>or use your account</span>
                        <input type="email" placeholder="Email" className='inputForm' />
                        <input type="password" placeholder="Password" className='inputForm' />
                        <a href="#">Forgot your password?</a>
                        <button className='btnForm1'>Sign In</button>
                    </form>
                </div>
                <div class="overlay-container">
                    <div class="overlay">
                        <div class="overlay-panel overlay-left">
                            <h1>Welcome Back!</h1>
                            <p>To keep connected with us please login with your personal info</p>
                            <button className="ghost bntForm" id="signIn">Sign In</button>
                        </div>
                        <div class="overlay-panel overlay-right">
                            <h1>Hello, Friend!</h1>
                            <p>Enter your personal details and start journey with us</p>
                            <button class="ghost bntForm" id="signUp">Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </main >



    );
};

export default FormPage;