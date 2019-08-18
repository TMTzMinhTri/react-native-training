interface source {
    id: string,
    name: string
  }
  
export interface Iarticle {
    author: string,
    content: string,
    description: string,
    publishedAt: Date,
    source: source
    title: string,
    url: string,
    urlToImage: string
  }
  
  export interface Iarticles {
    articles: Iarticle[]
  }