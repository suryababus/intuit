import { printSchema, type GraphQLSchema } from "graphql";

export const writeSchemaToFile = async (schema: GraphQLSchema) => {
  try {
    await Bun.write("./.schema.graphql", printSchema(schema));
  } catch (err) {
    console.error(err);
  }
};
