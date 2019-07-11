import React from 'react'
import Svg, { Path, G } from 'react-native-svg'

const SvgComponent = props => (
    <Svg viewBox="0 0 512 512" width="26em" height="26em" {...props}>
        <Path
            d="M497.777 241.778C497.777 375.31 309.717 512 256 512c-53.731 0-241.778-136.69-241.778-270.222S122.467 0 256 0s241.777 108.245 241.777 241.778"
            fill="#ccd6dd"
        />
        <G fill="#292f33">
            <Path d="M192.042 211.2c44.43 44.43 62.435 98.46 40.22 120.675-22.2 22.215-76.245 4.224-120.675-40.22-44.445-44.43-62.45-98.46-40.22-120.675 22.215-22.215 76.245-4.21 120.675 40.22M319.957 211.058c-44.43 44.43-62.435 98.46-40.22 120.675 22.202 22.228 76.245 4.223 120.675-40.22 44.445-44.445 62.45-98.46 40.22-120.675-22.215-22.216-76.245-4.21-120.675 40.22M256 440.889c-33.38 0-50.845-16.498-52.721-18.389-5.561-5.561-5.561-14.549 0-20.11 5.504-5.504 14.407-5.561 19.967-.143.74.67 11.463 10.198 32.754 10.198 21.604 0 32.328-9.799 32.782-10.226 5.66-5.319 14.607-5.163 20.026.426 5.39 5.575 5.405 14.365-.085 19.854-1.878 1.892-19.343 18.39-52.723 18.39" />
        </G>
    </Svg>
)

export default SvgComponent
