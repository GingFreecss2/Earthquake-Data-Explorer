const { Client } = require('@elastic/elasticsearch');
const config = require('config');

// get the credentials
const elasticConfig = config.get('elastic');

// Create a new instance of Elasticsearch Client with access credentials that point to the elasticsearch cluster
const client = new Client({
  cloud: {
    id: elasticConfig.cloudID,
  },
  auth: {
    apiKey: elasticConfig.apiKey
  },
});

// check if Elasticsearch cluster is up and available to process requests
client.ping()
  .then(response => console.log("You are connected to Elasticsearch!"))
  .catch(error => console.error("Elasticsearch is not connected."))

module.exports = client; 