//5. Swapping the first & last characters in a string.

let str = "hello";

if (str.length < 1) {
    let first = str[0];
    let last = str[str.length -1];
    let middle = str.slice(1, str.length - 1);

    let newStr = last + middle + first;

    console.log(newStr);

} else {
    console.log(str);
}

