function reverse(string) {
    if(Number(string) || !string) return 'please pass valid input';
    if(string.length < 2) return string;

    let reversedString = ''
    
    for(let i = string.length - 1; i >= 0; i--) {
        reversedString += string[i];
    }
    
    return reversedString;
}