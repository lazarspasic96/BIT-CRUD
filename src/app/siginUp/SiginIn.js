import React from 'react'
import Input from '../components/Input'
import Button from '../components/Button';
import { http } from '../../../src/services/HttpService'




class SiginIn extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            error: '',

        }
    }


    logindDataHandler = (event) => {
        event.preventDefault()
        const data = {
            email: this.state.email,
            password: this.state.password
        }

        http.post('auth/login', data)

            .then((res) => {
                localStorage.setItem('jwtToken', res.data.accessToken)
                this.props.history.push('/dashboard')
            })
            .catch((error) => {
                console.log(error.response.data);


                this.setState({ error: error.response.data.message })
            })
    }


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
                    <Input type={'email'} onChange={(event) => this.setState({ email: event.target.value, error: '' })} placeholder={'Email'} className={'inputImportant'} />
                    <Input type={'password'} onChange={(event) => this.setState({ password: event.target.value, error: '' })} placeholder={'Password'} className={'inputImportant'} />
                    <a href="#">Forgot your password?</a>
                    <span>{this.state.error}</span>
                    <Button className={'btnImportant'} onClick={this.logindDataHandler}>Sign In</Button>

                </form>
            </div>
        </>
    }
}




export default SiginIn;