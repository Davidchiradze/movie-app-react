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
} from "./components";

const Login = ({ users }) => {
  const redirect = useNavigate();

  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      users.findIndex(
        (user) =>
          user.email === userCredentials.email &&
          user.password === userCredentials.password
      ) === -1
    ) {
      alert("Incorrect User!");
      return;
    }
    localStorage.setItem("user", JSON.stringify(userCredentials));
    redirect("/movies");
  };
  const handleChange = (event) => {
    const { value, name } = event.target;
    setUserCredentials((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <PageWrapper>
      <LoginContainer>
        <StyledForm onSubmit={(e) => handleSubmit(e)}>
          <h2>Login</h2>
          <FormControl>
            <StyledLabel>Email</StyledLabel>
            <StyledInput
              placeholder="Enter Email"
              name="email"
              value={userCredentials.email}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl>
            <StyledLabel>Password</StyledLabel>
            <StyledInput
              type="password"
              placeholder="Enter Password"
              name="password"
              value={userCredentials.password}
              onChange={handleChange}
            />
          </FormControl>
          <HeaderNavigationLink to={"/register"}>Sign up</HeaderNavigationLink>

          <StyledButton type="submit">Submit</StyledButton>
        </StyledForm>
      </LoginContainer>
    </PageWrapper>
  );
};

export default Login;
