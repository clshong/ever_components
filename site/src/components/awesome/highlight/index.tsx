import React, { FC } from 'react'
import Highlight from 'react-highlight'
import cn from 'clsx'


// 皮肤： https://highlightjs.org/static/demo/
// import 'highlight.js/styles/a11y-dark.css'
import 'highlight.js/styles/a11y-light.css'
// import 'highlight.js/styles/atom-one-dark-reasonable.css'
import s from './style.module.css'

export interface ICodeHighLightProps {
  code: string
  language?: string
}
const CodeHighLight: FC<ICodeHighLightProps> = ({
  code,
  language = 'js'
}) => {
  return (
    <div className={cn(s.codeHighLight, 'bg-gray-100 odd:bg-white')}>
      <Highlight language={language}>
        {code}
      </Highlight>
    </div>
  )
}
export default React.memo(CodeHighLight)
