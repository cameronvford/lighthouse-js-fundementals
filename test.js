/*
 * Programming Quiz: JuliaJames (4-1)
 */

var x = 1;

while (x < 21) {
    if (x % 3 !== 0 && x % 5 !== 0){
        console.log(x);
        x = x + 1;
    } else if (x % 3 !== 0 && x % 5 === 0){
        console.log('James');
        x = x + 1;
    } else if (x % 3 === 0 && x % 5 !== 0){
        console.log('Julia');
        x = x + 1;
    } else {
        console.log('JuliaJames');
        x = x + 1;
    }
}