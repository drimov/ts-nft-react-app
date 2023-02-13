import {NftProps} from '../../types/types'

const CardCreator = ({nft}: NftProps) => {
  const {creator, avatar} = nft
  return (
    <div className="creator-info">
      <img src={avatar} alt={creator} className="avatar" />
      <p className="creator-text">
        Creation of <span className="creator-name">{creator}</span>
      </p>
    </div>
  )
}
export {CardCreator}
