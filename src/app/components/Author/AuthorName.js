import React from 'react'
import Author from '../../models/Author';
import { authorService } from '../../../services/AuthorService';


class AuthorName extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            authorname: null
        }

    }

    componentDidMount() {
        authorService.getAuthorName(this.props.userId)
            .then(author => {
                this.setState({ authorname: author })
            })

    }

    render() {
        return <> AuthorName: {this.props.name} </>
    }
}


export default AuthorName;