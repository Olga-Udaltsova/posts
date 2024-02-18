import React from "react";
import * as SC from "./styles";

export const BlackButton = ({ children, ...rest }) => (
  <SC.Button {...rest}>{children}</SC.Button>
);
