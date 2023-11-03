import { Body, Controller, Get, Post } from '@nestjs/common';
import { PokemonService } from './services/pokemon.service';
import { Pokemon } from './model/pokemon';


@Controller("pokemon")
export class AppController {
  constructor(private readonly pokemonService: PokemonService) {}

  @Get()
  getAll():Pokemon[]{
    return this.pokemonService.getAll();
  }
  @Post()
  save(@Body() pokemon:Pokemon):Pokemon{
    return this.pokemonService.save(pokemon);
  }
}
