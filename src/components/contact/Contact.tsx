import styled, { css } from "styled-components";
import InputField from "./InputField";

const Contact = () => {
  return (
    <Wrapper id="contact">
      <Title>Contact</Title>
      <Container>
        <Intro>
          <Text>
            연락, 피드백, 의견 등을 보내주시면 <br />
            꼼꼼하게 읽어보고 답장 드리겠습니다
          </Text>
          <ContactInfos>
            <Info>경기도 고양시</Info>
            <Info>010-1111-2222</Info>
            <Info>cdm1263@gmail.com</Info>
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
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 50px;
  justify-content: center;
`;

const Title = styled.h2`
  color: ${({ theme }) => theme.colors.text[100]};
  font-size: 40px;
  font-weight: 800;
  text-align: center;
  font-family: "Flipahaus-V2";
`;

const Container = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;

  ${({ theme }) =>
    theme.media.mobile(css`
      flex-direction: column;
    `)}
`;

const Intro = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  flex-direction: column;
  justify-content: center;

  ${({ theme }) =>
    theme.media.mobile(css`
      justify-content: space-between;
    `)}
`;

const ContactInfos = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;

  ${({ theme }) =>
    theme.media.mobile(css`
      align-items: center;
    `)}
`;

const Text = styled.p`
  font-size: 22px;
  line-height: 120%;

  ${({ theme }) =>
    theme.media.mobile(css`
      text-align: center;
    `)}
`;

const Info = styled.span``;

const Form = styled.form`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;

  ${({ theme }) =>
    theme.media.mobile(css`
      justify-content: center;
      flex: 2;
    `)}
`;

const InputContainer = styled.div`
  display: flex;
  gap: 20px;
  justify-content: space-between;
`;

const SubmitButton = styled.button`
  background-color: ${({ theme }) => theme.colors.accent[200]};
  width: 200px;
  align-self: flex-end;
  color: ${({ theme }) => theme.colors.text[100]};
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.15s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.accent[100]};
    width: 200px;
  }
`;

export default Contact;
