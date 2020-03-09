const { caculateTip, converFahToCel, converCelToFah, add } = require('../math')

test('Test Tip', () => {
  const total = caculateTip(10, .3)
  expect(total).toBe(13)
})

test('Test Tip default', () => {
  const total = caculateTip(10)
  expect(total).toBe(12.5)
})

test('Convert temperature Fah to Cel', () => {
  const tempatemperature = converFahToCel(32)
  expect(tempatemperature).toBe(0)
})

test('Convert temperature Cel to Fah', () => {
  const tempatemperature = converCelToFah(0)
  expect(tempatemperature).toBe(32)
})

test('Async test demo', (done) => {
  add(2, 3).then((sum) => {
    expect(sum).toBe(5)
    done()
  })
})

test('async and await syntaxt', async () => {
  const sum = await add(2, 6)
  expect(sum).toBe(8)
})