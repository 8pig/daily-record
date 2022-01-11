const foo = function () {
    let a = 1;
    return function () {
        a++;
        console.log(a);
    }
}
const t1 = foo();
t1()
t1()
t1()
t1()
t1()
for (var i = 0; i < 10; i++) {
    ((e) => {
        setTimeout(() => {
            console.log(e);
        }, 10)
    })(i)

}
