import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts } from "../store/postSlice";
import Loading from "../components/Loading";
import PostList from "../components/PostList";

function Home() {
  const { records, loading, error } = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <Loading loading={loading} error={error}>
      <PostList data={records} />
    </Loading>
  );
}

export default Home;
