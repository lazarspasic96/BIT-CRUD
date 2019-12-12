import React from 'react'
import Author from '../../models/Author';
import { authorService } from '../../../services/AuthorService';


class AuthorName extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            author: {}
        }

    }

    componentDidMount() {
        authorService.getAuthorName(this.props.userId)
            .then(author => {

                this.setState({ author: author })

            })

    }

    render() {
        return <> AuthorName: {this.state.author.name}</>
    }
}


export default AuthorName;