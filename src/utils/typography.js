import Typography from "typography"

const typography = new Typography({
  baseFontSize: "25px",
  baseLineHeight: 1.666,
  scaleRatio: 2,
  headerFontFamily: ["Lato", "900"],
  bodyFontFamily: ["Lato", "400"],
  googleFonts: [
    {
      name: 'Lato',
      styles: [
        '400',
        '900'
      ],
    }
  ], 
})

export default typography