export const mediaQueries = {
  headerQuery: (properties) => {
    return `
      @media only screen and (max-width: 714px) {
        ${properties}
      }
    `
  },
  aboutQuery: (properties) => {
    return `
    @media only screen and (max-width: 875px) {
      ${properties}
    }
    `
  },
  aboutNarrowQuery: (properties) => {
    return `
    @media only screen and (max-width: 565px) {
      ${properties}
    }
    `
  },
  gigsQuery: (properties) => {
    return `
    @media only screen and (max-width: 1000px) {
      ${properties}
    }
    `
  },
  gigsNarrowQuery: (properties) => {
    return `
    @media only screen and (max-width: 700px) {
      ${properties}
    }
    `
  },
  contactQuery: (properties) => {
    return `
    @media only screen and (max-width: 600px) {
      ${properties}
    }
    `
  },
  smallPhoneQuery: (properties) => {
    return `
      @media only screen and (max-width: 430px) {
        ${properties}
      }
    `
  },
  verySmallPhoneQuery: (properties) => {
    return `
      @media only screen and (max-width: 350px) {
        ${properties}
      }
    `
  },
}