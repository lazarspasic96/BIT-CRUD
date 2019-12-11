import React from 'react';
import { commService } from '../../../services/CommentService'



class CommentTotal extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            comments: []
        }

    }


    componentDidMount() {
        commService.getComents(this.props.postId)
            .then(comments => {
                this.setState({ comments: comments })
            })
    }


    render() {
        return <>  Comments: {this.state.comments.length} </>
    }

}

export default CommentTotal