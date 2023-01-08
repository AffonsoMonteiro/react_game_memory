import { GridItemType } from '../../types/GridItemType'
import { items } from '../../data/items';

import b7Svg from '../../svgs/b7.svg'

import * as C from './styles'


type Props = {
  item: GridItemType;
  onClick: () => void;
}

export function GridItem({ item, onClick }: Props) {
  return (
    <C.Container 
      showBackground={item.permanentShow || item.shown}
      onClick={onClick}
    >
      {item.permanentShow === false && item.shown === false &&
        <C.Icon src={b7Svg} alt="" opacity={.1} />
      }

      {(item.permanentShow || item.shown) && item.item !== null &&
        <C.Icon src={items[item.item].icon} alt="" />
      }
    </C.Container>
  )
}