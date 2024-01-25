import React from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";

const animatedComponents = makeAnimated();

const Index = (props: any) => {
  return (
    <Select
      {...props}
      components={{ ...animatedComponents, IndicatorSeparator: () => null }}
      styles={{
        control: (baseStyles, state) => ({
          ...baseStyles,
          height: "41px",
          fontSize: "13px",
          width: "100%",
          textAlign: "right",
          padding: "0 0 0 40px",
          outline: "",
          boxShadow: "",
          borderRadius: "9px",
          border: state.isFocused
            ? "2px solid #ffffff38"
            : "2px solid #ffffff38",
          "&:hover": {
            border: state.isFocused ? "" : "2px solid #ffffff38",
          },
          backgroundColor: "#FFFFFF0F",
        }),
      }}
    />
  );
};

export default Index;
