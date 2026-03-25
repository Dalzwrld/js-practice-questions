//Swapping the first & last characters in a string

let str = "hello";

if (str.length < 1) {
    let first = str[0];
    let last = str[str.length -1];
    let middle = str.slice(1, str.length - 1);

    let newstr = last + middle + first;

    console.log(newstr);

} else {
    console.log(str);
}

