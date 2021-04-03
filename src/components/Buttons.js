import styled from "styled-components";
import { defaultTheme, typeScale } from "../utils";
import { applyStyleModifiers } from "styled-components-modifiers";

const BUTTON_MODIFIERS = {
  small: () => `
    font-size: ${typeScale.helperText};
    padding: 8px;
  `,
  large: () => `
    font-size: ${typeScale.header5};
    padding: 16px 24px;
  `,
};

const Button = styled.button`
  padding: 12px 24px;
  font-size: ${typeScale.paragraph};
  border-radius: 2px;
  font-family: "Roboto Mono", monospace;
  cursor: pointer;
  min-width: 100px;
  outline: none;
  transition: background-color 0.2s linear, color 0.2s linear,
    box-shadow 0.2s linear;

  &:hover {
    background-color: ${defaultTheme.primaryColorHover};
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    color: ${defaultTheme.textColorOnPrimary};
  }

  &:focus {
    outline: 1px solid ${defaultTheme.primaryColorHover};
    outline-offset: 3px;
  }

  &:active {
    background-color: ${defaultTheme.primaryColorActive};
    color: ${defaultTheme.textColorOnPrimary};
  }
`;

export const PrimaryButton = styled(Button)`
  background-color: ${defaultTheme.primaryColor};
  color: white;
  border: none;

  &:disabled {
    background-color: ${defaultTheme.disabled};
    color: ${defaultTheme.textOnDisabled};
    box-shadow: none;
    cursor: not-allowed;
  }
  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

export const SecondaryButton = styled(Button)`
  background: none;
  color: ${defaultTheme.primaryColor};
  border: 2px solid ${defaultTheme.primaryColor};

  &:disabled {
    border-color: ${defaultTheme.disabled};
    background: none;
    color: ${defaultTheme.disabled};
    box-shadow: none;
    cursor: not-allowed;
  }
  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

export const TertiaryButton = styled(Button)`
  background: none;
  color: ${defaultTheme.primaryColor};
  border: none;

  &:disabled {
    background: none;
    color: ${defaultTheme.disabled};
    cursor: not-allowed;
    box-shadow: none;
  }
  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;
