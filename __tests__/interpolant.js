var scss = require('..');
var fs = require('fs');
var path = require('path');

var fixture = function(name) {
    return fs.readFileSync(
        path.join(__dirname, 'fixture', name)
    );
}

describe('interpolant', function() {
    it('should tokenize an interpolant', function() {
        const tree = scss.tokenize(fixture('interpolant.scss'));
        expect(tree).toMatchSnapshot();
    });
});
