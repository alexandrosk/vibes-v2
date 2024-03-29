const colors = {
    accent: "#F3534A",
    primary: "#744eaa",
    secondary: "#553788",
    tertiary: "#FFE358",
    black: "#15191c",
    secondBlack: "#1c1c1e",
    white: "#FFFFFF",
    gray: "#9DA3B4",
    gray2: "#C5CCD6",
};

const sizes = {
    // global sizes
    base: 16,
    font: 14,
    radius: 5,
    padding: 25,

    //spacing
    horizontal: 10,
    horizontalHalf:  5,
    paddingVertical: 20,

    // font sizes
    h1: 26,
    h2: 20,
    h3: 18,
    title: 18,
    header: 16,
    body: 14,
    caption: 12,
};

const fonts = {
    h1: {
        fontSize: sizes.h1,
        marginHorizontal: sizes.horizontal
    },
    h2: {
        fontSize: sizes.h2
    },
    h3: {
        fontSize: sizes.h3
    },
    header: {
        fontSize: sizes.header
    },
    title: {
        fontSize: sizes.title
    },
    body: {
        fontSize: sizes.body
    },
    caption: {
        fontSize: sizes.caption
    },
};

export { colors, sizes, fonts };
