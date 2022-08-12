import React, { useEffect } from 'react'
import './Posts.scss'
import { dataPosts } from '../../../common/data-dummy/Posts'
import PostComponent from './post-component/PostComponent'
import { useDispatch, useSelector } from 'react-redux'
import { getTimelinePostAction } from '../../../actions/ post.action'
import { render } from 'react-dom'

const Posts = () => {
    
    const dispatch = useDispatch()
    const user = useSelector((state) => state.AUTH_REDUCER.auth)
    const posts = useSelector((state) => state.POST_REDUCER.posts)
    const timeline = useSelector((state) => state.TIMELINE_REDUCER.timeline.properties.data)
    

    useEffect(() => {
        dispatch(getTimelinePostAction(user.properties.data._id))
    }, [])

    let renderList = null;

    if (timeline !== null) {
        renderList = timeline.map((post, id) => {
            return <PostComponent key={id} data={post} id={id} />
        })
    }
    

    return (
        <div className="container-posts">
            {renderList}
          
        </div>
    )
}

export default Posts