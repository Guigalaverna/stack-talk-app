import React, { createContext, useContext, useState } from 'react';
import { Episode, Episodes } from '../../@types/Episode';

interface ProviderProps {
  children: React.ReactNode
}

interface ContextData {
  episodeList: Episodes | undefined
  isPlaying: boolean
  isShuffling: boolean
  isLooping: boolean

  addEpisodes: (episodes: Episodes) => void
  play: (episode: any) => void
  toogleLoop: () => void
  toogleShuffling: () => void
  tooglePlaying: () => void
  clearPlayingState: () => void
}

const Context = createContext({} as ContextData);

export default function PlayerProvider({ children }: ProviderProps) {

  const [episodeList, setEpisodeList] = useState<any>()
  const [currentEpisodeIndex, setCurrentEpisodeIndex] = useState(0)

  const [isLooping, setIsLooping] = useState(false)
  const [isShuffling, setIsShuffling] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)

  let providerProps: ContextData = {
    episodeList,
    addEpisodes,
    play,
    toogleLoop,
    toogleShuffling,
    tooglePlaying,
    clearPlayingState,
    isLooping,
    isPlaying,
    isShuffling
  }

  function addEpisodes(episodes: Episodes) {
    setEpisodeList(episodes)
  }

  function play(episode: any) {
    setEpisodeList([episode])
    setIsPlaying(true)
  }

  function toogleLoop() {
    setIsLooping(!isLooping)
  }

  function toogleShuffling() {
    setIsShuffling(!isShuffling)
  }

  function tooglePlaying() {
    setIsPlaying(!isPlaying)
  }

  function clearPlayingState() {
    setIsPlaying(false)
    setEpisodeList([])
  }

  return (
    <Context.Provider value={{...providerProps}}>
      { children }
    </Context.Provider>
  )
}

export function usePlayer() {
  return useContext(Context)
}