import React from 'react'

export default ({id, like, dislike, totalRating,likeCounter,dislikeCounter}) => {
    return (
        <div>
            <button onClick={() => likeCounter(id)}>like {like}</button>
        
            <button onClick={() => dislikeCounter(id)}>dislike {dislike}</button>
            <span>Total rating {totalRating}</span>
        </div>
    )
}