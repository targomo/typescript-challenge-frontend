import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import renderer from 'react-test-renderer'

import store from 'store'

import App from './App'

describe('AppComponent', () => {
  test('should create', () => {
    const component = renderer.create(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    )

    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
