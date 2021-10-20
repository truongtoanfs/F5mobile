<template>
    <div class="bg-gray-200">
        <div class="container">
			<category-header :categoryName="categoryName" :categoryList="categoryList" />
            
            <div class="relative grid grid-cols-2 gap-x-2.5 mt-4 xl:hidden">
                <button @click="isOpenSortDropdown = !isOpenSortDropdown" @clickout="isOpenSortDropdown = false" class="py-1.5 px-4 rounded-md font-medium bg-white">Sắp xếp <i class="fas fa-sort ml-1"></i></button>
                <button @click="isOpenSideFilter = !isOpenSideFilter" class="py-1.5 px-4 rounded-md font-medium bg-white">Lọc sản phẩm <i class="fas fa-filter ml-1 text-sm"></i></button>
				<div v-if="isOpenSortDropdown" class="absolute top-full -inset-x-1 z-10 px-4 pt-2.5 pb-4 bg-white border border-gray-200 shadow-lg rounded-md">
					<label class="flex items-center py-1">
						<input class="select-box-size mr-2.5" type="radio"> Nổi bật
					</label>
					<label class="flex items-center py-1">
						<input class="select-box-size mr-2.5" type="radio"> Bán chạy nhất
					</label>
					<label class="flex items-center py-1">
						<input class="select-box-size mr-2.5" type="radio"> Giá tăng dần
					</label>
					<label class="flex items-center py-1">
						<input class="select-box-size mr-2.5" type="radio"> Giá giảm dần
					</label>
					<label class="flex items-center py-1">
						<input class="select-box-size mr-2.5" type="radio"> % Giảm
					</label>
				</div>
            </div>
            <div class="flex mt-2">
				<div class="mr-3">
					<div v-if="isOpenSideFilter" @click="isOpenSideFilter = false" class="overlay"></div>
					<div :class="isOpenSideFilter ? 'block' : 'hidden'" class="fixed top-0 right-0 z-50 w-80 h-screen bg-white border-l border-gray-200 shadow-md xl:block xl:static xl:h-auto xl:rounded-xl xl:overflow-hidden xl:border-0 xl:w-64">
						<div class="flex items-center justify-between bg-f5-primary px-1 xl:hidden">
							<router-link to="/">
								<img class="h-7" src="../assets/images/f5_logo_03.png" alt="logo f5">
							</router-link>
							<span @click="isOpenSideFilter = false" class="text-white p-2 text-xl"><i class="fas fa-times"></i></span>
						</div>
						<h2 class="hidden uppercase font-medium bg-black text-white py-2 px-3 xl:block">lọc sản phẩm</h2>
						<div class="filter-content-height overflow-y-auto xl:pt-2 xl:pb-4">
							<div class="xl:px-2.5">
								<div class="flex items-center justify-between px-2.5 pt-1.5 pb-1 bg-gray-200 xl:bg-white">
									<span class="xl:text-lg font-medium">Hình Thức</span>
									<span class="xl:hidden"><i class="fas fa-plus pr-1"></i></span>
								</div>
								<ul class="mx-2 py-0.5 text-sm xl:ml-2.5">
									<li>
										<label class="flex items-center px-1.5 py-1.5">
											<input class="select-box-size mr-2" type="checkbox"> Tất cả
										</label>
									</li>
									<li>
										<label class="flex items-center px-1.5 py-1.5">
											<input class="select-box-size mr-2" type="checkbox"> Likenew 99%
										</label>
									</li>
									<li>
										<label class="flex items-center px-1.5 py-1.5">
											<input class="select-box-size mr-2" type="checkbox"> Mới 100%
										</label>
									</li>
								</ul>
							</div>
							<div class="xl:px-2.5">
								<div class="flex items-center justify-between px-2.5 pt-1.5 pb-1 bg-gray-200 xl:bg-white">
									<span class="xl:text-lg font-medium">Bộ nhớ</span>
									<span class="xl:hidden"><i class="fas fa-plus pr-1"></i></span>
								</div>
								<ul class="mx-2 py-0.5 text-sm xl:ml-2.5">
									<li>
										<label class="flex items-center px-1.5 py-1.5">
											<input class="select-box-size mr-2" type="checkbox"> Tất cả
										</label>
									</li>
									<li>
										<label class="flex items-center px-1.5 py-1.5">
											<input class="select-box-size mr-2" type="checkbox"> 256GB
										</label>
									</li>
									<li>
										<label class="flex items-center px-1.5 py-1.5">
											<input class="select-box-size mr-2" type="checkbox"> 64GB
										</label>
									</li>
								</ul>
							</div>
							<div class="xl:px-2.5">
								<div class="flex items-center justify-between px-2.5 pt-1.5 pb-1 bg-gray-200 xl:bg-white">
									<span class="xl:text-lg font-medium">Màu sắc</span>
									<span class="xl:hidden"><i class="fas fa-plus pr-1"></i></span>
								</div>
								<ul class="mx-2 py-0.5 text-sm xl:ml-2.5">
									<li>
										<label class="flex items-center px-1.5 py-1.5">
											<input class="select-box-size mr-2" type="checkbox"> Tất cả
										</label>
									</li>
									<li>
										<label class="flex items-center px-1.5 py-1.5">
											<input class="select-box-size mr-2" type="checkbox"> Xanh Midnight
										</label>
									</li>
									<li>
										<label class="flex items-center px-1.5 py-1.5">
											<input class="select-box-size mr-2" type="checkbox"> Xanh ngọc
										</label>
									</li>
									<li>
										<label class="flex items-center px-1.5 py-1.5">
											<input class="select-box-size mr-2" type="checkbox"> Đỏ
										</label>
									</li>
									<li>
										<label class="flex items-center px-1.5 py-1.5">
											<input class="select-box-size mr-2" type="checkbox"> Đen
										</label>
									</li>
									<li>
										<label class="flex items-center px-1.5 py-1.5">
											<input class="select-box-size mr-2" type="checkbox"> Vàng
										</label>
									</li>
									<li>
										<label class="flex items-center px-1.5 py-1.5">
											<input class="select-box-size mr-2" type="checkbox"> Trắng
										</label>
									</li>
									<li>
										<label class="flex items-center px-1.5 py-1.5">
											<input class="select-box-size mr-2" type="checkbox"> Tím
										</label>
									</li>
								</ul>
							</div>
							<div class="xl:px-2.5">
								<div class="flex items-center justify-between px-2.5 pt-1.5 pb-1 bg-gray-200 xl:bg-white">
									<span class="xl:text-lg font-medium">Tìm theo giá</span>
									<span class="xl:hidden"><i class="fas fa-plus pr-1"></i></span>
								</div>
								<ul class="mx-2 py-0.5 text-sm xl:ml-2.5">
									<li>
										<label class="flex items-center px-1.5 py-1.5">
											<input class="select-box-size mr-2" type="checkbox"> Tất cả
										</label>
									</li>
									<li>
										<label class="flex items-center px-1.5 py-1.5">
											<input class="select-box-size mr-2" type="checkbox">  Dưới 2 triệu
										</label>
									</li>
									<li>
										<label class="flex items-center px-1.5 py-1.5">
											<input class="select-box-size mr-2" type="checkbox"> 2 triệu - 4 triệu
										</label>
									</li>
									<li>
										<label class="flex items-center px-1.5 py-1.5">
											<input class="select-box-size mr-2" type="checkbox"> 4 triệu - 7 triệu
										</label>
									</li>
									<li>
										<label class="flex items-center px-1.5 py-1.5">
											<input class="select-box-size mr-2" type="checkbox"> 7 triệu - 13 triệu
										</label>
									</li>
									<li>
										<label class="flex items-center px-1.5 py-1.5">
											<input class="select-box-size mr-2" type="checkbox"> Trên 13 triệu
										</label>
									</li>
								</ul>
							</div>
						</div>
						<div class="absolute bottom-0 py-3 inset-x-0 flex items-center justify-center border-t border-gray-200 xl:hidden">
							<button class="bg-yellow-500 text-white py-1.5 px-4 rounded mx-1">Thu gọn</button>
							<button class="bg-f5-secondary text-white py-1.5 px-4 rounded mx-1">Đặt lại</button>
							<button class="bg-f5-primary text-white py-1.5 px-4 rounded mx-1">Áp dụng</button>
						</div>
					</div>
				</div>
                <div class="flex-1">
					<div class="hidden items-center justify-end bg-white py-1.5 px-4 rounded-lg xl:flex">
						<div class="relative flex items-center group">
							<span class="mr-3 font-medium border-b border-transparent text-lg">Sắp xếp:</span>
							<div class="flex items-center justify-between w-36 border-b border-gray-500 text-gray-500">
								<span>Bán chạy nhất</span>
								<i class="fas fa-chevron-down"></i>
							</div>
							<div class="hidden group-hover:block absolute top-full -inset-x-1 z-10 px-4 pt-2.5 pb-4 bg-white border border-gray-200 shadow-lg rounded-md">
								<button class="block py-1 hover:text-f5-primary">Nổi bật</button>
								<button class="block py-1 hover:text-f5-primary">Bán chạy nhất</button>
								<button class="block py-1 hover:text-f5-primary">Giá tăng dần</button>
								<button class="block py-1 hover:text-f5-primary">Giá giảm dần</button>
								<button class="block py-1 hover:text-f5-primary">% Giảm</button>
							</div>
						</div>
						<div class="relative flex items-center text-lg ml-5">
							<span class="mr-3 font-medium border-b border-transparent">Chế độ xem:</span>
							<div class="flex items-center">
								<span class="px-1.5 text-lg bg-gray-400 hover:bg-gray-300 cursor-pointer rounded-md mr-2"><i class="fas fa-th"></i></span>
								<span class="px-1.5 text-lg bg-gray-400 hover:bg-gray-300 cursor-pointer rounded-md text-white"><i class="fas fa-th-list"></i></span>
							</div>
						</div>
					</div>
					<category-layout-product :productsList="productCategory" />
				</div>
            </div>
        </div>
    </div>
