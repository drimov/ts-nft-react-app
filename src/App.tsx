import {Card} from './components/Card/Card'
import {CardContainer} from './components/Containers/CardContainer'
import {MainContainer} from './components/Containers/MainContainer'
import {Footer} from './components/Footer/Footer'
import {Search} from './components/Search/Search'
import './css/styles.css'

function App() {
	return (
		<MainContainer>
			<Search />
			<CardContainer>
				<Card />
			</CardContainer>
			<Footer />
		</MainContainer>
	)
}

export default App
