import React from 'react';
import { Switch, Route } from 'react-router-dom';
import FormPage from '../siginUp/FormPage';
import AboutPage from './AboutPage/AboutPage';
import Checkbox from './Checkbox';
import Header from './Header/Header';

class Main extends React.Component {


    render() {
        return <> < Switch >
            <Route exact path='/'>
                <FormPage />
            </Route>

            <Route exact path='/about' >
                <AboutPage />


            </Route>
        </Switch>


        </>


    }

}



export default Main