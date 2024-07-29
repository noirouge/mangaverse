interface IBasicName {
  name: string;
};

interface IHandlerImg {
  src: string;
  base64: string;
};

interface IMangas {
  id: string;
  name: string;
  description: string;
  genres: IBasicName[];
  banner?: IHandlerImg;
  banner64: string;
  year: number;
  cover?: IHandlerImg;
  cover64: string;
  type: number;
  demography: number;
  story_status: number;
  status: number;
  created_date: number;
  updated_date: number;
};

interface IFullManga {
  id: string;
  name: string;
  description: string;
  genres: IBasicName[];
  banner64: string;
  cover64: string;
  views: number;
  stars: number;
  year: number;
  type: number;
  demography: number;
  story_status: number;
  chapters: number;
};

interface IMangaTreending {
  id: string;
  name: string;
  description: string;
  type: number;
  demography: number;
  story_status: number;
  views: number;
  stars: number;
  chapters: number;
};

interface IMangaStars {
  id: string;
  rate: number;
  status: number;
  mangaId: number;
  userId: number;
};

interface IMangaViews {
  id: string;
  userId: string;
  mangaId: string;
  isVisitor: boolean;
  created_date: number;
};

interface IMangaChapter {
  id: string;
  episode: number;
  photos: IChapterPhotos[];
};

interface IChapterPhotos {
  id: string;
  order: number;
  base64: string;
};

interface IContinueChapters{
id: string;
chapterId: string;
mangaId: string;
userId: string;
created_date: number;
updated_date: number;
};

interface IVisitor{
id: string;
};

export type {
  IMangas,
  IMangaTreending,
  IMangaChapter,
  IMangaViews,
  IMangaStars,
  IFullManga,
  IContinueChapters,
};
