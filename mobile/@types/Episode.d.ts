interface Episode {
  items: {
    id: number,
    title: string,
    description: string,
    audio: {
      url: string,
      duration: number
    },
    thumbnail: string,
    duration: number
    chapter: number
    season: number
  }
}

interface Episodes {
  items: {
    id: number,
    title: string,
    description: string,
    audio: {
      url: string,
      duration: number
    },
    thumbnail: string,
    duration: number
    chapter: number
    season: number
  }[]
}

export { Episodes, Episode }