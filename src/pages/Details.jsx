import React from "react";
import usePostDetails from "../customHook/use-post-details";
import Loading from "../components/Loading";
import withGuard from "../util/withGuard";

function Details() {
  const { loading, error, record } = usePostDetails();
  return (
    <div>
      <Loading loading={loading} error={error}>
        <p>Title: {record?.title}</p>
        <p>Description: {record?.description}</p>
      </Loading>
    </div>
  );
}

export default withGuard(Details);
