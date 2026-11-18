import { createServer } from 'node:http'
import { createSchema, createYoga } from 'graphql-yoga'

// 雛形です。スキーマは KIPPU-302 で .graphql ファイルに分割して作ります。
const schema = createSchema({
  typeDefs: /* GraphQL */ `
    type Query {
      health: String!
    }
  `,
  resolvers: {
    Query: {
      health: () => 'ok',
    },
  },
})

const yoga = createYoga({ schema })
const server = createServer(yoga)

const port = Number(process.env.PORT ?? 4000)
server.listen(port, () => {
  console.log(`BFF is running on http://localhost:${port}${yoga.graphqlEndpoint}`)
})
