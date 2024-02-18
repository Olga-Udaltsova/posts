import React from "react";
import * as SC from './styles';

export const PinkButton = ({ children, ...rest }) => (
  <SC.Button {...rest}>{children}</SC.Button>
);
