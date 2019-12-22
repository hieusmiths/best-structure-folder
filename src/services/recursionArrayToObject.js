import { set } from 'lodash'

const resursionArrayToObject = (array, fieldLocal,fieldForeign, parent) => {
    if (!array.length) return null;
    if (!parent) {
        let result = []
        array.forEach((element,index) => {
            if (!element[fieldForeign]) {
                 array.splice(index,1)
                const arr = resursionArrayToObject(array, fieldLocal, fieldForeign, element[fieldLocal])
                set(element, 'child', arr)
                console.log(element)
                result.push(element)
            }
        });
        return result;
    } else {
        let resultChild = []
        array.forEach((element, index) => {
            if (element[fieldForeign] === parent) {
                 array.splice(index, 1)
                const arr = resursionArrayToObject(array, fieldLocal, fieldForeign, element[fieldLocal])
                set(element, 'child', arr)
                resultChild.push(element)
            }
        });
        return resultChild
    }

}

export default resursionArrayToObject