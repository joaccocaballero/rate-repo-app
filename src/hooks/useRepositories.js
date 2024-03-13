import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = () => {
    const {data ={ }, loading, refetch} = useQuery(GET_REPOSITORIES)
    const { repositories = null} = data;

    const repositoriesNodes = repositories
    ? repositories.edges.map(edge => edge.node) : []
    console.log(data)

    return {loading, repositories: repositoriesNodes, refetch};
}

export default useRepositories