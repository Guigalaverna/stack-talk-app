import React, { createContext, useContext, useState } from 'react';
import { Episodes } from '../../@types/Episode';

interface ProviderProps {
  children: React.ReactNode
}

interface ContextData {
  episodeList: Episodes | undefined
  addEpisodes: (episodes: Episodes) => void
}

const Context = createContext({} as ContextData);

export default function PlayerProvider({ children }: ProviderProps) {

  const [episodeList, setEpisodeList] = useState<Episodes>()
  const [currentEpisodeIndex, setCurrentEpisodeIndex] = useState(0)

  let providerProps: ContextData = {
    episodeList,
    addEpisodes
  }

  function addEpisodes(episodes: Episodes) {
    setEpisodeList(episodes)
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