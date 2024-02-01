import styled from "styled-components";
import InputField from "./InputField";

const Contact = () => {
  return (
    <Wrapper id="contact">
      <Title>Contact</Title>
      <Form>
        <InputContainer>
          <InputField name="name" type="text" label="Name" />
          <InputField name="email" type="email" label="Email" />
        </InputContainer>
        <InputField name="message" type="textarea" label="Message" />
        <SubmitButton type="submit">Submit</SubmitButton>
      </Form>
    </Wrapper>
  );
};

const Wrapper = styled.section``;

const Title = styled.h2`
  color: ${({ theme }) => theme.text[100]};
  font-size: 40px;
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const InputContainer = styled.div`
  display: flex;
  gap: 20px;
`;

const SubmitButton = styled.button`
  background-color: ${({ theme }) => theme.accent[100]};
  color: #fff;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export default Contact;
