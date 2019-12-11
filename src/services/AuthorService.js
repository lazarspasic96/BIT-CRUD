import React from 'react';
import { http } from './HttpService'
import Author from '../app/models/Author'


class AuthorService {

    getAuthorName(userId) {
        return http.get('http://crud-api.hypetech.xyz/v1/users/' + userId)
            .then(res => res.data.map((author) => {
                return new Author(author)
            }))
    }
}


export const authorService = new AuthorService()