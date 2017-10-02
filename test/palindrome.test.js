'use strict';

let polindromeFunc = require('../service/palindrome'),
    chai = require('chai'),
    request = require('supertest');

let expect = chai.expect;

describe('test the palindrome function', function () {
    describe('palindrome words', function () {

        it('correct palindrome: ABA', function (done) {
            let flag = polindromeFunc("ABA");
            expect(flag).to.be.true;
            done()
        })
        it('correct palindrome: alula', function (done) {
            let flag = polindromeFunc("alula");
            expect(flag).to.be.true;
            done()
        })
        it('incorrect palindrome: MACACO', function (done) {
            let flag = polindromeFunc("MACACO");
            expect(flag).to.be.false;
            done()
        })

    })

    describe('palindrome phrase', function () {

        it('correct palindrome: A MAN A PLAN A CANAL PANAMA', function (done) {
            let flag = polindromeFunc("A MAN A PLAN A CANAL PANAMA");
            expect(flag).to.be.true;
            done()
        })
        it('correct palindrome: A car, a man, a maraca', function (done) {
            let flag = polindromeFunc("A car, a man, a maraca");
            expect(flag).to.be.true;
            done()
        })
        it('incorrect palindrome: its not a polindrome', function (done) {
            let flag = polindromeFunc("its not a polindrome");
            expect(flag).to.be.false;
            done()
        })

    })

    describe('palindrome number', function () {

        it('correct palindrome: 121', function (done) {
            let flag = polindromeFunc("121");
            expect(flag).to.be.true;
            done()
        })
        it('correct palindrome: 123321', function (done) {
            let flag = polindromeFunc("123321");
            expect(flag).to.be.true;
            done()
        })
        it('incorrect palindrome: 1234', function (done) {
            let flag = polindromeFunc("its not a polindrome");
            expect(flag).to.be.false;
            done()
        })

    })
})