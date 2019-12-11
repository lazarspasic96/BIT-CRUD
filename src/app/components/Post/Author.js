import React from 'react';
import { http } from '../../../services/HttpService';

class Author extends React.Component {
    constructor(props) {
        super(props);


        this.state = {
            author: []
        }
    };

    componentDidMount() {
        http.get('/users')
            .then((data) => {
                this.setState({ author: data.data })

            })
    }
    render() {

        return (
            <main className="author-main">
                <h3>Author</h3>
                <div className="row">

                </div>
            </main>
        )
    }
}




export default Author