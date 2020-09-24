const { ApolloServer, gql } = require('apollo-server')

const typeDefs = gql`
    # Pontos de Entrada
    type User {
        id: ID
        name: String!
        email: String!
        idade: Int
        salario: Float
        vip: Boolean
    }
    type Query {
        ola: String
        horaAtual: String
        userLogged: User
    }
`

const resolvers = {
    Query: {
        ola () {
            return 'Retorno de String'
        },
        horaAtual () {
            return `${new Date}`
        },
        userLogged () {
            return {
                id: 1,
                name: 'Edson',
                email: 'edson@email.com',
                idade: 33,
                salario: 1234.56,
                vip: true
            }
        }
    }
}

const server = new ApolloServer({ typeDefs, resolvers })

server.listen().then(({ url }) => {
    console.log(`Executando em ${url}`)
})