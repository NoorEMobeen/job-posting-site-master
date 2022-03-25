import './App.css';
import { ApolloClient, ApolloProvider, InMemoryCache, HttpLink } from '@apollo/client';
import GetJobs from './Components/GetJobs';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
  uri: 'https://api.graphql.jobs',
  }),
});

function App() {
  return (
    <div className="App">
      <ApolloProvider client={client}>
        <GetJobs />
      </ApolloProvider>
    </div>
  );
}

export default App;
