import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { HeaderNavigationLink } from "../../components/header/components";
import {
  FormControl,
  LoginContainer,
  PageWrapper,
  StyledButton,
  StyledForm,
  StyledInput,
  StyledLabel,
} from "../login/components";

const Register = ({ users, setUsers }) => {
  const redirect = useNavigate();

  const [userInput, setUserInput] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const handleRegistration = (e) => {
    e.preventDefault();
    if (
      userInput.email.trim() === "" ||
      userInput.password.trim() === "" ||
      userInput.confirmPassword.trim() === ""
    ) {
      alert("Please fill all fields!");
      return;
    }

    if (userInput.password !== userInput.confirmPassword) {
      alert("Passwords doesn't match!");
      return;
    }

    if (users.find((user) => user.email === userInput.email)) {
      alert("User with this email already exists");
      return;
    }

    setUsers((prev) => [...prev, userInput]);

    setUserInput({
      fullname: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
    redirect("/login");
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserInput((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <PageWrapper>
      <LoginContainer>
        <StyledForm onSubmit={(e) => handleRegistration(e)}>
          <h2>Register With Us</h2>
          <FormControl>
            <StyledLabel>Email</StyledLabel>
            <StyledInput
              placeholder="Enter Email"
              value={userInput.email}
              name="email"
              onChange={handleChange}
            />
          </FormControl>
          <FormControl>
            <StyledLabel>Password</StyledLabel>
            <StyledInput
              type="password"
              name="password"
              onChange={handleChange}
              placeholder="Enter Password"
              value={userInput.password}
            />
          </FormControl>
          <FormControl>
            <StyledLabel>Confirm password</StyledLabel>
            <StyledInput
              type="password"
              name="confirmPassword"
              onChange={handleChange}
              placeholder="Enter Password"
              value={userInput.confirmPassword}
            />
          </FormControl>
          <HeaderNavigationLink to={"/login"}>Sign in</HeaderNavigationLink>
          <StyledButton type="submit">Submit</StyledButton>
        </StyledForm>
      </LoginContainer>
    </PageWrapper>
  );
};

export default Register;
