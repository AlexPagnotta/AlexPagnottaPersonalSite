import Typography from "typography"

const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.666,
  headerFontFamily: ["Open Sans", "900"],
  bodyFontFamily: ["Open Sans", "300"],
  googleFonts: [
    {
      name: 'lato',
      styles: [
        '300',
        '400',
        '700',
        '900'
      ],
    }
  ], 
})

export default typography