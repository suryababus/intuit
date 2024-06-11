import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { mergeSchemas } from "@graphql-tools/schema";
import { countriesSchema } from "./src/resolvers/countries";
import { writeSchemaToFile } from "./writeSchemaToFile";

const schema = mergeSchemas({ schemas: [countriesSchema] });
console.log(schema.description);
const server = new ApolloServer({
  schema,
});

writeSchemaToFile(schema);

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);
