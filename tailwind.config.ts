import type { Config } from 'tailwindcss'

const config: Config = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      width: {
        391: '391px',
      },
      height: {
        600: '600px',
        90: '22rem',
        128: '28rem',
      },
      spacing: {
        68: '17rem',
        76: '19rem',
        84: '21rem',
        88: '22rem',
        92: '23rem',
        96: '24rem',
        100: '25rem',
        104: '26rem',
      },
    },
    screens: {
      xxsTall: { raw: '(width: 375px) and (height: 629px)' },
      xxs: '375px',
      xs: '390px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1440px',
      xxl: '1536px',
    },
  },
  plugins: [],
}
export default config
