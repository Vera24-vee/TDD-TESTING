// const assertEqual = require('assert');
// const {multiply} = require('../multiply');
// 
// describe('multiply()', () => {
//   it('should return 1 when multiplying 1 * 1', () => {
//     assertEqual(multiply(1, 1), 1);
//   });
// });

// const assertEqual = require('assert');
// const { multiply } = require('../multiply');
// describe('multiply',()=> {
//     it('should return 4 when multipling 2 * 2' , () => {
//       assertEqual(multiply(2, 2) ,4) ;
//     });
// });


// const assertEqual = require('assert');
// const { multiply } = require('../multiply');
// describe('multiply',()=> {
//     it('should return 9 when multipling 3 * 3' , () => {
//      assertEqual(multiply(3, 3), 9) ;
//     });
// });

const assertEqual = require('assert');
const { multiply } = require('../multiply');
describe('multiply',()=> {
    it('should return 16 when multipling 4 * 4' , () => {
     assertEqual(multiply(4 , 4), 16) ;
    });
});



