'use strict'
var _ = require('lodash');
const assert = require("assert");
//const chunk = require('lodash.chunk')

let testArray = [1, 5, 7, 22, 8, 9];
let twoArray = [1, 2, 3, 4, 5, 6];

let chunked = _.chunk(testArray, 2);
console.log(chunked);

let withouted = _.without(testArray, 22, 5, 1);
console.log(withouted)

let shuffled = _.shuffle(twoArray);
console.log(shuffled);

let concated = _.concat(testArray, twoArray, ["this is a string"]);
console.log(concated);

let reversed = _.reverse(testArray);
console.log(reversed);

if (typeof describe === 'function') {
    describe('chunk test', () =>{
        it ('should chunk the testArray', ()=>{
            assert.deepEqual(chunked, [ [1, 5], [7, 22], [8, 9] ] );
        });
    });
}
if (typeof describe === 'function') {
    describe('without test', () =>{
        it ('should without the testArray', ()=>{
            assert.deepEqual(withouted, [ 7, 8, 9]);
        });
    });
}

if (typeof describe === 'function') {
    describe('concat test', () =>{
        it ('should concat the testArray', ()=>{
            assert.deepEqual(concated, [ 1, 5, 7, 22, 8, 9, 1, 2, 3, 4, 5, 6, 'this is a string']);
        });
    });
}
if (typeof describe === 'function') {
    describe('reverse test', () =>{
        it ('should reverse the testArray', ()=>{
            assert.deepEqual(reversed, [ 9, 8, 22, 7, 5, 1 ]);
        });
    });
}