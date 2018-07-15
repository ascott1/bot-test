// tests to trigger results in travis builds

test('Sample test', () => {
  expect(!true).toEqual(false)
  expect(true).toEqual(!false)
})
