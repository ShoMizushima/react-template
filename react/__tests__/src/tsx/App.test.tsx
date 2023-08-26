import React from 'react'
import '@testing-library/jest-dom'
import { render, RenderResult } from '@testing-library/react'
import { App } from '../../../src/tsx/App'

describe('App Component', () => {
  let renderResult: RenderResult
  beforeEach(() => {
    renderResult = render(<App />)
  })

  test('render text', () => {
    const { container } = renderResult
    const title = container.querySelector('p')

    expect(title).toBeTruthy()
    expect(title).toHaveTextContent('test application')
  })
})
