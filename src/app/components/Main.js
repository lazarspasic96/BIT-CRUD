import React from 'react';
import { Switch, Route } from 'react-router-dom';

class Main extends React.Component {




    render() {
        return <>
            <Switch>
                <Route exact path='/' />

            </Switch>
        </>
    }
}


export default Main