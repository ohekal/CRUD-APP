import React from "react";
import { ButtonGroup, Button } from "react-bootstrap";
import { nanoid } from "nanoid";

import { useDispatch, useSelector } from "react-redux";
import { deletePost } from "../store/postSlice";

import { useNavigate } from "react-router-dom";

function PostListItems({ data }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoggedIn } = useSelector((state) => state.auth);

  const deletHandler = (ele) => {
    dispatch(deletePost(ele.id));
  };
  const editHandler = (ele) => {
    navigate(`/post/${ele.id}/edit`);
  };

  const records = data.map((ele, index) => {
    return (
      <tr key={nanoid()}>
        <td
          onClick={(e) => {
            navigate(`post/${ele.id}`);
          }}
        >
          #{index + 1}
        </td>
        <td
          onClick={(e) => {
            navigate(`post/${ele.id}`);
          }}
        >
          {ele.title}
        </td>
        <td>
          <ButtonGroup aria-label="Basic example">
            <Button
              variant="success"
              onClick={() => {
                editHandler(ele);
              }}
            >
              Edit
            </Button>
            <Button
              variant="danger"
              onClick={() => deletHandler(ele)}
              disabled={!isLoggedIn}
            >
              Delete
            </Button>
          </ButtonGroup>
        </td>
      </tr>
    );
  });
  return <>{records}</>;
}

export default PostListItems;
