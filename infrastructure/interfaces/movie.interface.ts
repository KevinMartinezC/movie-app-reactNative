export interface Movie {
  id: number;
  title: string;
  description: string;
  releaseDate: string;
  rating: number;
  poster: string;
  backdrop: string;
}

export interface CompleteMovie extends Movie {
  genres: string[];
  duration: number;
  budget: number;
  originalTitle: string;
  productionCompanies: string[];
}

export interface Actor {
  id: number;
  name: string;
  character: string;
  avatar: string;
}
