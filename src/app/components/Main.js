import React from 'react';
import { Switch, Route } from 'react-router-dom';
import FormPage from '../siginUp/FormPage';

class Main extends React.Component {




    render() {
        return <>

            <Switch>
                <Route exact path='/'>
                    <FormPage />
                </Route>

                <Route exact path='/about' />

            </Switch>

        </>



    }
}


export default Main