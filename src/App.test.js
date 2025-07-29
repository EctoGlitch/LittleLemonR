import React from 'react';
import { render, screen } from '@testing-library/react'
import Reserve_Form from './Core Comps/Reserve_Form'
import { initializeTimes, updateTimes } from './App'

test('Renders the BookingForm heading', () => {
  render(<Reserve_Form />)
  const headingElement = screen.getByText('Book Now')
  expect(headingElement).toBeInTheDocument()
})

describe('initializeTimes', () => {
  it('returns the correct initial times', () => {
    const expectedTimes = ['10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00'];
    const result = initializeTimes()
    expect(result).toEqual(expectedTimes)
  })
})

describe('updateTimes', () => {
  it('returns the same value that is provided in the state', () => {
    const state = ['10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00'];
    const action = '2024-07-29';
    const result = updateTimes(state, action)
    expect(result).toEqual(state)
  })
})
