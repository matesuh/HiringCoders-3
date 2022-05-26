let cat: string[] = [
    'logan',
    'doxes',
    'blabla'
]

function exibeCat(cat: string[]){
    return `Os gatos são: ${cat.join(', ')}`
}

console.log(exibeCat(cat))