const convert = require('@openapi-contrib/json-schema-to-openapi-schema');
const { compileFromFile } = require('json-schema-to-typescript');
const { writeFileSync } = require('fs');
const schema = require('./example/schema.json');

(async () => {
  const openAPISchema = await convert(schema);
  writeFileSync('./example/open-api.yml', JSON.stringify(openAPISchema, null, 2));

  const type = await compileFromFile('./example/schema.json');
  writeFileSync('./example/types.d.ts', type);
})();
