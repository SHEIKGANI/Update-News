// src/App.test.jsx
import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'
import App from './App'

// Optional: mock Newsapp if you don't want to test its rendering
jest.mock('./Newsapp', () => () => <div>Newsapp Mock</div>)

describe('App component', () => {
  it('renders Newsapp', () => {
    const { getByText } = render(<App />)
    expect(getByText('Newsapp Mock')).toBeTruthy()
  })
})
