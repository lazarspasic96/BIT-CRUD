import React from 'react';
import Checkbox from '../components/Checkbox';
import Input from '../components/Input';
import Button from '../components/Button';
import { http } from '../../../src/services/HttpService'



class SiginUp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            password: '',
            error: '',


        }

    }

    signInHandler = () => {
        const data = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password

        }

        http.post('auth/register', data)
            .then(() => {


                this.props.history.push('/about')


            })
            .catch((error) => {

                this.setState({ error: error.response.data.message })
            })
    }



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
                    <Input type={'text'} placeholder={'Name'} className={'inputImportant'} onChange={(event) => this.setState({ name: event.target.value, error: '' })} />
                    <Input type={'email'} placeholder={'Email'} className={'inputImportant'} onChange={(event) => this.setState({ email: event.target.value, error: '' })} />
                    <Input type={'password'} placeholder={'Password'} className={'inputImportant'} onChange={(event) => this.setState({ password: event.target.value, error: '' })} />
                    <span>{this.state.error}</span>
                    <Button className={'btnImportant'} onClick={this.signInHandler}>Sign Up</Button>

                </form>
            </div>


        </>
    }
}

export default SiginUp;


