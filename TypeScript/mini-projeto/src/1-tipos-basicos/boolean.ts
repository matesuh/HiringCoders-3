let estaAtivo: boolean

//...

estaAtivo = true

function mapStatus(status: boolean){
    if (status){
        return `Usuário está ativo`
    } else {
        return `Usuário NÃO está ativo`
    }
}

mapStatus(true)