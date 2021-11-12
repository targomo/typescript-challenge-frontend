import React from 'react'
import { Provider } from 'react-redux'
import renderer from 'react-test-renderer'

import store from 'store'

import Home from './Home'

describe('HomeComponent', () => {
  test('should create', () => {
    const component = renderer.create(
      <Provider store={store}>
        <Home />
      </Provider>
    )

    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
