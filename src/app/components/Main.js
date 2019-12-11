import React from 'react';
import { Switch, Route } from 'react-router-dom';
import FormPage from '../siginUp/FormPage';
import AboutPage from './AboutPage/AboutPage';
import Checkbox from './Checkbox';
import Header from './Header/Header';

class Main extends React.Component {


    render() {
        return <> < Switch >
            <Route exact path='/' component={FormPage} />

            <Route exact path='/about' component={AboutPage} />

        </Switch>


        </>


    }

}



export default Main