import Typography from "typography"

const typography = new Typography({
  baseFontSize: "20px",
  baseLineHeight: 1.666,
  scaleRatio: 2.5,
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