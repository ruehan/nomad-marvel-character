import axios from 'axios'

const BASE_URL = 'https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters';

export const getCharacters = async (searchQuery?: string) => {

    console.log('Get Characters')

    try{
        const response = await axios.get(BASE_URL, {
            params: {
                limit: 50,
                orderBy: 'modified',
                series: '24229,1058,2023',
                nameStartsWith: searchQuery || undefined,
            }
        });

        return response.data.data.results;
    } catch(error){
        console.log(error);
        return [];
    }
}

export const getCharacterDetail = async (id: number) => {
    try{
        const response = await axios.get(`${BASE_URL}/${id}`);
        return response.data.data.results[0];
    } catch(error){
        console.log(error);
        return null;
    }
}