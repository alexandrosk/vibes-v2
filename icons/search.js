import React from 'react'
import Svg, { Path } from 'react-native-svg'

const SvgComponent = props => (
    <Svg {...props} viewBox="0 0 512.003 512.003" width="26em" height="26em">
        <Path
            d="M148.829 322.22l52.779-52.779c-19.855-27.904-31.659-61.923-31.659-98.773C169.949 76.402 246.366 0 340.616 0c94.265 0 170.667 76.402 170.667 170.667 0 94.251-76.402 170.667-170.667 170.667-36.836 0-70.883-11.804-98.773-31.673L189.05 362.44l-40.221-40.22z"
            fill="#9aaab4"
        />
        <Path
            d="M226.84 170.665c0 62.848 50.93 113.778 113.778 113.778s113.778-50.93 113.778-113.778S403.465 56.887 340.618 56.887 226.84 107.817 226.84 170.665"
            fill="#bdddf4"
        />
        <Path
            d="M17.382 414.888l120.676-120.661c11.122-11.122 29.113-11.122 40.234 0l40.221 40.221c11.108 11.108 11.108 29.113 0 40.221l-40.221 40.221-80.455 80.44c-22.215 22.23-58.24 22.23-80.47 0-22.2-22.187-22.2-58.227.015-80.442"
            fill="#67757f"
        />
    </Svg>
)

export default SvgComponent
