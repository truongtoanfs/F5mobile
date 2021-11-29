<template>
	<div class="container">
		<category-header :categoryNav="categoryNav" />
		<sort-filter-mobile-buttons @sortProducts="sortProducts" @toggleSideFilter="isOpenSideFilter = !isOpenSideFilter" :sortConditions="sortConditions" :productSortType="productSortType" />
		<div class="flex mt-2">
			<side-filter @filterValues="filterProducts" :isOpenSideFilter="isOpenSideFilter" @closeSideFilter="isOpenSideFilter = false" :filterConditions="productObject?.categoryFilter || productObject?.seriesFilter" />
			<div class="flex-1">
				<div class="hidden items-center justify-end bg-white py-1.5 px-4 rounded-lg xl:flex">
					<sort-on-laptop @sortProducts="sortProducts" :sortConditions="sortConditions" :productSortType="productSortType" />
					<view-mode />
				</div>
				<category-layout-product :productsList="productsList" />
			</div>
		</div>
	</div> 
</template>
<script>
import CategoryHeader from '../components/category/CategoryHeader.vue';
import SortFilterMobileButtons from '../components/category/SortFilterMobileButtons.vue';
import SideFilter from '../components/category/SideFilter.vue';
import SortOnLaptop from '../components/category/SortOnLaptop.vue';
import ViewMode from '../components/category/ViewMode.vue';
import CategoryLayoutProduct from '../components/category/CategoryLayoutProduct.vue';
import { ref, watch, computed, reactive, toRefs } from 'vue';
import { useStore } from 'vuex';
import { navList } from '../data/initialData';
import { calculateDiscountPercent } from '../helpers';
export default {
    props: {
        categoryPath: String,
    },
	components: {
		CategoryHeader,
		SortFilterMobileButtons,
		SideFilter,
		SortOnLaptop,
		ViewMode,
		CategoryLayoutProduct,
	},
	setup(props) {
		/* sort conditions */
		const sortConditions = ['Dòng sản phẩm', 'Mới nhất', 'Giá tăng dần', 'Giá giảm dần', '% Giảm'];
		const isOpenSideFilter = ref(false);

		const categoryNav = ref({});
		const productSortType = ref('');
        const pagePath = computed(() => props.categoryPath);
		watch(pagePath, () => {
			categoryNav.value = findCategoryLinks();
			productSortType.value = 'Dòng sản phẩm';
		}, { immediate : true })
		
		function findCategoryLinks() {
			for (let item of navList) {
				if(item.categoryPath === pagePath.value) {
					return item;
				}
				if(item.categoryList) {
					for(let subItem of item.categoryList) {
						if(subItem.seriesPath === pagePath.value) {
							return subItem;
						}
					}

				}
			}
			return {};
		}

		/* get products */
		const store = useStore();
        store.dispatch('getProductsList');
        const productObject = computed(() => store.getters.productObjectFromPath(pagePath.value));
		const productsList = ref([]);
		watch(productObject, () => {
			productsList.value = [...getProductList(productObject.value)];
		})
		function getProductList(productObject) {
			let result = [];
			if(productObject?.categoryDetail) {
				productObject.categoryDetail.forEach(item => result = result.concat(item.products));
			} else {
				result = productObject.products;
			}
			return result;
        }

		function sortProducts(sortType) {
			productSortType.value = sortType;
			switch (sortType) {
				case 'Giá tăng dần':
					productsList.value.sort(function(a, b) {
						return a.currentPrice - b.currentPrice;
					})
					break;
				case 'Giá giảm dần':
					productsList.value.sort(function(a, b) {
						return b.currentPrice - a.currentPrice;
					})
					break;
				case '% Giảm':
					productsList.value.sort(function(a, b) {
						return calculateDiscountPercent(b.currentPrice, b.oldPrice) - calculateDiscountPercent(a.currentPrice, a.oldPrice);
					})
					break;
				case 'Mới nhất':
					productsList.value.sort(function(a, b) {
						return calculateProductState(b.state) - calculateProductState(a.state);
					})
					break;
				default://ordered in database
					productsList.value = [...getProductList(productObject.value)];
			}
		}
		function calculateProductState(productState) {
			if(productState == 'new99%') {
				return 98;
			} else if(productState == 'new100%-actived') {
				return 99;
			} else if(productState == 'new100%') {
				return 100;
			}
		}

		/* filter products */
		function filterProducts(filterValues) {
			console.log('fitler', filterValues.length);
			const originData = [...getProductList(productObject.value)];
			if(filterValues.length === 0) {
				productsList.value = originData;
				return;
			}
			productsList.value = originData.filter(product => {
				for(let checkValue of filterValues) {
					if(product.title.includes(checkValue) || checkPrice(checkValue, product.currentPrice)) {
						return true;
					}
				}
				return false;
			})
		}
		function checkPrice(checkPrice, productPrice) {
			switch (checkPrice) {
				case 'Dưới 2 triệu':
					return productPrice < 2000000;
					break;
				case '2 triệu - 4 triệu':
					return 2000000 <= productPrice && productPrice <= 4000000;
					break;
				case '4 triệu - 7 triệu':
					return 4000000 <= productPrice && productPrice <= 7000000;
					break;
				case '7 triệu - 13 triệu':
					return 7000000 <= productPrice && productPrice <= 13000000;
					break;
				case 'Trên 13 triệu':
					return productPrice > 13000000;
					break;
				default:
					return false;
					break;
			}
			if(checkPrice === 'Dưới 2 triệu') {

			}
		}
		
		return {
			sortConditions,
			categoryNav,
			isOpenSideFilter,
			productObject,
			productsList,
			productSortType,
			sortProducts,
			filterProducts,
		}
    },
}
</script>
