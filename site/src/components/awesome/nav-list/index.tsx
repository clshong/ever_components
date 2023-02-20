import React, { FC, useCallback } from 'react'

type IItem = ({
  title: string
  url?: string
} | string)

export interface INavListProps {
  title: string
  list: IItem[]
}
const NavList: FC<INavListProps> = ({
  title,
  list
}) => {
  const handleClick = useCallback(url => {
    return () => {
      if(url) {
        window.open(url, '_blank')
      }
    }
  }, [])

  const renderItem = (item: IItem) => {
    const isString = typeof item === 'string'
    const title = isString ? item : item.title
    const url = isString ? '' : item.url
    return (
      <div
        key={title}
        className=''
        onClick={handleClick(url)}
      >
        {title}
      </div>
    )
  }

  return (
    <div className='
      border-box
      shadow-md
      rounded-xl
      w-56 grow-0 shrink-0
      p-4
      bg-indigo-500
      text-white
    '>
      <div className='mb-2 text-xl font-bold'>{title}</div>
      <div className='text-sm'>
        {list.map(item => renderItem(item))}
      </div>
    </div>
  )
}
export default React.memo(NavList)
