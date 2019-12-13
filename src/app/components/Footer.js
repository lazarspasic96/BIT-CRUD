import React from 'react';
import Button from '../components/Button';
import { Link, withRouter } from 'react-router-dom';




class Footer extends React.Component {




    render() {
        const path = this.props.location.pathname

        if (localStorage.getItem('jwtToken')) {
            return <footer className="page-footer font-small fixed-bottom flex-container" id='bg-color-footer'>
                <div> <span className='span-copyright'>Copyright: © {new Date().getFullYear()}</span></div>

                <div className='flex-container'><Button onClick={() => {
                    localStorage.removeItem('jwtToken')
                    this.props.history.push('/')
                }}>Sign Out</Button></div>

            </footer >
        }

        else {

            return <footer className="page-footer font-small fixed-bottom flex-container" id='bg-color-footer'>
                <div><span> Copyright: © {new Date().getFullYear()}</span></div>
                <div><Link to='/form-page'><Button type={'button'} className={'btn btn-primary sign-in'} >Sign In</Button></Link></div>
            </footer >




        }







    }
}


export default withRouter(Footer)