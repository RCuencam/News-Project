export interface INew {
    source: ISource;
    author: null | string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: Date;
    content: string;
    count?: number;
}

export interface ISource {
    id: null | string;
    name: string;
}

export interface INewsState {
    news: INew[];
}