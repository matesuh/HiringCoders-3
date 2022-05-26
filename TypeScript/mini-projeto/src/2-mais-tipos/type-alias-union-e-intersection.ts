type User = {
    name: string,
    lastName: string,
    dateOfBirth: string,
    age?: number
}

const matheus: User ={
    name: 'Matheus',
    lastName: 'Santos',
    dateOfBirth: '16/04/1999',
    age: 23
}

// union types
// | (como se fosse o ||)

type LogLevel = 'info' | 'error' | 'debug'

function logMessage(message: string, level: LogLevel) {
    console.log(`${level} - ${message}`)
}

logMessage('uma mensagem info', 'error')
logMessage('uma mensagem info', 'info')
logMessage('uma mensagem info', 'debug')

// logMessage('uma mensagem info', 'erro')

//intersection types: &

type About = {
    bio: string
    interests: string[]
}

type Profile = User & About
const userWithProfile: Profile = {
    name: 'Matheus',
    lastName: 'Santos',
    dateOfBirth: '16/04/1999',
    bio: 'Olá, meu nome é Matheus',
    interests:['programming', 'music', 'gaming']
}

type ComposedProfile = User & {
    log: LogLevel
}

console.log(userWithProfile)