import React from 'react'
import '@testing-library/jest-dom'
import Header from '../../../components/Header'
import { shallow } from 'enzyme'

describe('<Header /> tests', () => {
  const setCountry = jest.fn()
  let wrapper = shallow(<Header setCountry={setCountry} />)

  beforeEach(() => {
    wrapper = shallow(<Header setCountry={setCountry} />)
  })

  test('should display the <Header /> component', () => {
    expect(wrapper).toMatchSnapshot()
  })

  test('should verify that error is shown when fetch button is pressed without input value', () => {
    wrapper.find('button').simulate('click')

    const alertMessage = wrapper.find('.alert').text().trim()
    expect(alertMessage).toBe('Enter the name of any country')
  })

  test('should call the setCountry and clear the input', () => {
    const value = 'guatemala'
    wrapper.find('input').simulate('change', { target: { value } })
    wrapper.find('button').simulate('click')
    expect(setCountry).toHaveBeenCalled()
    expect(wrapper.find('input').prop('value')).toBe('')
  })

  test('should check input change', () => {
    const input = wrapper.find('input')
    const value = 'costa rica'
    input.simulate('change', { target: { value } })
    expect(wrapper.find('input').prop('value')).toBe(value)
  })
})
