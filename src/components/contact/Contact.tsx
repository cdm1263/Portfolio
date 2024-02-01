import styled from "styled-components";
import { useState } from "react";

interface TextFieldType {
  [key: string]: boolean;
}

const Contact = () => {
  const [isFocused, setIsFocused] = useState<TextFieldType>({
    name: false,
    email: false,
    message: false,
  });

  const [isFilled, setIsFilled] = useState<TextFieldType>({
    name: false,
    email: false,
    message: false,
  });

  const handleFocus = (name: string) => {
    setIsFocused((prev) => ({ ...prev, [name]: true }));
  };

  const handleBlur = (name: string) => {
    setIsFocused((prev) => ({ ...prev, [name]: false }));
  };

  const handleChange = (name: string, value: string) => {
    setIsFilled((prev) => ({ ...prev, [name]: value.trim() !== "" }));
  };

  return (
    <Wrapper id="contact">
      <Title>Contact</Title>
      <Form>
        <InputContainer>
          <FormContents>
            <Label
              htmlFor="name"
              $isFocused={isFocused["name"]}
              $isFilled={isFilled["name"]}
            >
              Name *
            </Label>
            <Input
              type="text"
              id="name"
              name="name"
              required
              onFocus={() => handleFocus("name")}
              onBlur={() => handleBlur("name")}
              onChange={(event) => {
                handleChange("name", event.target.value);
              }}
            />
          </FormContents>
          <FormContents>
            <Label
              htmlFor="email"
              $isFocused={isFocused["email"]}
              $isFilled={isFilled["email"]}
            >
              Email *
            </Label>
            <Input
              type="email"
              id="email"
              name="email"
              required
              onFocus={() => handleFocus("email")}
              onBlur={() => handleBlur("email")}
              onChange={(event) => {
                handleChange("email", event.target.value);
              }}
            />
          </FormContents>
        </InputContainer>
        <FormContents>
          <Label
            htmlFor="message"
            $isFocused={isFocused["message"]}
            $isFilled={isFilled["message"]}
          >
            Message *
          </Label>
          <Textarea
            id="message"
            name="message"
            rows={5}
            onFocus={() => handleFocus("message")}
            onBlur={() => handleBlur("message")}
            onChange={(event) => {
              handleChange("message", event.target.value);
            }}
          />
        </FormContents>
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

const FormContents = styled.div`
  flex: 1;
  position: relative;
`;

const Label = styled.label<{ $isFocused: boolean; $isFilled: boolean }>`
  display: block;
  color: ${({ $isFocused, theme }) =>
    $isFocused ? theme.accent[100] : theme.text[200]};
  padding: 0 10px;
  background-color: ${({ theme }) => theme.bg[200]};
  position: absolute;
  font-size: 20px;
  left: 10px;
  transition: transform 0.15s ease-in-out;
  transform-origin: left center;
  transform: translateY(
      ${({ $isFocused, $isFilled }) =>
        $isFocused || $isFilled ? "-50%" : "105%"}
    )
    scale(
      ${({ $isFocused, $isFilled }) => ($isFocused || $isFilled ? "0.8" : 1)}
    );

  cursor: text;
`;

const Input = styled.input`
  width: 100%;
  padding: 18px;
  outline: none;
  border: 1px solid ${({ theme }) => theme.text[200]};
  border-radius: 4px;
  background-color: transparent;
  color: ${({ theme }) => theme.text[100]};
  box-sizing: border-box;
  font-size: 20px;

  &:hover {
    border-color: ${({ theme }) => theme.text[100]};
  }

  &:focus {
    border-color: ${({ theme }) => theme.accent[100]};
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 18px;
  outline: none;
  font-size: 20px;
  border: 1px solid ${({ theme }) => theme.text[200]};
  border-radius: 6px;
  background-color: transparent;
  color: ${({ theme }) => theme.text[100]};
  box-sizing: border-box;

  &:hover {
    border-color: ${({ theme }) => theme.text[100]};
  }

  &:focus {
    border-color: ${({ theme }) => theme.accent[100]};
  }
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
