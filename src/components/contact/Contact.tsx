import styled from "styled-components";
import InputField from "./InputField";

const Contact = () => {
  return (
    <Wrapper id="contact">
      <Intro>
        <Title>Contact</Title>
        <ContactInfos>
          <Info>010-1111-2222</Info>
          <Info>cdm1263@gmail.com</Info>
          <SNS>
            <Icon>Github</Icon>
            <Icon>Linkedin</Icon>
            <Icon>Careerly</Icon>
          </SNS>
        </ContactInfos>
      </Intro>
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

const Wrapper = styled.section`
  display: flex;
`;

const Intro = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  color: ${({ theme }) => theme.text[100]};
  font-size: 40px;
  margin-bottom: 20px;
`;

const ContactInfos = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const Info = styled.span``;

const SNS = styled.div``;

const Icon = styled.i``;

const Form = styled.form`
  flex: 1;
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
