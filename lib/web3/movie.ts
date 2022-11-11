import * as borsh from '@project-serum/borsh';

export class Movie {
  movieId: string;
  rating: number;
  description: string;

  constructor(movieId: string, rating: number, description: string) {
    this.movieId = movieId;
    this.rating = rating;
    this.description = description;
  }

  static mocks: Movie[] = [
    new Movie(
      '12342134sfewr234',
      5,
      `For a movie shot entirely in prison where there is no hope at all, shawshank redemption's main massage and purpose is to remind us of hope, that even in the darkest places hope exists, and only needs someone to find it. Combine this message with a brilliant screenplay, lovely characters and Martin freeman, and you get a movie that can teach you a lesson everytime you watch it. An all time Classic!!!`
    ),
    new Movie(
      '34453453sddfrwe',
      5,
      `One of Hollywood's greatest critical and commercial successes, The Godfather gets everything right; not only did the movie transcend expectations, it established new benchmarks for American cinema.`
    ),
    new Movie(
      '1g63ghu545hbf4',
      4,
      `The Godfather: Part II is a continuation of the saga of the late Italian-American crime boss, Francis Ford Coppola, and his son, Vito Corleone. The story follows the continuing saga of the Corleone family as they attempt to successfully start a new life for themselves after years of crime and corruption.`
    ),
    new Movie(
      '7445huyj6h5yt',
      5,
      `The Dark Knight is a 2008 superhero film directed, produced, and co-written by Christopher Nolan. Batman, in his darkest hour, faces his greatest challenge yet: he must become the symbol of the opposite of the Batmanian order, the League of Shadows.`
    ),
  ];

  borshInstructionSchema = borsh.struct([
    borsh.u8('variant'),
    borsh.str('movieId'),
    borsh.u8('rating'),
    borsh.str('description'),
  ]);

  serialize(): Buffer {
    const buffer = Buffer.alloc(1000);
    this.borshInstructionSchema.encode({ ...this, variant: 0 }, buffer);
    return buffer.slice(0, this.borshInstructionSchema.getSpan(buffer));
  }
}
