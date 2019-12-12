import React from 'react';
import { http } from './HttpService'
import Author from '../app/models/Author'


class AuthorService {

    getAuthorName(userId) {
        return http.get('http://crud-api.hypetech.xyz/v1/users/' + userId)
            .then(res => {
                if (res.data.firstName) {
                    return new Author(res.data)
                }

                else {
                    return new Author(res.data)
                }


            })
    }
}


export const authorService = new AuthorService()