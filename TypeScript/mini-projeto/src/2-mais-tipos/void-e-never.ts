function principal(): void{
    console.log('executando...')
}

principal()

// laços de repetição infinitos
//ou funções que disparam erros

function funcQueNuncaRetorna(): never{
    throw new Error('ola')
}

funcQueNuncaRetorna()