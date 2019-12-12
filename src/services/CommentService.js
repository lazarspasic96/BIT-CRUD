import React from 'react';
import { http } from './HttpService'
import Comment from '../app/models/Comment'


class CommentService {

    getComents(postId) {
        return http.get('http://crud-api.hypetech.xyz/v1/posts/' + postId + '/comments')
            .then(res => res.data.map((comment) => {

                return new Comment(comment)
            }))
    }
}


export const commService = new CommentService()