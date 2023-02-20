/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  safelist: [ // 一定会加载的类名。无视 css Purge
    'columns-2', 'columns-3', 'columns-4',
    'columns-xs', 'columns-sm',
    'gap-4', 'gap-8',
    'flex', 'flex-wrap',
    'w-6',
    'h-6',
    'm-1', 'm-2', 'm-3', 'm-4', 'mx-1', 'mx-2', 'mx-4', 'mx-8', 'my-1', 'my-2', 'my-4', 'my-8', 'mb-4',
    'p-1', 'p-2', 'px-1', 'px-2', 'px-4', 'px-8',
    'space-x-1', 'space-x-2','space-x-3', 'space-x-4',
    'space-y-1', 'space-y-2','space-y-3', 'space-y-4',
    'bg-gray-200'
  ],
  plugins: [],
}
