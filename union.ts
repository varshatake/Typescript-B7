var sn: string | number | boolean;

sn = 'Codemind';
sn = 7;

sn = true


export function formatCommandLine(input: string | string[]) {
    let line = ''

    if(typeof input === 'string') {
        line = input.trim();
    }
    else {
        line = input.map(x => x.trim()).join(' ');
        // this map method creates a new array with the results 
        // input.map is not a function 
    }

    return line;
}

console.log(formatCommandLine('hello '));
console.log(formatCommandLine(['hello ', 'world ']));
console.log(formatCommandLine(['123456']));

//make type as union
type Tests = 
string | string[]  | undefined | boolean

function newTypeAnotation(input : Tests) {

}

newTypeAnotation(true);