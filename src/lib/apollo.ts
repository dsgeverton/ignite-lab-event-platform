import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4og23dr06sy01w7g05m92lc/master',
    cache: new InMemoryCache(),
})