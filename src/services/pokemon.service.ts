import { Injectable } from '@nestjs/common';
import { Pokemon } from 'src/model/pokemon';

@Injectable()
export class PokemonService {
    private pokemon:Pokemon[]=[];
    getAll():Pokemon[]{
        return this.pokemon;
    }
    save(obj:Pokemon):Pokemon{
        this.pokemon.push(obj);
        return obj;
    }
}
