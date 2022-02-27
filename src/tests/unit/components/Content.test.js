import React from 'react'
import { shallow } from 'enzyme'
import Content from '../../../components/Content'
import { fetchData } from '../../../api'
jest.mock('../../../api')

describe('Content test', () => {
  const country = 'nicaragua'
  const data = {
    confirmed: { value: 18004 },
    recovered: { value: 0 },
    deaths: { value: 224 },
    lastUpdate: '2022-02-27T22:21:05.000Z',
  }

  const wrapper = shallow(<Content data={data} country={country} />)

  test('Should show Content component', () => {
    expect(wrapper).toMatchSnapshot()
  })

  test('should display the data upload items', () => {
    fetchData.mockReturnValue({ data })
    expect(wrapper).toMatchSnapshot()
  })

  test('should not display the Loader component', () => {
    expect(wrapper.find('Loader').exists()).not.toBe(true)
  })

  test('should display the Country prop within the H2 tag', () => {
    expect(wrapper.find('span').at(0).text()).toBe(country)
  })
})
