import React from 'react';
import { Switch, Route } from 'react-router-dom';
import FormPage from '../siginUp/FormPage';
import Header from './Header/Header'


class Main extends React.Component {




    render() {
        return <>

            <Switch>
                <Route exact path='/'>
                    <FormPage />
                </Route>

                <Route exact path='/about' >

                </Route>

            </Switch>

        </>



    }
}


export default Main