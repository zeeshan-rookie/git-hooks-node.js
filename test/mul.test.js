const mul = require('../src/mult')


it('it should return correct mul', () => {
   const result = mul(2, 8)
   expect(result).toBe(16)


})