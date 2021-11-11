export const isNullishOrEmptyString = (value: any) => {
    return value === null || typeof value === 'undefined' || value === ''
}

export const firstLetterToUpper = (value: string) => {
    return value.charAt(0).toUpperCase() + value.slice(1)
}