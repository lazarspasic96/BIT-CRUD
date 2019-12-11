class Comment {
    constructor(commentData) {
        this.id = commentData.id;
        this.postId = commentData.postId;
        this.isPublic = commentData.isPublic
        this.body = commentData.body
    }
}

export default Comment