import React from 'react';
import NavigationStatus from './components/NavigationStatus';
import CollisionControl from './components/CollisionControl';
import './App.css';
import { Container, Grid } from '@mui/material';

function App() {
  return (
    <Container className="App">
      <h1>Robot Control Dashboard</h1>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <NavigationStatus />
        </Grid>
        <Grid item xs={12} md={6}>
          <CollisionControl />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
