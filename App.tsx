import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import Config from "react-native-config"
import User from './src/screen/Users';

// Initialize Apollo Client
const client = new ApolloClient({
  uri: Config.BASE_URL,
  cache: new InMemoryCache()
});



const App = () => {
  return (
    <ApolloProvider client={client}>
      <SafeAreaView>
      <User />
      </SafeAreaView>
    </ApolloProvider>
  )
}

export default App