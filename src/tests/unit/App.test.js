import App from '../../App'
import { render, shallow } from 'enzyme'

describe('App test', () => {
  let wrapper = shallow(<App />)

  beforeEach(() => {
    wrapper = shallow(<App />)
  })

  test('should display the App component', () => {
    expect(render(App)).toBeTruthy()
  })

  test('should display <Header /> and <Content />', () => {
    expect(wrapper.find('Header').exists()).toBe(true)
    expect(wrapper.find('Content').exists()).toBe(true)
  })
})
