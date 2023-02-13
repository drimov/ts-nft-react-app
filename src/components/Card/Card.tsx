import { NftProps } from '../../types/types'
import { CardContent } from './CardContent'
import { CardImage } from './CardImage'

const Card = ({nft}: NftProps) => {
  return (
    <section className="main-card">
      <CardImage imgSrc={nft.img} />
      <CardContent nft={nft} />
    </section>
  )
}
export { Card }

