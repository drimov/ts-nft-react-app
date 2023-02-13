import {NftProps} from '../../types/types'

const CardCrypto = ({nft}: NftProps) => {
  const {price, expire} = nft
  return (
    <div className="eth-info">
      <div className="info">
        <img src="images/icon-ethereum.svg" alt="ETH" className="icon" />
        <span className="eth">{price}</span>
      </div>
      <div className="info">
        <img src="images/icon-clock.svg" alt="clock" className="icon" />
        <span className="expire">{expire}</span>
      </div>
    </div>
  )
}

export {CardCrypto}
