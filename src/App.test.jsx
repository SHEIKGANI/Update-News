// src/App.test.jsx
import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'

// HOIST MOCK — must match import path in App.jsx
vi.mock('./components/Newsapp', () => ({
  default: () => <div>Newsapp Mock</div>
}))

import App from './App'

describe('App component', () => {
  it('renders Newsapp', () => {
    render(<App />)
    expect(screen.getByText('Newsapp Mock')).toBeTruthy()
  })
})
