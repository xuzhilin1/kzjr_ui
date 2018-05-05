import pagination from './pagination.vue'

if (typeof window !== 'undefined' && window.Vue) {
	Vue.component(pagination.name, pagination)
}

pagination.install = function(Vue) {
	Vue.component(pagination.name, pagination)
}

export default pagination
