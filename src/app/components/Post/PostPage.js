import React from 'react';
import { Route } from 'react-router-dom';
import PostCard from './PostCard';
import './post.css';
import { http } from '../../../services/HttpService';



class PostPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: []

        }
    }

    componentDidMount() {
        http.get('/posts')
            .then((res) => {
                this.setState({ posts: res.data })

            })
    }


    render() {
        return (
            <main className="post-main">
                <h4>All Posts</h4>
                <div className="row">
                    {this.state.posts.map(post => <PostCard post={post} />)}

                </div>



            </main>
        )
    }
}

export default PostPage