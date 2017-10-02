const polindromeFunc = require('../service/palindrome');
const { check, validationResult } = require('express-validator/check');
module.exports = (app) => {

    app.get('/isPalindrome', [
        check('test').exists().not().isEmpty()
    ], function (req, res, next) {
        try {
            validationResult(req).throw();

            if (polindromeFunc(req.query.test))
                res.status(200).json("True");
            else
                res.status(400).json("FALSE");
        } catch (err) {
            res.status(422).json({ error: "test is required" });
        }
    })

}