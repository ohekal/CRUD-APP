import React, { useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { editPost, resetRecord } from "../store/postSlice";
import { useNavigate } from "react-router-dom";
import Loading from "../components/Loading";
import usePostDetails from "../customHook/use-post-details";
import withGuard from "../util/withGuard";
import { useFormik } from "formik";
import { validationSchema } from "../util/validationScehma";

function EditPost() {
  const { loading, error, record } = usePostDetails();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(resetRecord());
    };
  }, [dispatch]);

  const formik = useFormik({
    initialValues: {
      title: record ? record?.title : "",
      description: record ? record?.description : "",
    },
    validationSchema,
    enableReinitialize: true,
    onSubmit: (values) => {
      dispatch(
        editPost({
          id: record.id,
          title: values.title,
          description: values.description,
        })
      )
        .unwrap()
        .then(() => {
          navigate("/");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          onChange={formik.handleChange}
          value={formik.values.title}
          name="title"
          isInvalid={!!formik.errors.title}
        />
        <Form.Control.Feedback type="invalid">
          {formik.errors.title}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          onChange={formik.handleChange}
          value={formik.values.description}
          name="description"
          isInvalid={!!formik.errors.description}
        />
        <Form.Control.Feedback type="invalid">
          {formik.errors.description}
        </Form.Control.Feedback>
      </Form.Group>
      <Loading loading={loading} error={error}>
        <Button variant="primary" type="submit" disabled={loading}>
          Submit
        </Button>
      </Loading>
    </Form>
  );
}

export default withGuard(EditPost);
