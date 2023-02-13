import {Card} from './components/Card/Card'
import {CardContainer} from './components/Containers/CardContainer'
import {MainContainer} from './components/Containers/MainContainer'
import {Footer} from './components/Footer/Footer'
import {Search} from './components/Search/Search'
import './css/styles.css'

import {nftsList} from './db/nft'

function App() {
  return (
    <MainContainer>
      <Search />
      <CardContainer>
        {nftsList.map((nft, index) => (
          <Card nft={nft} key={index} />
        ))}
      </CardContainer>
      <Footer />
    </MainContainer>
  )
}

export default App
