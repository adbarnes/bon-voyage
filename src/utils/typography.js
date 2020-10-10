import Typography from 'typography'

const typography = new Typography({
  googleFonts: [
    {
      name: 'Nunito',
      styles: ["&display=swap"],
    },
  ],
  baseFontSize: "18px",
  baseLineHeight: 1.666,
  headerFontFamily: [
    "Open Sans",
    "Avenir Next",
    "Helvetica Neue",
    "Segoe UI",
    "Helvetica",
    "Arial",
    "sans-serif",
  ],
  bodyFontFamily: ['nunito', 'sans-serif'],
  overrideThemeStyles: () => ({
        'a': {
          color: "#ffffff",
          },
          '.menu-module--brand--1OcM7': {
              fontFamily: "Open Sans",
              fontWeight: 800,
              textTransform: "uppercase"
          },
          'h2': {
            fontWeight: 800,
            fontSize: "2.778rem",
            textTransform: "uppercase",
            letterSpacing: "tight"
          },
          '.cards-module--card-tag--Yh9M1': {
            fontFamily: "Open Sans",
            fontWeight: 800,
            fontSize: "1.333333rem"
          },
          '.intro h2':{
            fontFamily: "Nunito",
            fontSize: "1.333333rem"
          },
          '.date-tag': {
            fontFamily: "Open Sans",
            fontWeight: 800
          },
          '.title-tag': {
            fontFamily: "Open Sans",
            fontWeight: 800,
          }
      })
})

export default typography