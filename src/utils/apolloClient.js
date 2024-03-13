import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';

const createApolloClient = () => {
    const httpLink = createHttpLink({
        uri: 'http://192.168.1.13:5001/graphql',
    });

    return new ApolloClient({
        link: httpLink,
        cache: new InMemoryCache(),
    });
};

export default createApolloClient;