</template>
<script>
import CategoryHeader from '../components/category/CategoryHeader.vue';
import CategoryLayoutProduct from '../components/category/CategoryLayoutProduct.vue';
import { ref, watch, computed, reactive, toRefs } from 'vue';
import { useStore } from 'vuex';
import { navList } from '../data/initialData';
export default {
    props: {
        categoryName: String,
    },
	components: {
		CategoryHeader,
		CategoryLayoutProduct,
	},
	setup(props) {
        const pagePath = computed(() => '/categories/' + props.categoryName);
		const categoryList = ref([]);
		const nameInGetter = ref('');
		watch(pagePath, () => {
			categoryList.value = findCategoryList();
			nameInGetter.value = categoryList.value.nameInGetter;
		}, { immediate : true })
		
		function findCategoryList() {
			for (let item of navList) {
				if(item.categoryPath === pagePath.value) {
					return item;
				}
				if(item.categoryList) {
					for(let subItem of item.categoryList) {
						if(subItem.typePath === pagePath.value) {
							return subItem;
						}
					}

				}
			}
			return [];
		}

		/* filter sidebar */
		const stateMonitor = reactive({
			isOpenSideFilter: false,
			isOpenSortDropdown: false,
		})

		/* get product */
		const store = useStore();
        store.dispatch('getProductsList');
        const productCategory = computed(() => store.getters.productCategoryFromName(nameInGetter.value));
		console.log('productCategory:', productCategory.value);

		return {
			categoryList,
			...toRefs(stateMonitor),
			productCategory,
		}
    },
}
</script>

<style scoped>
	.filter-content-height {
		height: calc(100vh - 44px - 72px);
	}
	@media screen and (min-width: 1280px) {
		.filter-content-height {
			height: auto;
		}
	}
</style>
