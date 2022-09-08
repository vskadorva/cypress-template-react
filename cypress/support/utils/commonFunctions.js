//This is an example of how to write common functions
export const commonFunctions = {
    convertStringToNumber: (string) => {
        return parseInt(string)
    },
    sortStringsAlphabetically: (a, b) => {
        return ((a < b) ? -1 : ((a > b) ? 1 : 0))
    }
}