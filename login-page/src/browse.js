import React, { useEffect, useState } from 'react';
import axios from 'axios'
import Post from './post'
import './Browser.css'
export default function Browser(props) {
    const [baseUrl] = useState('https://backend-how-to.herokuapp.com/api/posts')
    const [testKey] = useState('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImNsYXl0b24iLCJzdWJqZWN0IjoyLCJpYXQiOjE2MDA5ODU4NzgsImV4cCI6MTYwMTA3MjI3OH0.jV8foiL5sp2j4cn1wXn6HRbJidpnk-E75pE9kY3fj0k')
    const [posts, setPost] = useState([])
    useEffect(() => {
        axios.get(baseUrl, {
            headers: {
                'Authorization':testKey,
            }
        })
          .then((result) => {
            console.log(result.data)
            setPost(result.data)
          })
          .catch((err) => {
            console.log(`oopsie: ${err}`)
          })
          // eslint-disable-next-line 
      }, [])
    return (
    <div>
    <div className='contentView' >
    {
        posts.map((post, index) => (
          <Post key={`post-${index}`} post={post} />
        ))
      }
    </div>
    </div>
    )
}