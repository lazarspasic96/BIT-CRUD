import React from 'react';


class SiginUp extends React.Component {



    render() {

        return <>
            <div class="form-container sign-up-container">
                <form action="#">
                    <h1>Create Account</h1>
                    <div class="social-container">
                        <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
                        <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
                        <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
                    </div>
                    <span>or use your email for registration</span>
                    <input type="text" placeholder="Name" className='inputImportant' />
                    <input type="email" placeholder="Email" className='inputImportant' />
                    <input type="password" placeholder="Password" className='inputImportant' />
                    <button onClick={this.props.handleClick} className="btnImportant" >Sign Up</button>
                </form>
            </div>


        </>
    }
}

export default SiginUp