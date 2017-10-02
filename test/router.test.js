let app = require("../config/express")(),
    chai = require('chai'),
    request = require('supertest');

let expect = chai.expect;

describe('test the palindrome function', function () {
    describe('palindrome words', function () {

        it('correct palindrome: ABA', function (done) {
            request(app).get('/isPalindrome?test=ANA').expect(200, done)
        });

        it('correct palindrome: alula', function (done) {
            request(app).get('/isPalindrome?test=alula').expect(200, done)
        })
        it('incorrect palindrome: MACACO', function (done) {
            request(app).get('/isPalindrome?test=MACACO').expect(400,done)
        });
    })

    describe('param test', function () {
        
                it('not exist', function (done) {
                    request(app).get('/isPalindrome').expect(422, done)
                });
        
                it('empty', function (done) {
                    request(app).get('/isPalindrome?test=').expect(422, done)
                })
               
            })
});
