import React from 'react'
import Comment from './Comment'
export default ({ comments, likeCounter, dislikeCounter }) => {
    return (
        <ul>
            {comments.map(comm => (
                <li key={comm.id}>
                    <Comment
                        id={comm.id}
                        title={comm.title}
                        author={comm.author}
                        body={comm.body}
                        like={comm.like}
                        dislike={comm.dislike}
                        totalRating={comm.totalRating}
                        likeCounter={likeCounter}
                        dislikeCounter={dislikeCounter}
                    />
                </li>
            ))}
        </ul>
    )
}