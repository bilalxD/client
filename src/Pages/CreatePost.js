import React from 'react';
import {Formik, Form, Field} from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import {useNavigate} from "react-router-dom"

function CreatePost() {
  const navigate = useNavigate();

  const initialValues = {
    title: "",
    postText:"",
    username:"",
  };
  const onSubmit = (data) => {
    axios.post("http://localhost:3001/posts", data).then((response)=>{
    })
    navigate("/")
  };

  const validationSchema = Yup.object().shape({
    title: Yup.string().required(),
    postText: Yup.string().required(),
    username: Yup.string().min(3).max(15).required(),
  });

  return (
    <div className="createPostPage">
      <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
        <Form className="formContainer">

          <label>Title: </label>
          <Field 
            autoComplete = "off"
            id="inputCreatePost"
            name="title"
            placeholder="(Ex. Title....)"
          />

          <label>Post: </label>
          <Field 
          autoComplete="off"
          id="inputCreatePost"
          name="postText"
          placeholder="(Ex. Post....)"
          />
          <label>Username: </label>
          <Field
            autoComplete="off"
            id="inputCreatePost"
            name="username"
            placeholder="(Ex. John123...)"
          />

          <button type="submit">Creat Post</button>
        </Form>
      </Formik>
    </div>  
  )
}
export default CreatePost