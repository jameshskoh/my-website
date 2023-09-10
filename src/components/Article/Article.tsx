export type ArticleProps = {
  content: ArticleContent;
};

export function Article({ content }: ArticleProps) {
  return <>{content.url}</>;
}

export type ArticleContent = {
  title: string;
  url: string;
  contentList: Content[];
};

export type Content = HeaderContent | ParagraphContent | ImageContent;

export enum ContentType {
  Header = "HEADER",
  Paragraph = "PARAGRAPH",
  Image = "IMAGE",
}

export type Link = {
  label: string;
  url: string;
};

//region ContentType
type BaseContent<ContentType> = {
  type: ContentType;
};

type HeaderContent = BaseContent<ContentType.Header> & { header: string };

type ParagraphContent = BaseContent<ContentType.Paragraph> & {
  paragraph: string;
};

type ImageContent = BaseContent<ContentType.Image> & { imageUrl: string };
//endregion ContentType
