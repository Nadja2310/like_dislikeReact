import React from 'react'
import Counter from "./Counter";

export default ({ id, title, author, body, like,dislike, totalRating, likeCounter,dislikeCounter }) => {
    return (
        <div>
            <h3>{title}</h3>
            <h4>{author}</h4>
            <h5>{body}</h5>
            <Counter
                id={id}
                like={like}
                dislike={dislike}
                totalRating={totalRating}
                likeCounter={likeCounter}
                dislikeCounter={dislikeCounter}
/>
        </div>
    )
}

