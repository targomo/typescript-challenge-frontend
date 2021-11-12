import React from 'react'
import { Provider } from 'react-redux'
import renderer from 'react-test-renderer'

import store from 'store'

import Detail from './Detail'

describe('DetailComponent', () => {
  test('should create', () => {
    const component = renderer.create(
      <Provider store={store}>
        <Detail />
      </Provider>
    )

    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
