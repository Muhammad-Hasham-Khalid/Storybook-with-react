import styled from "styled-components";
import { typeScale } from "../utils";
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
  warning: ({ props }) => `
    background-color: ${props.theme.status.warningColor};
    color: ${props.theme.textColorInverted};
    border: 2px solid transparent;
    &:hover, &:focus {
      background-color: ${props.theme.status.warningColorHover};
      color: ${props.theme.textColorInverted};
    }
    &:focus {
      outline: 2px solid ${props.theme.status.warningColorHover};
      outline-offset: 2px;
    }
    &:active {
      background-color: ${props.theme.status.warningColorActive};
    }
  `,
  primaryButtonWarning: ({ props }) => `
    background-color: ${props.theme.status.warningColor};
    color: ${props.theme.textColorInverted};
  `,
  secondaryButtonWarning: ({ props }) => `
    background: none;
    color: ${props.theme.status.warningColor};
    border: 2px solid ${props.theme.status.warningColor};
  `,
  tertiaryButtonWarning: ({ props }) => `
    background: none;
    color: ${props.theme.status.warningColor};
  `,
  error: ({ props }) => `
    background: none;
    color: ${props.theme.status.errorColor};
    border: 2px solid transparent;
    &:hover, &:focus {
      background-color: ${props.theme.status.errorColorHover};
      color: ${props.theme.textColorInverted};
    }
    &:focus {
      outline: 3px solid ${props.theme.status.errorColorHover};
      outline-offset: 2px;
    }
    &:active {
      background-color: ${props.theme.status.errorColorActive};
    }
  `,
  primaryButtonError: ({ props }) => `
    background-color: ${props.theme.status.errorColor};
    color: ${props.theme.textColorInverted};
  `,
  secondaryButtonError: ({ props }) => `
    border: 2px solid ${props.theme.status.warningColor};
  `,
  tertiaryButtonError: ({ props }) => `
  background: none;
  color: ${props.theme.status.errorColor};
  `,
  success: ({ props }) => `
    background: none;
    color: ${props.theme.status.successColor};
    border: 2px solid transparent;
    &:hover, &:focus {
      background-color: ${props.theme.status.successColorHover};
    }
    &:focus {
      outline: 3px solid ${props.theme.status.successColorHover};
      outline-offset: 2px;
    }
    &:active {
      background-color: ${props.theme.status.successColorActive};
    }
  `,
  primaryButtonSuccess: ({ props }) => `
    background-color: ${props.theme.status.successColor};
    color: ${props.theme.textColorInverted};
  `,
  secondaryButtonSuccess: ({ props }) => `
    border: 2px solid ${props.theme.status.warningColor};
  `,
  tertiaryButtonSuccess: ({ props }) => `
    background: none;
    color: ${props.theme.status.successColor};
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
    background-color: ${(props) => props.theme.primaryColorHover};
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    color: ${(props) => props.theme.textColorOnPrimary};
  }

  &:focus {
    outline: 1px solid ${(props) => props.theme.primaryColorHover};
    outline-offset: 3px;
  }

  &:active {
    background-color: ${(props) => props.theme.primaryColorActive};
    color: ${(props) => props.theme.textColorOnPrimary};
  }
`;

export const PrimaryButton = styled(Button)`
  background-color: ${(props) => props.theme.primaryColor};
  color: ${(props) => props.theme.textColor};
  border: none;

  &:disabled {
    background-color: ${(props) => props.theme.disabled};
    color: ${(props) => props.theme.textOnDisabled};
    box-shadow: none;
    cursor: not-allowed;
  }
  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

export const SecondaryButton = styled(Button)`
  background: none;
  color: ${(props) => props.theme.primaryColor};
  border: 2px solid ${(props) => props.theme.primaryColor};

  &:disabled {
    border-color: ${(props) => props.theme.disabled};
    background: none;
    color: ${(props) => props.theme.disabled};
    box-shadow: none;
    cursor: not-allowed;
  }
  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

export const TertiaryButton = styled(Button)`
  background: none;
  color: ${(props) => props.theme.primaryColor};
  border: none;

  &:disabled {
    background: none;
    color: ${(props) => props.theme.disabled};
    cursor: not-allowed;
    box-shadow: none;
  }
  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;
