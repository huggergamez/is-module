exports.sus = function(susText) {
    return susText == 'sus' || susText == 'imposter';
}
exports.rich = function(money) {
    return money >= 1000000;
}
exports.year = function(year) {
    return year == new Date().getFullYear();
}