import React from 'react';
import { Switch, Route } from 'react-router-dom';

class Main extends React.Component {




    render() {
        return <>

            This is Main
            <Switch>
                <Route exact path='/' />
                <Route exact path='/about' />

            </Switch>
        </>
    }
}


export default Main