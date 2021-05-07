import Parser from 'rss-parser'
import { Request, Response } from 'express'

import * as fs from 'fs'

export default {
  async index(req: Request, res: Response) {
    try {
      const parser = new Parser({
        customFields: {
          feed:  ['enclosure', 'itunes'],
          item: [
            ['itunes:image', 'thumbnail']
          ]
        }
      })
  
      const feed = await parser.parseURL('https://anchor.fm/s/39d1be18/podcast/rss')
      fs.writeFileSync('./feed.json', JSON.stringify(feed))

      const parsedFeed = feed.items.map((feed: any, index: number) => {
        return {
          id: index,
          title: feed.title,
          description: feed.contentSnippet,
          audio: {
            url: feed.enclosure.url,
            duration: feed.itunes.duration
          },
          thumbnail: feed.itunes.image,
          chapter: feed.itunes.episode,
          season: feed.itunes.season
        }
      })

      return res.status(200).json({
        status: 200,
        items: [
          ...parsedFeed
        ]
      })
    } catch (err) {
      return res.status(501).json({
        status: 501,
        error: err
      })
    }
  }
}