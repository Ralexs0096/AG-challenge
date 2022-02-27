import { baseUrl } from '../../../api/'

describe('Covid API', () => {
  test('axios should be configured with the Covid API', () => {
    expect(baseUrl).toBe('https://covid19.mathdro.id/api')
  })
})
