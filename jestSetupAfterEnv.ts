import 'jest-preset-angular/setup-jest'

// localstorage mock in case you need it
const storageMock = () => {
  let storage: any = {}

  return {
    getItem: (key: any) => (key in storage ? storage[key] : null),
    setItem: (key: any, value: any) => (storage[key] = value || ''),
    removeItem: (key: any) => delete storage[key],
    clear: () => (storage = {}),
  }
}

Object.defineProperty(window, 'localStorage', { value: storageMock() })
Object.defineProperty(window, 'sessionStorage', { value: storageMock() })

Object.defineProperty(window.URL, 'createObjectURL', {
  value: jest.fn(() => {
    return ''
  }),
})
