import React from 'react'
import { render, screen } from '@testing-library/react'
import Reserve_Form from './Core Comps/Reserve_Form'
import { initializeTimes, updateTimes } from './App'
import { fetchAPI } from './Core Comps/BookingApi'

jest.mock('./Core Comps/BookingApi', () => ({
  fetchAPI: jest.fn(),
}))


const localStorageMock = (() => {
  let store = {}
  return {
    getItem: (key) => store[key] || null,
    setItem: (key, value) => {
      store[key] = value.toString()
    },
    removeItem: (key) => {
      delete store[key]
    },
    clear: () => {
      store = {}
    },
  }
})()

Object.defineProperty(window, 'localStorage', {
  value: localStorageMock,
})

test('Renders the BookingForm heading', () => {
  render(<Reserve_Form />)
  const headingElement = screen.getByText('Book Now')
  expect(headingElement).toBeInTheDocument()
})

describe('initializeTimes', () => {
  it('returns the correct initial times', async () => {
    const expectedTimes = ['10:00', '11:00', '12:00']
    fetchAPI.mockResolvedValue(expectedTimes)
    const result = await initializeTimes()
    expect(result).toEqual(expectedTimes)
  })
})

describe('updateTimes', () => {
  it('returns the same value that is provided in the state', async () => {
    const expectedTimes = ['10:00', '11:00', '12:00']
    fetchAPI.mockResolvedValue(expectedTimes)
    const result = await updateTimes(null, '2024-07-29')
    expect(result).toEqual(expectedTimes)
  })
})

describe('localStorage', () => {
  it('should save to local storage', () => {
    const key = 'testKey'
    const value = 'testValue'
    localStorage.setItem(key, value)
    expect(localStorage.getItem(key)).toBe(value)
  })

  it('should read from local storage', () => {
    const key = 'testKey'
    const value = 'testValue'
    localStorage.setItem(key, value)
    const result = localStorage.getItem(key)
    expect(result).toBe(value)
  })
})
