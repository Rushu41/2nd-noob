module.exports = {
    theme: {
      extend: {
        animation: {
          'gradient': 'gradientBG 5s ease infinite',
        },
        keyframes: {
          gradientBG: {
            '0%, 100%': {
              'background-position': '0% 50%',
            },
            '50%': {
              'background-position': '100% 50%',
            },
          },
        },
        backgroundSize: {
          '200%': '200%',
        }
      },
    },
    plugins: [],
  }
  