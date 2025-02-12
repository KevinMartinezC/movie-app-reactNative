import { Actor } from "../interfaces/movie.interface";
import { MovieDBCast } from "../interfaces/moviedb-credits.reponse";

export class CastMapper {
  static fromMovieDBCastToEntity(actor: MovieDBCast): Actor {
    return {
      id: actor.id,
      name: actor.name,
      character: actor.character ?? "No character",
      avatar: actor.profile_path
        ? `https://image.tmdb.org/t/p/w500${actor.profile_path}`
        : "https://i.stack.imgur.com/l60Hf.png",
    };
  }
}
