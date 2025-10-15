import { useState, useRef, useEffect, useCallback } from "react";
import { useFormContext } from "react-hook-form";
import {
  SelectContainer,
  SelectHeader,
  SelectLabel,
  SelectList,
  SelectOption,
  ArrowIcon,
} from "./selectInput.styles";

type Option = { value: string; label: string };

type SelectInputProps = {
  name: string;
  label: string;
  options: Option[];
};

const SelectInput = ({ name, label, options }: SelectInputProps) => {
  const { setValue, register, getValues } = useFormContext();
  
  const ref = useRef<HTMLDivElement>(null);

  const [selectedValue, setSelectedValue] = useState(getValues(name) || "");
  const [isOpen, setIsOpen] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const selectedOption = options.find((opt) => opt.value === selectedValue);

  const handleSelect = (value: string) => {
    setSelectedValue(value);
    setValue(name, value, { shouldValidate: true });
    setIsOpen(false);
    setIsFocused(false);
  };

  const handleClickOutside = useCallback((e: MouseEvent) => {
    if (ref.current && !ref.current.contains(e.target as Node)) {
      setIsOpen(false);
      setIsFocused(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [handleClickOutside]);

  const showLabel = isFocused || !!selectedValue;

  return (
    <SelectContainer ref={ref} active={isFocused || isOpen}>
      {showLabel && <SelectLabel>{label}</SelectLabel>}

      <SelectHeader
        tabIndex={0}
        {...register(name)}
        onClick={() => setIsOpen((prev) => !prev)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        showLabel={showLabel}
      >
        {selectedOption ? selectedOption.label : label}
        <ArrowIcon $open={isOpen} />
      </SelectHeader>

      {isOpen && (
        <SelectList>
          {options.map((opt) => (
            <SelectOption
              key={opt.value}
              $selected={opt.value === selectedValue}
              onClick={() => handleSelect(opt.value)}
            >
              {opt.label}
            </SelectOption>
          ))}
        </SelectList>
      )}
    </SelectContainer>
  );
};

export default SelectInput;
