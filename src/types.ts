// Firefox Android Home Recommendation
// this is the type we return to Firefox
export type FAHRecommendation = {
  url: string;
  publisher: string;
  imageUrl: string;
  title: string;
  timeToRead: number | null;
  category: string;
};

export type FAHRecommendationResponse = {
  recommendations: FAHRecommendation[];
};

// the below types are those coming from Client API
export type ClientApiResponse = {
  data: {
    getSlateLineup: {
      slates: ClientApiSlate[];
    };
  };
};

export type ClientApiDomainMeta = {
  name: string;
};

export type ClientApiSyndicatedArticle = {
  publisher: {
    name: string;
  };
};

export type ClientApiCorpusItem = {
  title: string;
  imageUrl: string;
};

export type ClientApiItem = {
  resolvedUrl: string;
  timeToRead: number | null;
  domainMetadata: ClientApiDomainMeta | null;
  syndicatedArticle: ClientApiSyndicatedArticle | null;
  corpusItem: ClientApiCorpusItem;
};

export type ClientApiRecommendation = {
  item: ClientApiItem;
};

export type ClientApiSlate = {
  id: string;
  recommendations: ClientApiRecommendation[];
};
