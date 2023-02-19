export const optionsUrl = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'bae6f426f5msh285e366f58bc062p1884cdjsn719f1d588f94',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
  },
};
const urlToFetch = 'https://exercisedb.p.rapidapi.com/exercises';
export const urlBodyParts = 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList';
export const urlBodyPartsToFetch = 'https://exercisedb.p.rapidapi.com/exercises/bodyPart/';
export const urlById= 'https://exercisedb.p.rapidapi.com/exercises/exercise/';

export const fetchingData = async (url: string, options: any) => {
    try {
      const response = await fetch(url, options);
      return response.json();
    } catch (error) {
      console.log('error', error);
    }
  };