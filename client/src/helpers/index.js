// format number from 1300 --> 1,300
export function formatNumberToLocal(number) {
    return new Intl.NumberFormat().format(number);
}

export function calculateDiscountPercent(currentPrice, oldPrice) {
    const disCountPercent = (oldPrice - currentPrice) * 100 / oldPrice;
    return -Math.round(disCountPercent) + '%';
}

export function getImageUrl(path) {
    return new URL(path, import.meta.url).href
}


/* Convert title to Link
function removeAccents(str) {
    if(!str) {
        return '';
    } else {
        return str.normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .replace(/đ/g, 'd').replace(/Đ/g, 'D');
    }
}
const arr = [];
props.productsList.forEach(element => {
    const title = element.title.toLowerCase().replace(/\s/g, '-').replace(/[,%]/g, '').replace(/---/g, '-');
    const title2 = removeAccents(title);
    arr.push(title2);
});
console.log(arr);

*/
