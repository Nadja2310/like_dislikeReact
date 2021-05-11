import React, { useState } from "react";
import CommentsList from "./CommentsList";

const getCommentsList = () => {
    return [
        {id:1, title: 'alias odio sit', author:"user1",body: "est natus enim nihil est dolore", like: 1,dislike:2, totalRating:0 },
        {id:2, title: 'et omnis dolorem', author:"user2",body: "est natus enim nihil est dolore", like: 20,dislike:10,totalRating:0},
        {id:3, title: 'omnis dolorem', author:"user3",body: "est natus enim nihil est dolore", like: 0,dislike:0,totalRating:0 },
        {id:4,  title: 'provident id voluptas', author:"user4",body: "provident id voluptas", like: 6,dislike:1,totalRating:0 },
    ]
}

export default () => {
    const [comments, setComments] = useState(getCommentsList())

    const likeCounter= (id) => {
       const arr =[...comments]
        const idx=arr.findIndex(p=>p.id===id)
        if(idx!==-1) {
         arr[idx].like++
         arr[idx].totalRating=arr[idx].like-arr[idx].dislike;
         console.log(arr[idx].like)
        }
        setComments(arr) 
    }
    const dislikeCounter = (id) => {
        const arr =[...comments]
        const idx=arr.findIndex(p=>p.id===id)
        if(idx!==-1) {
         arr[idx].dislike++
         arr[idx].totalRating=arr[idx].like-arr[idx].dislike;
        }
        setComments(arr) 
    }
   

    return (
        <div>
            <CommentsList
                comments={comments}
                likeCounter={likeCounter}
                dislikeCounter={dislikeCounter}
            />
        </div>)
}
