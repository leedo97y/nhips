export interface NewsContentsType {
  id: number;
  imgSrc?: string;
  headline: string;
  link?: string;
  date: string;
  pressInfo: string;
  content: string;
}

export interface RankingType {
  pressName?: string;
  pressImgSrc?: string;
  pressContent: PressContentType[];
}
export interface PressContentType {
  id: number;
  imgSrc?: string;
  headline: string;
  link?: string;
  viewCount?: string;
}
