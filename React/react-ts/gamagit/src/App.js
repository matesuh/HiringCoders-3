import React from 'react'

function App(props) {
    return (
        <div>
            <h1>{props.title}</h1>
            <input
                name="usuario"
                id="usuario"
                class="usuario"
                placeholder="Usuário"
            />
        </div>
    )
}

export default App
