class commentList {
    constructor(commentList) {
        this.commentList = commentList || []
    }

    add(comment) {
        this.commentList.push(comment)
    }

}