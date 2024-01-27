import { Option, Options } from "@/enums/Profile";
import dynamic from "next/dynamic";
import React, { CSSProperties } from "react";
const Select = dynamic(() => import("react-select"), { ssr: false });
import { ActionMeta } from "react-select";
import makeAnimated from "react-select/animated";

const animatedComponents = makeAnimated();

interface SelectProps {
  inputSize?: "regular" | "sm";
  variant?: "regular" | "outlined" | "borderless";
  isSearchable?: boolean;
  placeholder?: string;
  disabled?: boolean;
  value: { label: string; value: string }[];
  className?: string;
  customStyle?: CSSProperties;
  withArrow?: boolean;
  options: Options[];
  isMulti?: boolean;
  onChange: (newValue: any, actionMeta: ActionMeta<unknown>) => void;
}

const Index: React.FC<SelectProps> = (props: SelectProps) => {
  const { variant = "regular", withArrow = true } = props;
  const variants = (state: any) => ({
    outlined: {
      border: state.isFocused ? "2px solid #ffffff38" : "2px solid #ffffff38",
      "&:hover": {
        border: state.isFocused ? "" : "2px solid #ffffff38",
      },
    },
    borderless: {
      border: state.isFocused ? "none" : "none",
      "&:hover": {
        border: state.isFocused ? "" : "none",
      },
    },
    regular: {},
  });

  return (
    <Select
      {...props}
      components={{
        ...animatedComponents,
        IndicatorSeparator: () => null,
        ...(withArrow ? {} : { DropdownIndicator: () => null }),
      }}
      styles={{
        singleValue: (styles) => {
          return {
            ...styles,
            color: "#fff",
          };
        },
        multiValue: (styles) => {
          return {
            ...styles,
            backgroundColor: "rgba(255, 255, 255, 0.10)",
            borderRadius: "8px",
            padding: "8px 4px",
            color: "#fff",
          };
        },
        multiValueLabel: (styles) => ({
          ...styles,
          fontSize: "12px",
          whiteSpace: "none",
          textOverflow: "unset",
          lineHeight: "normal",
          fontWeight: 600,
          color: "#fff",
        }),
        multiValueRemove: (styles) => ({
          ...styles,
          color: "white",
        }),
        control: (baseStyles, state) => ({
          ...baseStyles,
          height: "41px",
          fontSize: "13px",
          width: "100%",
          outline: "",
          boxShadow: "",
          borderRadius: "9px",
          color: "#fff",
          ...variants(state)[variant],
          backgroundColor: "#FFFFFF0F",
          ...props.customStyle,
        }),
      }}
    />
  );
};

export default Index;
