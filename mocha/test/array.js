const assert = require('assert')
const chai = require('chai')
const spies = require('chai-spies')
const { expect } = chai

chai.use(spies)

// describe('Array', () => {
//   describe('#toString node', () => {
//     it('returns the string representation', () => {
//       const arrayToTest = [1, 2]

//       assert.equal(
//         arrayToTest.toString(),
//         '1,2'
//       )
//     })
//   })  

//   describe('#toString chai', () => {
//     it('returns the string representation', () => {
//       const arrayToTest = [1, 2]

//       expect(arrayToTest.toString()).to.equal('1,2')
//     })

//     it('is called once', () => {
//       const arrayToTest = [1, 2]
//       chai.spy.on(arrayToTest, 'toString')

//       const result = arrayToTest.toString()
//       expect(arrayToTest.toString).to.have.been.called()
//     })
//   })

//   describe('.length', () => {
//     it('has the expected length', () => {
//       const arrayToTest = [1,2]
      
//       expect(arrayToTest).to.have.lengthOf(2)
//     })
//   })
// })

function arrayAMinusculas(arr) {
  const str = arr.toString()
  return str.toLowerCase()
}

describe('arrayAMinusculas', () => {
  it('returns representation in lowercase', () => {
    const result = arrayAMinusculas(['Uno', 'Dos'])
    expect(result).to.equal('uno,dos')
  })

  it('uses array\'s toString', () => {
    const arrayToTest = ['Uno', 'Dos']

    chai.spy.on(arrayToTest, 'toString')

    const result = arrayAMinusculas(arrayToTest)
    expect(arrayToTest.toString).to.have.been.called.with(undefined)
  })
})