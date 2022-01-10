import hyRequest from '../../index'
enum DashboardApi {
	categoryGoodsCount = '/goods/category/count',
	categoryGoodsSale = '/goods/category/sale',
	categoryGoodsFavor = '/goods/category/favor',
	addressGoodsSale = '/goods/address/sale'
}
export function getCategoryGoodsCount() {
	return hyRequest.get({
		url: DashboardApi.categoryGoodsCount
	})
}
export function getCategoryGoodsSale() {
	return hyRequest.get({
		url: DashboardApi.categoryGoodsSale
	})
}
export function getCategoryGoodsFavor() {
	return hyRequest.get({
		url: DashboardApi.categoryGoodsFavor
	})
}
export function getAddressGoodsSale() {
	return hyRequest.get({
		url: DashboardApi.addressGoodsSale
	})
}
