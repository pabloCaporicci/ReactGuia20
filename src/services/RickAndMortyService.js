import { API_RM } from "../constants/Api.constants";


class RickAndMortyService {

    async getAllCharacters(){
        const response = await fetch(API_RM.CHARATERS());
        //interceptor
        return response.json();
    }

    async getCharacterById(id){
        const response = await fetch(API_RM.CHARATERS_BY_ID(id));
        //interceptor
        return response.json();
    }
}
const servicio = new RickAndMortyService()
export default servicio ;