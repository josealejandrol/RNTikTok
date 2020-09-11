import React from 'react';

import styled from 'styled-components/native';

import Home from './src/screens/Home';

const Container = styled.SafeAreaView`
  flex: 1;
  background: green;
`;

const App = () => {
  return <Home />;
};

export default App;
