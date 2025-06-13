
// import fastifyPlugin from 'fastify-plugin'
// import fastifyMongo from '@fastify/mongodb'

// /**
//  * @param {FastifyInstance} fastify
//  * @param {Object} options
//  */
// async function dbConnector (fastify, options) {
//   fastify.register(fastifyMongo, {
//     url: 'mongodb://localhost:27017/test_database'
//   })
// }

// // Wrapping a plugin function with fastify-plugin exposes the decorators
// // and hooks, declared inside the plugin to the parent scope.
// export default fastifyPlugin(dbConnector)




// // ESM
// import fastifyPlugin from 'fastify-plugin'
// import fastifyMongo from '@fastify/mongodb'

// // /**
// //  * @param {FastifyInstance} fastify
// //  * @param {Object} options
// //  */
// async function dbConnector (fastify, options) {
//   fastify.register(fastifyMongo, {
//     url: 'mongodb://localhost:27017/UserManager'
//   })
// }
// export default fastifyPlugin(dbConnector)




import fastifyPlugin from 'fastify-plugin'
import fastifyMongo from '@fastify/mongodb'

async function dbConnector(fastify, options) {
    fastify.register(fastifyMongo, {
        url: 'mongodb://localhost:27017/user_manager'
    })
}

export default fastifyPlugin(dbConnector)




