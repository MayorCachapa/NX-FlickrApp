export interface FeedItem {
  /** 
   * Title of the feed
   */
  title: string
  /**
   * URL of the publication
   */
  link: string
  media: {
    /**
     * URL for the image source
     */
    m: string
  }
  date_taken: string
  description: string
  published: string
  /**
   * String of the author
   */
  author: string
  author_id: string
  /**
   * String with tags
   */
  tags: string
}

export interface FeedResponse {
  items: FeedItem[]
}