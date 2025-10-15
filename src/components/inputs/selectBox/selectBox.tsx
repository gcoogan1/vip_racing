import { useState } from "react";
import { Controller  } from "react-hook-form";
import { theme } from "../../../styles/theme";
import SelectedIcon from "../../../assets/icon/CheckboxSelected.svg?react";
import UnSelectedIcon from "../../../assets/icon/CheckboxUnselected.svg?react";
import { SelectBoxContainer, SelectBoxLabel } from "./selectBox.styles";

type SelectBoxProps = {
  name: string;
  label: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: any;
};

const SelectBox = ({ name, label, control }: SelectBoxProps) => {

  const [isFocused, setIsFocused] = useState(false);

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <SelectBoxContainer
          active={isFocused}
          tabIndex={0}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onClick={() => field.onChange(!field.value)}
        >
          {field.value ? (
            <SelectedIcon width={24} height={24} color={theme.colors.surface.text1} />
          ) : (
            <UnSelectedIcon width={24} height={24} color={theme.colors.surface.text3} />
          )}
          <SelectBoxLabel style={{ color: field.value ? theme.colors.surface.text1 : theme.colors.surface.text3 }}>
            {label}
          </SelectBoxLabel>
        </SelectBoxContainer>
      )}
    />
  );
};

export default SelectBox;
