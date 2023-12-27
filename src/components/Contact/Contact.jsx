import {
  Alert,
  Button,
  Col,
  FloatingLabel,
  Form,
  Modal,
  Row,
} from "react-bootstrap";
import "./contact.css";
import * as formik from "formik";
import * as yup from "yup";
import { useState } from "react";
import axios from "axios";
const Contact = ({ show, handleClose }) => {
  const { Formik } = formik;
  const schema = yup.object().shape({
    name: yup
      .string()
      .min(5, "Enter your full name")
      .required("This field is required"),
    email: yup
      .string()
      .email("Enter Valid Email")
      .required("This field is required"),
    subject: yup.string().notRequired(),
    message: yup.string().required("This field is required"),
  });
  const access_key = import.meta.env.VITE_KEY;
  console.log(access_key);
  const [isSubmitted, setSubmit] = useState(false);
  const [isError, setError] = useState("");

  const submitHandler = async (values) => {
    try {
      const result = await axios.post(
        "https://api.web3forms.com/submit",
        values
      );
      if (result) {
        setSubmit(!isSubmitted);
        setTimeout(() => {
          setSubmit(!isSubmitted);
          handleClose();
        }, 3000);
        return result;
      }
    } catch (error) {
      setError(error);
      console.log(error);
      setTimeout(() => {
        setError(false);
      }, 3000);
    }
  };
  return (
    <>
      <Modal
        className="d-flex justify-content-center align-items-center"
        contentClassName="contact"
        show={show}
        onHide={handleClose}
      >
        <Row>
          <h5 className="p-3 fw-bold">Contact Me</h5>
          <Formik
            validationSchema={schema}
            onSubmit={submitHandler}
            initialValues={{
              name: "",
              email: "",
              subject: "",
              message: "",
              access_key: access_key,
            }}
          >
            {({ handleSubmit, handleChange, values, touched, errors }) => (
              <Form noValidate onSubmit={handleSubmit} className="p-2 px-4">
                <Form.Group className="mb-3" as={Col}>
                  <Form.Control id="access_key" type="hidden" name="name" value={values.access_key}/>
                  <FloatingLabel label="Full Name">
                    <Form.Control
                      id="inputName"
                      type="text"
                      name="name"
                      value={values.name}
                      onChange={handleChange}
                      isValid={touched.name && !errors.name}
                      isInvalid={!!errors.name}
                      placeholder="Enter Full Name"
                    />
                  </FloatingLabel>
                  <Form.Control.Feedback type="valid">
                    Looks good!
                  </Form.Control.Feedback>
                  <Form.Control.Feedback type="invalid">
                    {errors.name}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" as={Col}>
                  <FloatingLabel label="Email">
                    <Form.Control
                      id="inputEmail"
                      name="email"
                      type="Email"
                      placeholder="Enter Email"
                      value={values.email}
                      onChange={handleChange}
                      isValid={touched.email && !errors.email}
                      isInvalid={!!errors.email}
                    />
                  </FloatingLabel>
                  <Form.Control.Feedback type="valid">
                    Looks good!
                  </Form.Control.Feedback>
                  <Form.Control.Feedback type="invalid">
                    {errors.email}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" as={Col}>
                  <FloatingLabel label="Subject">
                    <Form.Control
                      id="inputSubject"
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      value={values.subject}
                      onChange={handleChange}
                      isValid={touched.subject && !errors.subject}
                      isInvalid={!!errors.subject}
                    />
                  </FloatingLabel>
                  <Form.Control.Feedback type="valid">
                    Looks good!
                  </Form.Control.Feedback>
                  <Form.Control.Feedback type="invalid">
                    {errors.subject}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col}>
                  <FloatingLabel label="Message">
                    <Form.Control
                      id="inputMessage"
                      as="textarea"
                      name="message"
                      placeholder="Message"
                      value={values.message}
                      onChange={handleChange}
                      isValid={touched.message && !errors.message}
                      isInvalid={!!errors.message}
                      style={{ height: "100px" }}
                    />
                  </FloatingLabel>
                  <Form.Control.Feedback type="valid">
                    Looks good!
                  </Form.Control.Feedback>
                  <Form.Control.Feedback type="invalid">
                    {errors.message}
                  </Form.Control.Feedback>
                </Form.Group>
                <Row>
                  <Col xs={"auto"} className="mx-auto my-2">
                    <Button variant="primary" type="submit">
                      Send
                    </Button>
                  </Col>
                </Row>
              </Form>
            )}
          </Formik>
          <Row>
            {isSubmitted && (
              <Alert className="" variant="success">
                Sent! Thank you for your message{" "}
              </Alert>
            )}
            {isError && (
              <Alert className="" variant="danger">
                {isError.response.data.message}
              </Alert>
            )}
          </Row>
        </Row>
      </Modal>
    </>
  );
};

export default Contact;
