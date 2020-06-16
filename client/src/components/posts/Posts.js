import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getPosts } from "../../actions/post";
import { useEffect } from "react";
import PostItem from './PostItem'
import Spinner from "../layout/Spinner";
import PostForm from "./PostForm";

const Posts = ({ getPosts, post: { posts, loading } }) => {
  useEffect(() => {
    getPosts();
  }, [getPosts]);
  return !loading ? (
    <Fragment>
      <h1 className="text-primary large"> Posts </h1>
      <p className="lead">
          <i className="fas fa-user"></i> Welcome to the community
      </p>
      <PostForm /> {/* Add a modal here to create a new post */}
      <div className="posts">
          {posts.map(post => (
              <PostItem key={post._id} post={post} />
          ))}
      </div>
    </Fragment>
  ) : (
    <Spinner />
  );
};

Posts.propTypes = {
  getPosts: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  post: state.post,
});

export default connect(mapStateToProps, { getPosts })(Posts);
