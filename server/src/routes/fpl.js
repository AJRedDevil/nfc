// our packages
const {getLogger} = require('../util');
const {
  fetchLeagueStandings,
  fetchH2HStandings,
  fetchGwOverallStandings,
} = require('../fpl');

const logger = getLogger(__filename);

async function routes(fastify, options) {
  fastify.get('/', async (request, reply) => reply.send({FPL: 'NFC'}));

  fastify.route({
    method: 'GET',
    url: '/classic/:id',
    schema: {
      querystring: {
        id: {type: 'integer'},
      },
    },
    handler: async (request, reply) => {
      try {
        const {id} = request.params;
        logger.info(`classic: ${id}`);
        const standings = await fetchLeagueStandings(id);
        reply.send(standings);
      } catch (err) {
        reply.send({error: err.message});
      }
    },
  });

  fastify.route({
    method: 'GET',
    url: '/h2h/:id',
    schema: {
      querystring: {
        id: {type: 'integer'},
      },
    },
    handler: async (request, reply) => {
      try {
        const {id} = request.params;
        logger.info(`h2h: ${id}`);
        const standings = await fetchH2HStandings(id);
        reply.send(standings);
      } catch (err) {
        reply.send({error: err.message});
      }
    },
  });

  fastify.route({
    method: 'GET',
    url: '/gwtable/:ids',
    schema: {
      querystring: {
        ids: {type: 'string'},
      },
    },
    handler: async (request, reply) => {
      try {
        const {ids} = request.params;
        const h2hids = JSON.parse(ids);
        logger.info(`GWTable H2HIds: ${h2hids}`);
        const standings = await fetchGwOverallStandings(h2hids);
        reply.send(standings);
      } catch (err) {
        reply.send({error: err.message});
      }
    },
  });
}

module.exports = routes;
