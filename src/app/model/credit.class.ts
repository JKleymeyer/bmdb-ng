import { Movie } from './movie.class';
import { Actor } from './actor.class';

export class Credit {
    id: number;
    movieId: Movie;
    actorId: Actor;
    role: string;

    constructor(id: number = 0, movieId: Movie = new Movie(), actorId: Actor = new Actor(),
        role: string = "") {
        this.id = id;
        this.movieId = movieId;
        this.actorId = actorId;
        this.role = role;
    }
}
