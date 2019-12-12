import React from 'react';
import pic from './img/picture1.jpg'
import './card.css';
import './post.css'
import CommentTotal from '../CommentDisplay/CommentTotal';
import AuthorName from '../Author/AuthorName'



class PostCard extends React.Component {


  render() {
    const post = this.props.post;

    return (

      <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-4">
        <div className="card-container">



          {/*      <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-3"> */}

          <div className="card ">
            <div className="card-image">
              <div>

                <img src={pic} alt="picture1" />

              </div>
              <div className="card-content card-background ">
                <span className="post-title">{post.title}</span>
                <p className="subtitle-text">{post.subtitle}</p>
                <p class="card-text"> {post.text}</p>
                <hr />
                <CommentTotal postId={post.id} />
                <AuthorName userId={post.userId} />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default PostCard;