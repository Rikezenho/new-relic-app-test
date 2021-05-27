import React from "react"

export const Users = (props) => {
    React.useEffect(() => {
        window.newrelic = window.newrelic || {};
        if (window.newrelic.interaction) {
            window.newrelic.interaction().setAttribute('username', `Usuário Teste ${Math.floor(Math.random() * 100) + 1}`)
        } else {
            console.log('New Relic interaction not found')
        }
    }, [])
    return <h1 id="users-page-title">Users Page</h1>
}