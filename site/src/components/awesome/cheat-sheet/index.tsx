import React, { FC } from 'react'
import Highlight, { ICodeHighLightProps } from '../highlight'

import s from './style.module.css'

export interface ICheatSheetProps {
  title: string,
  language?: string,
  list: ICodeHighLightProps[] | string[]
}

const CheatSheet: FC<ICheatSheetProps> = ({
  title,
  language,
  list
}) => {
  const normalizeList = list.map(item => {
    if(typeof item === 'string') {
      return {
        code: item,
        language
      }
    }
    return item
  })
  
  return (
    <div className='cheat-sheet'>
      <div className={`${s.title} mt-3 mb-2 text-lg text-purple-500`}>{title}</div>
      <div className='shadow-md'>
        {normalizeList.map(item => (
          <Highlight
            key={item.code}
            {...item}
          />
        ))}
      </div>
    </div>
  )
}
export default React.memo(CheatSheet)
