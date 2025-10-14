import { useState } from "react";
import { useFormContext } from "react-hook-form";
import { TextInputContainer, TextInputContent, TextInputLabel } from "./textInput.styles";

type TextInputProps = {
  name: string;
  label: string;
  placeholder?: string;
};

const TextInput = ({ name, label, placeholder }: TextInputProps) => {
  const { register, watch } = useFormContext();
  const value = watch(name);
  const [active, setActive] = useState(false);

  const handleFocus = () => setActive(true);
  const handleBlur = () => setActive(false);

  const showLabel = active || !!value; // Show label when focused OR has value

  return (
    <TextInputContainer active={active}>
      {showLabel && <TextInputLabel>{label}</TextInputLabel>}
      <TextInputContent
        {...register(name)}
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholder={placeholder}
      />
    </TextInputContainer>
  );
};

export default TextInput;
