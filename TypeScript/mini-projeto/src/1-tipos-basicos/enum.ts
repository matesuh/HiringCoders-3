enum Permissoes {
    admin = 'ADMIN',
    editor = 'EDITOR',
    comum = 'COMUM'
}

enum Cores{
    red = '#ff0000',
    black = '#000',
    blue = '#000fff'
}


const usuario = {
    perfil: Cores.black,
    nivel: Permissoes.admin
}

console.log(usuario)