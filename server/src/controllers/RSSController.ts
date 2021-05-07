import Parser from 'rss-parser'
import { Request, Response } from 'express'
interface ParamsProps {
  id: number
}

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
      return res.status(500).json({
        status: 500,
        error: err
      })
    }
  },

  async list(req: Request, res: Response) {
    const { id } = req.params

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

      const currentFeed = feed.items[Number(id)]

      const parsedFeed = {
        id,
        title: feed.title,
        description: currentFeed.contentSnippet,
        audio: {
          url: currentFeed.enclosure?.url,
          duration: feed.itunes.duration
        },
        thumbnail: feed.itunes.image,
        duration: Number(currentFeed.itunes.duration),
        chapter: Number(currentFeed.itunes.episode),
        season: Number(currentFeed.itunes.season)
      }

      return res.status(200).json({
        status: 200,
        items: parsedFeed
      })
    } catch (err) {
      console.error(err)
      return res.status(500).json({
        status: 500,
        error: err
      })
    }
  }
}