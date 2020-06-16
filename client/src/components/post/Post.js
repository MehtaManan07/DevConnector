import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import { getPost } from '../../actions/post'
import Spinner from '../layout/Spinner'
const Post = props => {
    return (
        <Fragment>
            <Spinner />
        </Fragment>
    )
}

Post.propTypes = {

}

export default Post
