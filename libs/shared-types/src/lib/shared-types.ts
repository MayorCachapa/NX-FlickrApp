export interface FeedItem {
  /** 
   * Title of the feed
   */
  title: string
  /**
   * URL of the publication
   */
  link: string
  /**
   * Object containing the media URL for the image
   */
  media: {
    /**
     * URL for the image source
     */
    m: string
  }
  date_taken?: string
  description?: string
  published?: string
  /**
   * String of the author
   */
  author: string
  /**
   * Author ID to add to URL query in Link
   */
  author_id: string
  /**
   * String with tags
   */
  tags: string
}

export interface FeedResponse {
  items: FeedItem[]
}