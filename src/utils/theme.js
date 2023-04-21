//кольори використовуємо в styled файлах:
//background-color: ${props => (props.theme.footer.backgroundColor)};

class Theme {
    constructor({header, main, footer, productCard, pagination}) {

        this.header = header ?? {
            backgroundColor: "rgba(247, 169, 168, 1)",
            background: "linear-gradient(to right, #f7797d, #FBD786, #C6FFDD)",
            textColor: "rgba(97, 63, 117, 1)",
            formBorder: "rgba(255, 255, 255)",
            formBackground: "rgb(255,255, 255)",
            formText: "rgb(0, 0, 0)",
            bottomBorder: "rgba(206, 198, 225, 0.1)",
        };

        this.main = main ?? {
            background: "rgba(206, 198, 225, 0.1)",
            backgroundDots: "rgba(247, 169, 168, 0.4)",
            
        };

        this.footer = footer ?? {
            backgroundColor: "rgba(247, 169, 168, 1)",
            background: "linear-gradient(to left, #f7797d, #FBD786, #C6FFDD)",
            textColor: "rgba(97, 63, 117, 1)",
        };

        this.productCard = productCard ?? {
            background: "#ffffff",
            backgroundHover: "#fff593",
            text: "rgb(0, 0, 0)",
            nameText: "purple",
            border: "rgba(0, 0, 0, 0.1)",
            borderHover: "rgba(0, 0, 0, 0.3)",
        };

        this.pagination = pagination ?? {
            background: "pink",
            text: "black",
        };
    }
}

//світла тема дефолтна
export const light = new Theme({});

export const dark = new Theme({
    header: {
        backgroundColor: "rgb(48, 49, 52)",
        //background: "linear-gradient(to right, #0f2027, #203a43, #2c5364)",
        background: "rgb(48, 49, 52)",
        textColor: "rgb(245, 105, 96)",
        formBorder: "rgb(245, 105, 96)",
        formBackground: "rgb(48, 49, 52)",
        formText: "rgb(255,255, 255)",
        bottomBorder: "rgba(245, 105, 96, 0.2)",
    },
    main: {
        background: "rgba(32, 33, 36)",
        backgroundDots: "rgb(32, 33, 36)",
    },
    footer: {
        backgroundColor: "rgb(48, 49, 52)",
        background: "rgb(48, 49, 52)",
        textColor: "rgb(245, 105, 96)",
    },
    productCard: {
        background: "rgba(48, 49, 52)",
        backgroundHover: "rgb(60, 64, 67)",
        text: "rgb(178, 183, 186)",
        textHover: "rgb(255, 255, 255)",
        nameText: "rgb(245, 105, 96)",
        border: "rgba(32, 33, 36)",
        borderHover: "rgba(32, 33, 36, 0.3)",

    },
    pagination: {
        background: "rgba(48, 49, 52)",
        text: "rgb(245, 105, 96)",
    }
});