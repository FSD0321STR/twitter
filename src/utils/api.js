import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080/",
});

const token = localStorage.getItem('token');

api.defaults.headers.common['Authorization'] = token ? `Bearer ${token}` : '';



const API_URL = 'http://localhost:8080';

const postTweet = (tweet) => {
  return fetch(`${API_URL}/Tweet`, {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify({ body: tweet })
    //body: JSON.stringify(tweet),
  }).then(res => res = res.json())
    .catch(error => console.error('Error:', error))
}



const getAllTweets = () => {
  return fetch(`${API_URL}/tweets`, {
    method: 'GET',
    mode: 'cors',
    headers: {
      'Authorization': `Bearer ${token}`
    }
  })
    .then((response) => response.json())
    .catch(error => console.error('Error:', error));
}

const deleteTweet = (tweetId) => {
  return fetch(`${API_URL}/tweet/${tweetId}`, {
    method: 'DELETE',
    mode: 'cors',
    headers: {
      'Authorization': `Bearer ${token}`
    }
  }).then(res => res = res.json())
}



const login = ({ email, password }) => {
  return fetch(`${API_URL}/login`, {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password })
  }).then(res => res = res.json())
    .catch(error => console.error('Error:', error))
}

const register = ({ email, password, firstName, lastName, userName, birthDate }) => {
  return fetch(`${API_URL}/register`, {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password, firstName, lastName, userName, birthDate })
  }).then(res => res = res.json())
    .catch(error => console.error('Error:', error))
}


export default {
  postTweet,
  getAllTweets,
  deleteTweet,
  login,
  register,
}