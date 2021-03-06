import React from 'react'
import styled from 'styled-components'
import { space, fontSize, themeGet } from 'styled-system'
import PropTypes from 'prop-types'
import { Text } from '../Text'
import {
  applyVariations,
  getPaletteColor,
  borders,
  deprecatedColorValue,
} from '../utils'

const StyledInput = styled.input`
  appearance: none;
  display: block;
  width: 100%;
  font-family: inherit;
  color: inherit;
  background-color: transparent;
  border-radius: ${themeGet('radius')};
  border-width: 1px;
  border-style: solid;

  padding-top: 14px;
  padding-bottom: 14px;
  padding-left: 12px;
  padding-right: 12px;

  margin: 0;

  ::placeholder {
    color: ${getPaletteColor('text.light')};
  }

  ::-ms-clear {
    display: none;
  }

  ${borders} ${space} ${fontSize};
  ${applyVariations('Input')}
`

const INPUT_ERROR_TEXT = 'InputHelperText'

export const Input = React.forwardRef((props, ref) => {
  const { helperText, color, ...restProps } = props

  return (
    <>
      <StyledInput {...restProps} color={color} ref={ref}/>
      {helperText &&
        React.cloneElement(helperText, {
          color: helperText?.props?.color || color,
        })}
    </>
  )
})

const HelperText = styled(Text).attrs(() => ({
  mt: 2,
  fontSize: 1,
}))``

Input.HelperText = (props) => (
  <HelperText {...props}>{props.children}</HelperText>
)

Input.HelperText.displayName = INPUT_ERROR_TEXT

Input.displayName = 'Input'
Input.isField = true
Input.defaultProps = {
  fontSize: [2, null, 1],
}
Input.propTypes = {
  id: PropTypes.string.isRequired,
  color: deprecatedColorValue(),
  /**
   * Display text below the input and set error color on input
   */
  helperText: PropTypes.node,
  ...borders.propTypes,
  ...space.propTypes,
  ...fontSize.propTypes,
}

export default Input
