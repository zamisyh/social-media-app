import React from 'react'
import './Posts.scss'
import { dataPosts } from '../../../common/data-dummy/Posts'
import PostComponent from './post-component/PostComponent'

const Posts = () => {
    
    const renderList = dataPosts.map((post, id) => {
        return <PostComponent data={post} id={id} />
    })

    return (
        <div className="container-posts">
            {Object.keys(renderList).length === 0 ? (
                <div>Loading ...</div>
            ): (
                renderList
            )}
        </div>
    )
}

export default Posts