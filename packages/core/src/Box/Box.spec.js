import React from 'react'

import { theme, Box } from '..'

describe('Box', () => {
  test('renders', () => {
    const json = rendererCreateWithTheme(<Box />).toJSON()
    expect(json).toMatchSnapshot()
  })

  test('width and height props set width/height', () => {
    const json = rendererCreateWithTheme(
      <Box width={1 / 2} height='50%' />
    ).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('height', '50%')
    expect(json).toHaveStyleRule('width', '50%')
  })

  test('m prop sets margin', () => {
    const json = rendererCreateWithTheme(<Box m={2} />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('margin', theme.space[2] + 'px')
  })

  test('maxHeight, maxWidth, minHeight, minWidth', () => {
    const json = rendererCreateWithTheme(
      <Box maxHeight={250} maxWidth={250} minHeight={55} minWidth={55} />
    ).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('max-height', '250px')
    expect(json).toHaveStyleRule('max-width', '250px')
    expect(json).toHaveStyleRule('min-height', '55px')
    expect(json).toHaveStyleRule('min-width', '55px')
  })

  test('p prop sets padding', () => {
    const json = rendererCreateWithTheme(<Box p={2} />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('padding', theme.space[2] + 'px')
  })

  test('color prop sets color', () => {
    const json = rendererCreateWithTheme(<Box color='blue' />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('color', theme.colors.blue)
  })

  test('bg prop sets background color', () => {
    const json = rendererCreateWithTheme(<Box bg='green' />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('background-color', theme.colors.green)
  })

  test('boxShadowSize prop sets box-shadow', () => {
    const json = rendererCreateWithTheme(<Box boxShadowSize='sm' />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('box-shadow', theme.boxShadows[0])
  })

  test('align prop triggers warning', () => {
    console.error = jest.fn()

    rendererCreateWithTheme(<Box align='center' />).toJSON()

    expect(
      console.error.mock.calls
        .toString()
        .indexOf(
          'The Box `align` prop will deprecated. Please use Text instead.'
        ) !== -1
    )
    console.error.mockRestore()
  })
})