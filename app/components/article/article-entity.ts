type ImageProps = {
  url: string;
  width: number;
  height: number;
};

export type ImageType = {
  full: ImageProps | null;
  medium: ImageProps | null;
  small: ImageProps | null;
};

export type ArticleType = {
  id: string;
  publisher_id: string;
  status: "publish" | "draft";
  created_at: string;
  updated_at: string;
  user_id: string;
  original_id: string;
  slug: string;
  title: string;
  type_id: string;
  summary: string;
  description: string;
  recommended: number;
  image: ImageType | null;
  read_stats: {
    minutes: number;
  };
  terms: string[];
  publishers: {
    title: string;
    logo_url: string;
    web_url: string;
    slug: string;
  };
  author: {
    slug: string;
    name: string;
  } | null;
  link: string;
  metadata: {
    answer?: string;
    source?: string;
    link?: string;
  } | null;
  gpt?: {
    summary: string;
    createdAt: string;
  } | null;
};
