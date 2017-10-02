let app = require("../config/express"),
    chai = require('chai'),
    request = require('supertest');

let expect = chai.expect;

describe('test the palindrome function', function () {
    describe('palindrome words', function () {

        it('correct palindrome: ABA', function (done) {
            request(app).get('/isPalindrome?test=ABA').end(function (err, res) {
                expect(res.statusCode).to.equal(200);
                done();
            });
        })
        it('correct palindrome: alula', function (done) {
            request(app).get('/isPalindrome?test=alula').end(function (err, res) {
                expect(res.statusCode).to.equal(200);
                done();
            });
        })
        it('incorrect palindrome: MACACO', function (done) {
            request(app).get('/isPalindrome?test=MACACO').end(function (err, res) {
                expect(res.statusCode).to.equal(200);
                done();
            });
        })

    })

    
})