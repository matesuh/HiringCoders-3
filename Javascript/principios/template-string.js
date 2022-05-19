let meuNome = 'Matheus'
let meuSobrenome = 'Santos'
let minhaProfissao = 'Full Stack Developer'

// sem template string
console.log(
    'Olá meu nome é ' +
        meuNome +
        ' ' +
        meuSobrenome +
        ' e minha profissão é: ' +
        minhaProfissao
)

// com template string
console.log(
    `Olá meu nome é ${meuNome} ${meuSobrenome} e minha profissão é: ${minhaProfissao}`
)

console.log(`O resultado da soma de 1 + 1 é: ${1 + 1}`)
console.log(`O objeto json ${{ chave: 'valor' }} `)

let meuObjeto = {
    chave: 'novo valor'
}
