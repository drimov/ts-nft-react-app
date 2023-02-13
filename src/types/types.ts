export type nftType = {
  title: string
  description: string
  creator: string
  img: string
  price: string
  expire: string
  avatar: string
}

export type ChildrenProps = {
  children: React.ReactNode
}

export type NftProps = {
  nft: nftType
}
