import { useState } from "react";
import styled from "styled-components";

interface InputFieldProps {
  name: string;
  type: string;
  label: string;
}

const InputField = ({ name, type, label }: InputFieldProps) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [isFilled, setIsFilled] = useState<boolean>(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleChange = (value: string) => {
    setIsFilled(value.trim() !== "");
  };

  return (
    <FormContents>
      <Label htmlFor={name} $isFocused={isFocused} $isFilled={isFilled}>
        {label} *
      </Label>
      {type === "textarea" ? (
        <Textarea
          id={name}
          name={name}
          rows={4}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={(event) => {
            handleChange(event.target.value);
          }}
        />
      ) : (
        <Input
          type={type}
          id={name}
          name={name}
          required
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={(event) => {
            handleChange(event.target.value);
          }}
        />
      )}
    </FormContents>
  );
};

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

export default InputField;
