import React from 'react';
import Tweet from './tweet';


var tweets = [
    {
        id:0,
        message: "Something about cats. Hello My name is Viktor.",
        // message: 2,
        gravatar: "876661122392077",
        author: {
            handle: "catperson",
            name: "IAMA Cat Person"
        },
        likes: 5,
        retweets: 2,
        timestamp: "2021-07-30 21:24:37"
    },

    {
        id:1,
        message: "Something about cats. Hello My name is Viktor.",
        gravatar: "876661122392077",
        author: {
            handle: "catperson",
            name: "IAMA Cat Person"
        },
        likes: 5,
        retweets: 2,
        timestamp: "2021-07-30 21:24:37"
    },

    {
        id:2,
        message: "Something about cats. Hello My name is Viktor.",
        gravatar: "876661122392077",
        author: {
            handle: "catperson",
            name: "IAMA Cat Person"
        },
        likes: 5,
        retweets: 2,
        timestamp: "2021-07-30 21:24:37"
    },

    {
        id:3,
        message: "Something about cats. Hello My name is Viktor.",
        gravatar: "876661122392077",
        author: {
            handle: "catperson",
            name: "IAMA Cat Person"
        },
        likes: 5,
        retweets: 2,
        timestamp: "2021-07-30 21:24:37"
    }
];

function TestTweet(){

    return(
        <div className='mt-5'>
             {tweets.map(p=><Tweet tweet={p} key={p.id} />)}
        </div>
    );
}
export default TestTweet;