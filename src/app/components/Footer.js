import React from 'react';
import Button from '../components/Button';
import { Link, withRouter } from 'react-router-dom';




class Footer extends React.Component {




    render() {
        const path = this.props.location.pathname

        if (path === '/dashboard') {
            return <footer className="page-footer font-small fixed-bottom  " id='bg-color-footer'>
                <span> Copyright: © {new Date().getFullYear()}</span>
                <Button className={'sign-in'} onClick={() => {
                    localStorage.removeItem('jwtToken')
                    this.props.history.push('/')
                }}>Sign Out</Button>
            </footer >
        }

        else {

            return <footer className="page-footer font-small fixed-bottom " id='bg-color-footer'>
                <span> Copyright: © {new Date().getFullYear()}</span>
                <Link to='/form-page'><Button className={'sign-out'} >Sign In</Button></Link>
            </footer >




        }







    }
}


export default withRouter(Footer)