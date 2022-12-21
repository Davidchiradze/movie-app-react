import styled from "styled-components";

export const LoginContainer = styled.div`
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  width: 400px;
`;

export const StyledForm = styled.form`
  padding: 30px 40px;
`;

export const FormControl = styled.div`
  margin-bottom: 10px;
  padding-bottom: 20px;
  position: relative;
`;

export const StyledLabel = styled.label`
  color: #777;
  display: block;
  margin-bottom: 5px;
`;

export const StyledInput = styled.input`
  border: 2px solid #f0f0f0;
  border-radius: 4px;
  display: block;
  width: 100%;
  padding: 10px;
  font-size: 14px;
  &:focus {
    outline: none;
    border-color: #777;
  }
`;

export const StyledButton = styled.button`
  cursor: pointer;
  background-color: #3498db;
  border: 2px solid #3498db;
  border-radius: 4px;
  color: #fff;
  display: block;
  font-size: 16px;
  width: 100%;
  padding: 10px;
  margin-top: 20px;
`;

export const PageWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
`;
