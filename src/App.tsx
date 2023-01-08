import { useEffect, useState } from 'react';
import { Button } from './components/Button';
import { GridItem } from './components/GridItem';
import { InfoItem } from './components/InfoItem';
import { items } from './data/items';
import { GridItemType } from './types/GridItemType';

import RestartIcon from './svgs/restart.svg'
import logoImage from './assets/devmemory_logo.png'

import * as C from './App.styles'

function App() {
  const [playing, setPlaying] = useState<boolean>(false)
  const [timeElapsed, setTimeElapsed] = useState<number>(0)
  const [moveCount, setMoveCount] = useState<number>(0)
  const [shownCount, setShownCount] = useState<number>(0)
  const [gridItems, setGridItems] = useState<GridItemType[]>([])

  useEffect(() => {
    resetAndCreateGrid()
  }, [])

  function resetAndCreateGrid() {
    // passo 1 - resetar o jogo
    setTimeElapsed(0)
    setMoveCount(0)
    setShownCount(0)

    // passo 2 - criar o grid 
    // 2.1 - criar um grid vazio
    let tmpGrid: GridItemType[] = []
    for(let i = 0; i < (items.length * 2); i++) {
      tmpGrid.push({
        item: null,
        shown: false,
        permanentShow: false
      })
    }
    // 2.2 - preencher o grid
    for(let w = 0; w < 2; w++) {
      for(let i = 0; i < items.length; i++) {
        let pos = -1;
        while(pos < 0 || tmpGrid[pos].item !== null) {
          pos = Math.floor(Math.random() * (items.length * 2))
        }
        tmpGrid[pos].item = i
      }
    }

    // 2.3 - jogar no state
    setGridItems(tmpGrid)

    // começar o jogo
    setPlaying(true)
  }

  function handleItemClick(index: number) {

  }

  return (
    <C.Container>
      <C.Info>
        <C.LogoLink href="">
          <img src={logoImage} width="200" alt="" />
        </C.LogoLink>

        <C.InfoArea>
          <InfoItem label="Tempo" value="00:00" />
          <InfoItem label="Movimentos" value="0" />
        </C.InfoArea>

        <Button label="Reiniciar" icon={RestartIcon} onClick={resetAndCreateGrid} />
      </C.Info>

      <C.GridArea>
        <C.Grid>
          {gridItems.map((item, index) => (
            <GridItem  
              key={index}
              item={item}
              onClick={() => handleItemClick(index)}
            />
          ))}
        </C.Grid>
      </C.GridArea>
    </C.Container>
  );
}

export default App;
