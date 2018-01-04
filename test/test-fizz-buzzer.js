const should = require('chai').should();

const fizzBuzzer = require('../fizzBuzzer');

describe('fizzBuzzer', function() {
	it('should provide fizz buzz output based on the arg', function() {
    	const normalCases = [
    		{num: 30, expected: 'fizz-buzz'},
      		{num: 10, expected: 'buzz'},
      		{num: 6, expected: 'fizz'}
    	];
    	normalCases.forEach(function(input) {
      		const answer = fizzBuzzer(input.num);
      		answer.should.equal(input.expected);
		});
	});

	it('should raise an error if arg is not a number', function() {
		const badInputs = [
      		['a'],
      		['1'],
      		[false]
    	];
    	badInputs.forEach(function(input) {
      		(function() {
         		fizzBuzzer(input[0])
      		}).should.throw(Error);
    	});
	});
});