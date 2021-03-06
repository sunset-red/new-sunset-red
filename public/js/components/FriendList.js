import React from 'react';

export default class FriendList extends React.Component {
  render() {
    const friends = this.props.friends.map((ele, index)=> {
      return <div key={index} className="center-block">
        <div className="col-lg-3 col-lg-offet-3">
          <div className="thumbnail">
            <img src={`../../images/friends-pictures/${ele.imgName}`} alt="..."/>
            <div className="caption">
              <h3>{ele.name}</h3>
              <p>{ele.sex}&nbsp;{ele.city}&nbsp;{ele.hobby}</p>
              <p className="btn btn-primary" role="button" onClick={this.props.onFollowFriends.bind(this,ele.id)}>关注</p>
            </div>
          </div>
        </div>
      </div>;
    });
    return <div className="raw">
      {this.props.promptMessage}{friends}
    </div>;
  }
}