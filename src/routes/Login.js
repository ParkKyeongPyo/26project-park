import { useState } from "react";
import { authService } from "../fbase.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import {
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import MenuBar from "../components/menu";

import { Button, Checkbox, Form, Input } from "antd";
import "antd/dist/antd.css";
import React from "react";

import styles from "../CSS/login.module.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newAccount, setNewAccount] = useState(true);

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(authService, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };

  const onChange = (e) => {
    if (e.target.name === "email") {
      setEmail(e.target.value);
    } else if (e.target.name === "password") {
      setPassword(e.target.value);
    } else if (e.target.name === "username") {
      setUsername(e.target.value);
    }
  };

  const toggleOAuth = () => {};

  return (
    <div style={{ height: "inherit" }}>
      <MenuBar />
      <div className={styles.flex}>
        <Form
          size="middle"
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
            onChange={onChange}
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Email"
            name="Email"
            onChange={onChange}
            rules={[
              {
                required: true,
                message: "Please input your Email!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            onChange={onChange}
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button htmlType="button">Continue with google</Button>
            <Button htmlType="button">Continue with github</Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

/*
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newAccount, setNewAccount] = useState(true);

  const onSubmit = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(authService, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };

  const onChange = (e) => {
    if (e.target.name === "email") {
      setEmail(e.target.value);
    } else if (e.target.name === "password") {
      setPassword(e.target.value);
    }
  };

  const toggleOAuth = () => {};
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="email"
          name="email"
          onChange={onChange}
          value={email}
          required
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          onChange={onChange}
          value={password}
          required
        />
        <input
          type="submit"
          value={newAccount ? "Create New Account" : "Log in"}
        />
      </form>
      <br />
      <button name="google" onClick={toggleOAuth}>
        Continue with google
      </button>
      <button name="github" onClick={toggleOAuth}>
        {" "}
        Continue with github
      </button>
    </div>
  );
}*/

export default Login;
