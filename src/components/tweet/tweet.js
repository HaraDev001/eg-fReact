import React from 'react';
import PropTypes from 'prop-types';

import '../../../node_modules/font-awesome/css/font-awesome.min.css';
import './tweet.css';
import moment from 'moment';//npm install moment --save


function Tweet({tweet}) {
    return(
        <div className='tweet mb-1 container'>
            <Avatar hash={tweet.gravatar}/>
            <div className="content">
                <NameWithHandle author={tweet.author}/>
                <Time>{tweet.timestamp}</Time>
                <Message>{tweet.message}</Message>
                <div className="buttons">
                    <ReplyButton/>
                    <RetweetButton>{tweet.retweets}</RetweetButton>
                    <LikeButton>{tweet.likes}</LikeButton>
                    <MoreOptionsButton/>
                </div>
            </div>
        </div>
        
    );
}

Tweet.propTypes = {
    tweet: PropTypes.shape({
        message: PropTypes.string,
        gravatar: PropTypes.string,
        likes: PropTypes.number,
        retweets: PropTypes.number,
        timestamp: PropTypes.string
    })
}

function Avatar({hash}) {
    return (
        <img src={require(`../../static/products/${hash}_2.jpg`).default} className="avatar" alt="avatar" />
    );
}
// Avatar.prototype =

function Message({children}) {
    return (
        <div className="message">{children}
        </div>
    );
}

function NameWithHandle({author}) {
    const {name, handle}=author;
    return (
        <span className="name-with-handle">
            <span className="name">{name}</span>
            <span className="handle">@{handle}</span>
        </span>
    );
}

const Time = ({children}) => {
    const timeString = moment(children).fromNow();
    return (
    <span className="time">{timeString}</span>
    );
}
    

const ReplyButton = () => (
    <i className="fa fa-reply reply-button"/>
);


function Count({ count }) {
    if(count > 0) {
        return (
            <span className="retweet-count">{count}</span>
        );
    } else {
        return null;
    }
}

const RetweetButton = ({children}) => (
    <span className="retweetbutton">
        <i className="fa fa-retweet"/>
        <Count count={children} />
    </span>
);

const LikeButton = ({children}) => {
    let count = children;
    return (    
    <span className="likebutton">
        <i className="fa fa-heart"/>
        <span className="like-count">
        {count ? count : null}
        </span>
    </span>
    );
}

const MoreOptionsButton = () => (
    <i className="fa fa-ellipsis-h more-options-button"/>
);



export default Tweet;