import { useState } from "react";
import style from "./LoginScreen.module.css";
import { useEffect } from "react";
import { ErrorMessage, Field, Form, Formik, useFormik } from "formik";
import * as Yup from "yup";
import MyFormErrorComponent from "./MyFormErrorComponent";
const LoginScreen = () => {
  const [screenWidth, setScreenWidth] = useState(1280);
  const [screenHeight, setScreenHeight] = useState(1280);

  useEffect(() => {
    // Function to update screen dimensions on resize
    const updateDimensions = () => {
      setScreenWidth(window.innerWidth);
      setScreenHeight(window.innerHeight);
    };

    // Event listener to handle resize
    window.addEventListener("resize", updateDimensions);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const horizontal = () => {
    const horizontal = screenWidth / 50;

    const elements = [];

    for (let index = 0; index < horizontal; index++) {
      elements.push(
        <div
          key={index}
          className={`boxColor`}
          style={{
            height: "50px",
            width: "50px",
            backgroundColor: "#1f1f1f",
            marginRight: "4px",
            display: "inline-block",
          }}
        ></div>
      );
    }
    return elements;
  };

  const showBoxes = () => {
    const vertical = screenHeight / 50;

    const elements = [];

    for (let index = 0; index < vertical; index++) {
      elements.push(
        <div key={index} className={style.boxCover}>
          {horizontal()}
        </div>
      );
    }
    return elements;
  };

  function resetBoxColor(element) {
    element.style.backgroundColor = "#1f1f1f";
  }

  useEffect(() => {
    // Attach hover event listener to all boxes
    const boxes = document.querySelectorAll(".boxColor");

    boxes.forEach((box) => {
      box.addEventListener("mouseover", () => {
        box.style.backgroundColor = "#00f700"; // Change color on hover
      });

      box.addEventListener("mouseout", () => {
        // Revert color back to original after a delay (e.g., 1 second)
        setTimeout(() => {
          resetBoxColor(box);
        }, 400);
      });
    });
  }, []);
  const formFields = {
    username: "",
    password: ""
  };
  const validationSchema = Yup.object({
    username: Yup.string().required("enter name please"),
    password: Yup.string().required("enter password please")
  });
  const submitHandler = (values) => {console.log("slama")};
  return (
    <div className={style.fullScreen}>
      {showBoxes()}

      <div className={style.loginContainer}>
        <div className={style.loginContent}>
          <h1 className={style.welcomeText}>ورود</h1>
          <Formik
            validateOnBlur={false}
            validateOnChange={true}
            onSubmit={submitHandler}
            initialValues={formFields}
            validationSchema={validationSchema}
          >
            <Form className={style.loginForm}>
              <Field
                type="text"
                name="username"
                placeholder="نام کاربری"
                className={style.inputField}
              />
              <ErrorMessage name="username" component={MyFormErrorComponent} />
              <Field
                name="password"
                type="password"
                placeholder="رمز عبور"
                className={style.inputField}
              />
              <ErrorMessage name="password" component={MyFormErrorComponent} />
              <button type="submit" className={style.loginButton}>
                ورود
              </button>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};
export default LoginScreen;
