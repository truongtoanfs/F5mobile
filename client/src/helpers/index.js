const imageModules = import.meta.globEager('/src/assets/images/**');

// format number from 1300 --> 1,300
export function formatNumberToLocal(number) {
  return new Intl.NumberFormat().format(number);
}

export function calculateDiscountPercent(currentPrice, oldPrice) {
  const disCountPercent = (oldPrice - currentPrice) * 100 / oldPrice;
  return Math.round(disCountPercent);
}
export function getImageUrl(imageUrl) {
  const path = imageUrl.replace(/\.\.\/assets/, '/src/assets').replace(/\/\//, '/');
  let staticUrl = '';
  if (imageModules[path]) {
    staticUrl = imageModules[path].default
  }
  return staticUrl;
}

export function getDetailProductList(data, categoryName, type = '') {
  const findCategory = data.find(item => item.category === categoryName);
  if (type === '') {
    return findCategory;
  }
  return findCategory.categoryDetail.find(item => item.type === type).products;
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
