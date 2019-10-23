import Typography from "typography"
import colors from "../globals/colors"

const typography = new Typography({
  baseFontSize: "22px",
  baseLineHeight: 1.666,
  scaleRatio: 2.5,
  headerFontFamily: ["Bree Serif", "400"],
  bodyFontFamily: ["Assistant", "400"],
  googleFonts: [
    {
      name: 'Assistant',
      styles: [
        '400',
        '900'
      ],
    },
    {
      name: 'Bree Serif',
      styles: [
        '400'
      ],
    }
  ], 
  overrideStyles: ({}, options) => ({
    body: {
      color: colors.primaryColor
    },
    a: {
      color: colors.primaryColor
    },
  }),
})

export default typography