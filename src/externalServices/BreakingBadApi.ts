import axios from "axios";

const baseUrl = "https://breakingbadapi.com/api"
  
const getAllEpisodes = async (name: string) => {
  const url = `${baseUrl}/episodes/`
  const {data} = await axios.get(url)
  return data
}

export { getAllEpisodes }