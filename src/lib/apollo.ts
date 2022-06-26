import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4vwwzpq1xsj01uk6z69bfpz/master',
    cache: new InMemoryCache(),
})