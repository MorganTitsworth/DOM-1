function f(x) {
    return (x - 2) * 5 + 1;
}

function inv_f(x) {
    x - 1;
    x / 5;
    x + 2;

    return x;
}

console.log(f(5));

console.log(f(inv_f(5)));
