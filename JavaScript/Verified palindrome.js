// Solution 1

function verify_palindrome(string){
    if(!string) return "string does not exist";

    return string.split("").reverse().join("") === string;
}

console.log(verify_palindrome(""));

//Solution 2

function verify_palindrome2(string){
    if (!string) return "string does not exist";

    for(let i = 0; i < string.length / 2; i++){
        if(string[i] !== string[string.length - 1 - i]){
            return false;
        }
    }

    return true;
}

console.log(verify_palindrome2("aa"));