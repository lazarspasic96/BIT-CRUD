import React from 'react';
import { Route } from 'react-router-dom';
import PostCard from './PostCard';


class PostPage extends React.Component {
    render() {
        return (
            <Route>
                <PostCard />

            </Route>
        )
    }
}

export default PostPage