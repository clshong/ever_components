const PREFIX = 'tailwind-css'

const config = [
  {
    type: 'doc',
    label: 'tailwind css',
    id: `${PREFIX}/nav`,
  },
  {
    type: 'category',
    label: '内容',
    items: [
      {
        type: 'doc',
        label: '页面1',
        id: `${PREFIX}/content/p-1`
      },
    ]
  }
]

module.exports = config
