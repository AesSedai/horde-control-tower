import { isEmpty, isNumber } from "lodash-es"

export const isNumeric = (value: any) => {
    return isNumber(value) || (!isEmpty(value) && !isNaN(parseFloat(value)))
}
