require('chai/register-should');
require('chai/register-expect');
require('chai-as-promised');
const tests = require('../src/tests');


describe('all tests', () => {
    


    it('Test One', (done) => {
        expect(tests.one.then, "test one did not return a promise").to.exist;
        tests.one().then(res => {
            res.should.equal(60);
            done();
        })
    })

    it('Test Two', (done) => {
        expect(tests.two.then, "test two did not return a promise").to.exist;
        tests.two().then(res => {
            res.should.equal('Kotlin');
            done();
        })
    })

    it('Test three', (done) => {
        expect(tests.three.then, "test three did not return a promise").to.exist;
        tests.three().then(res => {
            res.should.equal('Gareth');
            done();
        })
    })

    it('Test four', (done) => {

        tests.four().catch(err => {
            err.should.equal('Phil has an invalid location');
            done();
        }).then(res => {
            expect(res, "was expecting an error to be thrown").to.not.exist;
        })
        
    })

    it('Test five', (done) => {
        tests.five(12).then(res => {
            res.should.deep.equal([0,1,1,2,3,5,8,13,21,34,55,89])
            done()
        })
    })

    it('Test five with a larger number', (done) => {
        tests.five(30).catch(res => {
            expect(res).to.exist;
            done();
        })
    })
})