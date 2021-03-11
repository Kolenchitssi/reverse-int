module.exports = function reverse(n) {
    let str = String(Math.abs(n));

    let rev = str.split("").reverse().join("");
    console.log(n, str, rev)
    return rev;
}
