import React from 'react'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
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

describe('Reserve_Form', () => {
  const mockDispatch = jest.fn()
  const mockOnContinueToBilling = jest.fn()

  const renderForm = () => {
    render(
      <Reserve_Form
        availableTimes={['10:00', '11:00', '12:00']}
        dispatch={mockDispatch}
        onContinueToBilling={mockOnContinueToBilling}
        initialValues={{}}
      />
    )
  }

  // HTML5 Validation Tests
  test('should have required attribute on Name input', () => {
    renderForm()
    expect(screen.getByLabelText('Name')).toBeRequired()
  })

  test('should have required and type="email" attributes on Email input', () => {
    renderForm()
    const emailInput = screen.getByLabelText('Email')
    expect(emailInput).toBeRequired()
    expect(emailInput).toHaveAttribute('type', 'email')
  })

  test('should have type="tel" attribute on Phone Number input', () => {
    renderForm()
    expect(screen.getByLabelText('Phone Number')).toHaveAttribute('type', 'tel')
  })

  test('should have required attribute on Date input', () => {
    renderForm()
    expect(screen.getByLabelText('Date')).toBeRequired()
  })

  test('should have required attribute on Time input', () => {
    renderForm()
    expect(screen.getByLabelText('Time')).toBeRequired()
  })

  test('should have required attribute on Number of Diners input', () => {
    renderForm()
    expect(screen.getByLabelText('Number of Diners')).toBeRequired()
  })

  test('should have required attribute on Seating preference', () => {
    renderForm()
    // Radio buttons are handled differently. check if one of the group is required.
    // Here check the first radio button.
    const radioButtons = screen.getAllByRole('radio')
    expect(radioButtons[0]).toBeRequired()
  })


  // JavaScript Validation Tests
  test('should show error message for invalid user_name', async () => {
    renderForm()
    const nameInput = screen.getByLabelText('Name')
    fireEvent.blur(nameInput)
    await waitFor(() => {
      expect(screen.getByText('Required')).toBeInTheDocument()
    })

    fireEvent.change(nameInput, { target: { value: 'a' } })
    fireEvent.blur(nameInput)
    await waitFor(() => {
      expect(screen.getByText('Minimum 2 characters')).toBeInTheDocument()
    })
  })

  test('should show error message for invalid email', async () => {
    renderForm()
    const emailInput = screen.getByLabelText('Email')
    fireEvent.blur(emailInput)
    await waitFor(() => {
      expect(screen.getByText('Required')).toBeInTheDocument()
    })

    fireEvent.change(emailInput, { target: { value: 'invalid-email' } })
    fireEvent.blur(emailInput)
    await waitFor(() => {
      expect(screen.getByText('Invalid email format')).toBeInTheDocument()
    })
  })

  test('should show error message for invalid phone number', async () => {
    renderForm()
    const phoneInput = screen.getByLabelText('Phone Number')
    fireEvent.change(phoneInput, { target: { value: '123' } })
    fireEvent.blur(phoneInput)
    await waitFor(() => {
      expect(screen.getByText('Phone number not long enough.')).toBeInTheDocument()
    })
  })

  test('should disable submission button for invalid form', async () => {
    renderForm()
    const submitButton = screen.getByRole('button', { name: /Continue to Billing/i })
    expect(submitButton).toBeDisabled()
  })

  test('should enable submission button for valid form', async () => {
    renderForm()
    const user = userEvent.setup()

    await user.type(screen.getByLabelText('Name'), 'John Doe')
    await user.type(screen.getByLabelText('Email'), 'john.doe@example.com')
    await user.type(screen.getByLabelText('Phone Number'), '1234567890')
    
    // For date and time, need to select a value
    fireEvent.change(screen.getByLabelText('Date'), { target: { value: '2024-08-01' } })
    fireEvent.change(screen.getByLabelText('Time'), { target: { value: '10:00' } })

    // For dropdowns, need to select an option
    fireEvent.mouseDown(screen.getByLabelText('Number of Diners'))
    const dinersOption = await screen.findByText('2')
    fireEvent.click(dinersOption)

    // For radio buttons
    await user.click(screen.getByLabelText('Inside Seating'))

    await waitFor(() => {
      const submitButton = screen.getByRole('button', { name: /Continue to Billing/i })
      expect(submitButton).toBeEnabled()
    })
  })

  test('should call onContinueToBilling with form values on submit', async () => {
    renderForm()
    const user = userEvent.setup()

    await user.type(screen.getByLabelText('Name'), 'John Doe')
    await user.type(screen.getByLabelText('Email'), 'john.doe@example.com')
    await user.type(screen.getByLabelText('Phone Number'), '1234567890')
    fireEvent.change(screen.getByLabelText('Date'), { target: { value: '2024-08-01' } })
    fireEvent.change(screen.getByLabelText('Time'), { target: { value: '10:00' } })
    fireEvent.mouseDown(screen.getByLabelText('Number of Diners'))
    const dinersOption = await screen.findByText('2')
    fireEvent.click(dinersOption)
    fireEvent.mouseDown(screen.getByLabelText('Occasion'))
    const occasionOption = await screen.findByText('Birthday')
    fireEvent.click(occasionOption)
    await user.click(screen.getByLabelText('Inside Seating'))

    const submitButton = screen.getByRole('button', { name: /Continue to Billing/i })
    await waitFor(() => expect(submitButton).toBeEnabled())
    
    await user.click(submitButton)

    await waitFor(() => {
      expect(mockOnContinueToBilling).toHaveBeenCalledWith({
        user_name: 'John Doe',
        email: 'john.doe@example.com',
        phone: '1234567890',
        date: '2024-08-01',
        time: '10:00',
        num_of_diners: '2',
        occasion: 'Birthday',
        seating: 'inside',
      })
    })
  })
})
