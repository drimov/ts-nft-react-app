import React from 'react'
import {Card} from './components/Card/Card'
import {CardContainer} from './components/Containers/CardContainer'
import {MainContainer} from './components/Containers/MainContainer'
import {Footer} from './components/Footer/Footer'
import {Search} from './components/Search/Search'
import './css/styles.css'
import {nftsList} from './db/nft'
import {nftType} from './types/types'

function App() {
  const [listNft, setListNft] = React.useState<nftType[]>(nftsList)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    const list = nftsList.filter(
      nft =>
        nft.title.toLowerCase().includes(value.toLowerCase()) ||
        nft.creator.toLowerCase().includes(value.toLowerCase()) ||
        nft.description.toLowerCase().includes(value.toLowerCase()),
    )
    setListNft(list)
  }

  return (
    <MainContainer>
      <Search onChange={handleChange} />
      <CardContainer>
        {listNft.map((nft, index) => (
          <Card nft={nft} key={index} />
        ))}
      </CardContainer>
      <Footer />
    </MainContainer>
  )
}

export default App
