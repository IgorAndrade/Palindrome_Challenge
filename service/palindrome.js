module.exports = (str) => {
    var nopunctuation = str.replace(/\W/g,"");
    var nospaces = nopunctuation.replace(/\s/g,"").toLowerCase();
    return nospaces === nospaces.split("")
        .reverse()
        .join("");
};