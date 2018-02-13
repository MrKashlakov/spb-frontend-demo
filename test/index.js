'use strict';

const chai = require('chai');
chai.should();

describe('Unit test example', () => {
	it('2 + 2 = 4', () => {
		const result = 2 + 2;
		result.should.be.eq(4);
	});
});
