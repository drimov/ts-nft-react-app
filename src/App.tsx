import React from 'react'
import {Card} from './components/Card/Card'
import {CardContainer} from './components/Containers/CardContainer'
import {MainContainer} from './components/Containers/MainContainer'
import {Footer} from './components/Footer/Footer'
import {Search} from './components/Search/Search'
import './css/styles.css'
import {nftType} from './types/types'

type JSONResponse = {
  data?: Array<Omit<nftType, 'fetchedAt' | 'createdAt'>>
  elements?: number
  errors?: Array<{message: string}>
}

function App() {
  const [nftsApi, setNftsApi] = React.useState<nftType[] | undefined>([])
  const [nfts, setNfts] = React.useState<nftType[] | undefined>(nftsApi)
  const [elements, setElements] = React.useState<number>()
  const [errors, setErrors] = React.useState<
    Array<{message: string}> | undefined
  >([])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    const list = nftsApi?.filter(
      nft =>
        nft.title.toLowerCase().includes(value.toLowerCase()) ||
        nft.creator.toLowerCase().includes(value.toLowerCase()) ||
        nft.description.toLowerCase().includes(value.toLowerCase()),
    )
    setNfts(list)
    setElements(list?.length)
  }

  React.useEffect(() => {
    const api = async () => {
      console.log('api')
      const resp = await fetch(
        'https://636b20b6c07d8f936dae7fe4.mockapi.io/api/nft/all',
        // 'https://636b20b6c07d8f936dae7fe4.mockapi.io/api/nft/all/1',
        // 'https://636b20b6c07d8f936dae7fe4.mockapi.io/api/nft/erreur',
        {method: 'GET'},
      )
      const {data, errors, elements}: JSONResponse = await resp.json()

      if (resp.ok) {
        setNftsApi(data)
        setNfts(data)
        setElements(elements)
        setErrors(errors)
      } else {
        setErrors([{message: `API en erreur: code ${resp.status}`}])
        setNftsApi([])
        setNfts([])
        setElements(0)
      }
    }
    api()
  }, [])

  return (
    <MainContainer>
      <Search onChange={handleChange} />
      {elements ? (
        <div role={'alert'} className="elements">
          Il y a {elements} NFT's
        </div>
      ) : null}
      {errors?.length ? (
        <div role={'alert'} className="alert">
          il y a {errors?.length} erreur(s) : {errors?.[0].message}
        </div>
      ) : null}
      <CardContainer>
        {nfts?.map((nft, index) => (
          <Card nft={nft} key={index} />
        ))}
      </CardContainer>
      <Footer />
    </MainContainer>
  )
}

export default App
