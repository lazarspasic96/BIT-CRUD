import React from 'react';
import { Switch, Route } from 'react-router-dom';
import FormPage from '../siginUp/FormPage';
import AboutPage from './AboutPage/AboutPage';
import Checkbox from './Checkbox';
import Header from './Header/Header';
import PostPage from './Post/PostPage'

class Main extends React.Component {


    render() {
        return <> < Switch >
            <Route exact path='/' component={FormPage} />

            <Route exact path='/about' component={AboutPage} />

<<<<<<< HEAD
            <Route exact path='/about' >
                <AboutPage />
            </Route>

            <Route exact path='/post-page'>
                <PostPage />
            </Route>
=======
>>>>>>> master
        </Switch>


        </>


    }

}



export default Main