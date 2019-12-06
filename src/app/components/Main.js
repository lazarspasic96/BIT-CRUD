import React from 'react';
import { Switch, Route } from 'react-router-dom';
import FormPage from '../siginUp/FormPage';

class Main extends React.Component {




    render() {
        return <main>


            This is Main

                   <FormPage />
            <Switch>
                <Route exact path='/' />
                <Route exact path='/about' />

            </Switch>


        </main>


    }
}


export default Main