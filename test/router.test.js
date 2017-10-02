let app = require("../config/express"),
    chai = require('chai'),
    request = require('supertest');

let expect = chai.expect;

xdescribe('test the palindrome function', function () {
    describe('palindrome words', function () {

        it('correct palindrome: ABA', function (done) {
            request(app).get('/disPalindrome?test=ANA').expect(200, done)
        });

        it('correct palindrome: alula', function (done) {
            request(app).get('/isPalindrome?test=alula').expect(200, done)
        })
        it('incorrect palindrome: MACACO', function (done) {
            request(app).get('/isPalindrome?test=MACACO').expect(400,done)
        });
    })

});
