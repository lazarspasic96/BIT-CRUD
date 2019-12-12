import React from 'react';
import { Switch, Route } from 'react-router-dom';
import FormPage from '../siginUp/FormPage';
import AboutPage from './AboutPage/AboutPage';
import Checkbox from './Checkbox';
import Header from './Header/Header';
import PostPage from './Post/PostPage'


class Main extends React.Component {


    render() {
        return <>
            <Switch>
                <Route exact path='/form-page' component={FormPage} />
                <Route exact path='/about' component={AboutPage} />
                <Route exact path='/' component={PostPage} />
            </Switch>

        </>


    }

}



export default Main