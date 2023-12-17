import axios from 'axios'
const getAnime=async (anime_id:number)=>{
    const options = {
        method: 'GET',
        url: `https://myanimelist.p.rapidapi.com/anime/${anime_id}`,
        headers: {
          'X-RapidAPI-Key':process.env.X_RapidAPI_Key,
          'X-RapidAPI-Host':process.env.X_RapidAPI_Host
        }
      };

    try {
        const response = await axios.request(options);
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
      
}
const searchAnimes=async (anime_name:string,nb_results:number,score:number)=>{
    const options = {
        method: 'GET',
        url: 'https://myanimelist.p.rapidapi.com/v2/anime/search',
        params: {
          q:anime_name,
          n:nb_results.toString(),
          score: score.toString()
        },
        headers: {
            'X-RapidAPI-Key':process.env.X_RapidAPI_Key,
            'X-RapidAPI-Host':process.env.X_RapidAPI_Host
        }
      };
      
      try {
          const response = await axios.request(options);
          console.log(response.data);
      } catch (error) {
          console.error(error);
      }
}
const getTopAnimes=async (byCategory:string="all")=>{ // default value will be "all"
     
const options = {
    method: 'GET',
    url: `https://myanimelist.p.rapidapi.com/anime/top/${byCategory}`,
    headers: {
        'X-RapidAPI-Key':process.env.X_RapidAPI_Key,
        'X-RapidAPI-Host':process.env.X_RapidAPI_Host
    }
};
  try {
      const response = await axios.request(options);
      console.log(response.data);
  } catch (error) {
      console.error(error);
  }
}
const getAnimeRecommendation=async (p:number)=>{
    const options = {
        method: 'GET',
        url: 'https://myanimelist.p.rapidapi.com/v2/anime/recommendations',
        params: {p:p.toString()},
        headers: {
            'X-RapidAPI-Key':process.env.X_RapidAPI_Key,
            'X-RapidAPI-Host':process.env.X_RapidAPI_Host
        }
      };
      
      try {
          const response = await axios.request(options);
          console.log(response.data);
      } catch (error) {
          console.error(error);
      }
}
const getSeasonalAnime=async (season:number)=>{
    const options = {
        method: 'GET',
        url: 'https://myanimelist.p.rapidapi.com/v2/anime/seasonal',
        params: {year: season.toString()},
        headers: {
            'X-RapidAPI-Key':process.env.X_RapidAPI_Key,
            'X-RapidAPI-Host':process.env.X_RapidAPI_Host
        }
      };
      
      try {
          const response = await axios.request(options);
          console.log(response.data);
      } catch (error) {
          console.error(error);
      }
}


module.exports={getAnime,searchAnimes,getTopAnimes,getAnimeRecommendation,getSeasonalAnime};