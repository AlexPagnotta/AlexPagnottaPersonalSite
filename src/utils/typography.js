import Typography from "typography"
import colors from "../globals/colors"

const typography = new Typography({
  baseFontSize: "19px",
  baseLineHeight: 1.5,
  scaleRatio: 2.3,
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
  overrideStyles: ({scale}, options) => ({
    "@media only screen and (max-width:38rem)": { //TODO Replace with mediaquery
      html: {
        ...scale(1/10),
      },
    },
    body: {
      color: colors.primaryColor
    },
    a: {
      color: colors.primaryColor
    },
  }),
})

export default typography