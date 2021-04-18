import axios from 'axios';
import parsers from './parsers';

// Need reverse proxy from cors-anywhere (that's why we use herokuapp)
async function usStats() {
  const response = await axios.get(
    'https://shrouded-shore-30649.herokuapp.com/https://covidtracking.com/api/v1/us/current.json', {mode: 'no-cors',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
      'origin': 'x-requested-with'
    }}
  );

  return parsers.usStats(response.data);
}

async function statesData() {
  const response = await axios.get(
    'https://shrouded-shore-30649.herokuapp.com/https://covidtracking.com/api/v1/states/current.json', {mode: 'no-cors',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
      'origin': 'x-requested-with'
    }}
  );

  return parsers.stateTable(response.data);
}

async function stateStats(state) {
  const response = await axios.get(
    'https://shrouded-shore-30649.herokuapp.com/https://covidtracking.com/api/v1/states/current.json', {mode: 'no-cors',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
      'origin': 'x-requested-with'
    }}
  );
  //console.log("stateStats: " + response.data[0].state);
  return parsers.stateStats(state, response.data);
}

async function historicUS() {
  const response = await axios.get('https://shrouded-shore-30649.herokuapp.com/https://covidtracking.com/api/us/daily', {mode: 'no-cors',
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
    'origin': 'x-requested-with'
  }});

  return parsers.historicUS(response.data);
}

async function historicState(state) {
  const response = await axios.get(
    'https://shrouded-shore-30649.herokuapp.com/https://covidtracking.com/api/v1/states/daily.json', {mode: 'no-cors',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
      'origin': 'x-requested-with'
    }}
  );

  return parsers.historicState(state, response.data);
}

export default {
  usStats,
  stateStats,
  historicUS,
  historicState,
  statesData,
};