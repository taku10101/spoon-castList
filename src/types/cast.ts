export interface Media {
  id: string;
  contentData: {
    id: number;
    authorId: number;
    title: string;
    media: string[];
    likeCount: number;
    commentCount: number;
    duration: number;
  };
  contentType: string;
  created: string;
  type: string;
  visibleOption: string;
  isPin: boolean;
  contentSource: string;
  likeStatus: boolean;
  plan: null;
}

export interface SpoonCastResponse {
  userId: number;
  results: Media[];
  offset: string;
}
