class Author {
    constructor(authorData) {
        this.id = authorData.id;
        this.email = authorData.email;
        this.name = authorData.firstName || authorData.name.first
    }
}


export default Author;