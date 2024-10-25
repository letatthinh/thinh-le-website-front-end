/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
const configuration: import('tailwindcss').Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './constants/**/*.{ts,tsx}',
    './utilities/class-name/**/*.{ts,tsx}',
    './redux-toolkit/store/reducer-slices/theme/constant/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'profile-image': "url('/images/profile-image.jpg')",
        'algorithms-project': "url('/images/projects/algorithms.jpg')",
        'facebook-logo': "url('/logos/facebook.png')",
        'google-logo': "url('/logos/google.png')",
        'linkedin-logo': "url('/logos/linkedin.png')",
        'github-black-logo': "url('/logos/github-black-background-logo.png')",
        'github-white-logo': "url('/logos/github-white-background-logo.png')"
      },
      content: {
        'empty-string': "''"
      },
      flexGrow: {
        2: '2',
        3: '3',
        4: '4'
      },
      flexShrink: {
        2: '2',
        3: '3',
        4: '4'
      },
      height: {
        '6-625': '6.625rem',
        '1/2-dvh': '50dvh',
        '3/4-dvh': '75dvh',
        '2/5-dvh': '40dvh',
        '3/5-dvh': '60dvh',
        '3/10': '30%'
      },
      inset: {
        '1/20': '5%',
        '1/10': '10%',
        '3/25': '12%',
        '3/20': '15%',
        '1/5': '20%',
        '3/10': '30%',
        '2/5': '40%'
      },
      maxWidth: {
        '56': '14rem',
        '72': '18rem'
      },
      rotate: {
        '13': '13deg',
        '15': '15deg'
      },
      width: {
        '3/10': '30%'
      }
    }
  },
  plugins: []
}

export default configuration
