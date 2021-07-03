import { Avatar, Button } from '@material-ui/core'
import React from 'react'
import { useState } from 'react'
import db from './firebase'
import './TweetBox.css'

function TweetBox() {
    const [tweetMessage, setTweetMessage] = useState('')
    const [tweetImage, setTweetImage] = useState('')


    const sendTweet = e => {
        e.preventDefault()

        db.collection('posts').add({
            displayName: 'user',
            username: 'user123',
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            avatar: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fyt3.ggpht.com%2F-TKS-FY_xG-0%2FAAAAAAAAAAI%2FAAAAAAAAAAA%2FzKwBY3TP7jM%2Fs900-c-k-no-mo-rj-c0xffffff%2Fphoto.jpg&f=1&nofb=1'
            
        })

        setTweetImage('')
        setTweetMessage('')
    }
    return (
        <div className='tweetBox'>
            <form >
                <div className="tweetBox__input">
                    <Avatar src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fyt3.ggpht.com%2F-TKS-FY_xG-0%2FAAAAAAAAAAI%2FAAAAAAAAAAA%2FzKwBY3TP7jM%2Fs900-c-k-no-mo-rj-c0xffffff%2Fphoto.jpg&f=1&nofb=1' />
                    <input onChange={e => setTweetMessage(e.target.value)} value={tweetMessage} placeholder="What's happening" type='text'/>
                    <input onChange={e => setTweetImage(e.target.value)} value={tweetImage} className='tweetBox__imageInput' placeholder="Enter image URL" type='text'/>
                </div>
                <Button onClick={sendTweet} type='submit' className='tweetBox__tweetButton'>Tweet</Button>
            </form>
            
        </div>
    )
}

export default TweetBox
