import axios from 'axios';

export const exerciseOptions = {
  method: 'GET',
  url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
  },
};
export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
  },
};

const options = {
  method: 'GET',
  url: 'https://exerciseapi3.p.rapidapi.com/search/muscles/',
  headers: {
    'X-RapidAPI-Key': 'bae6f426f5msh285e366f58bc062p1884cdjsn719f1d588f94',
    'X-RapidAPI-Host': 'exerciseapi3.p.rapidapi.com',
  },
};
const optionsUrl = {
  method: 'GET',
  url: 'https://youtube-search-and-download.p.rapidapi.com/search?query=back',
  headers: {
    'X-RapidAPI-Key': 'bae6f426f5msh285e366f58bc062p1884cdjsn719f1d588f94',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  },
};
const ytUrl = 'https://youtube-search-and-download.p.rapidapi.com/search?query=back';
      const fetch = 'https://exercisedb.p.rapidapi.com/exercises';


export const fetchData = async () => {
  const response = await axios.request(options);
  return response.data;
};

export const fetchUrl = async () => {
  const response = await axios.request(optionsUrl);
  return response.data;
};
