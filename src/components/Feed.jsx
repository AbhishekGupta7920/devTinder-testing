import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { BASE_URL } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addFeed } from '../utils/feedSlice'
import UserCard from './UserCard'

const Feed = () => {
    const dispatch = useDispatch();
    const feed = useSelector((store) => store.feed);

   const getFeed = async()=>{
      if(feed) return ;

      try{
        const res = await axios.get(BASE_URL + "/feed" , {withCredentials : true});
        // console.log(res);
        // console.log(res.data.data);
        dispatch(addFeed(res?.data?.data));
      }
      catch(err){
        console.log(err);
      }
   }

   useEffect(()=>{
    getFeed();
   }, [])

   
   if(!feed) return ;
   if(feed.length === 0) return  <div> No more new User Left</div>

  return (
    <div className='flex justify-center mt-10'>
      <UserCard user={feed[0]}/>
    </div>
  )
}

export default Feed
