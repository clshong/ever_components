import React, { FC } from 'react'

export interface ILinkGroupProps {
  title?: string
  list: {
    title: string
    description?: string
    url: string
  }[]
}
const LinkGroup: FC<ILinkGroupProps> = ({
  title,
  list
}) => {
  return (
    <div className='p-1'>
      {title && (<div className='mb-2 text-lg text-indigo-900'>{title}</div>)}
      <div className='columns-3 gap-4'>
        {list.map(item => (
          <div 
            key={item.title + item.url}
            className='
              border-box
              mb-4
              p-3
              hover:shadow-lg
              rounded
              bg-indigo-500
              text-white
              cursor-pointer
            '
            onClick={() => window.open(item.url, '_blank')}
          >
            {/* 用 a 的样式有问题你 */}
            <div className='leading-md'>{item.title}</div>
            <div className='text-white/80 text-sm'>{item.description || '暂无'}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
export default React.memo(LinkGroup)
