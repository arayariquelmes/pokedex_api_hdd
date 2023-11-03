import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PokemonService } from './services/pokemon.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [ PokemonService],
})
export class AppModule {}
