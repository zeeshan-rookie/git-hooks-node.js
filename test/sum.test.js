const sum = require('../src/sum')


it('it should return correct sum', () => {
   const result = sum(2, 8)
   expect(result).toBe(7)


})