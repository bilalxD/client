import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect,useState } from 'react';
import axios from 'axios';

function ViewPost() {
    let { id } = useParams();
    const [viewPost, setviewPost] = useState({});
    useEffect(() =>{
        axios.get(`http://localhost:3001/viewpost/${ id }`).then((response)=>{
            setviewPost(response.data);
        })
    },)
  return (
    <div className='postPage'>
        <div className='leftSide'>
            <div className="post" id="individual">
                <div className='title'>{ viewPost.title }</div>
                <div className='postText'>{ viewPost.postText }</div>
                <div className='footer'>{ viewPost.username }</div>
            </div>
        </div>
        <div className='rightSide'>
            Comment Section
        </div>
    </div>
  )
}

export default ViewPost