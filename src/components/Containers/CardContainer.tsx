import {ChildrenProps} from '../../types/types'

const CardContainer = ({children}: ChildrenProps) => {
  return <div className="card-container">{children}</div>
}

export {CardContainer}
