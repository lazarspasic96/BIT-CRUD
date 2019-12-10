import React from 'react';
import pic from './img/picture1.jpg'
import './card.css';

class PostCard extends React.Component {
  render() {
    return (
      <div className="card-container">
        <span className="card-title">All Posts</span>
        <div className="row">

          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-3">

            <div className="card">
              <div className="card-image">
                <div>

                  <img src={pic} alt="picture1" />

                </div>
                <div className="card-content">
                  <span className="post-title">{this.props.title}</span> {/* treba da povucemo sa servisa post title*/}
                  <p class="card-text">I am a very simple card. I am good at containing small bits of information.
                I am convenient because I require little markup to use effectively.</p>
                </div>



              </div>

            </div>
          </div>

          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-3">

            <div className="card">
              <div className="card-image">
                <div>

                  <img src={pic} alt="picture1" />

                </div>
                <div className="card-content">
                  <span className="post-title">{this.props.title}</span> {/* treba da povucemo sa servisa post title*/}
                  <p class="card-text">I am a very simple card. I am good at containing small bits of information.
    I am convenient because I require little markup to use effectively.</p>
                </div>



              </div>

            </div>
          </div>








          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-3">

            <div className="card">
              <div className="card-image">
                <div>

                  <img src={pic} alt="picture1" />

                </div>
                <div className="card-content">
                  <span className="post-title">{this.props.title}</span> {/* treba da povucemo sa servisa post title*/}
                  <p class="card-text">I am a very simple card. I am good at containing small bits of information.
    I am convenient because I require little markup to use effectively.</p>
                </div>



              </div>

            </div>
          </div>


        </div >



      </div>
    )
  }
}

export default PostCard