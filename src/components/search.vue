<template>
	<div class="search">
		<input type="text" placeholder="Search Github" @keyup.enter="searchHandler" v-model="value">
		<i class="fa fa-search" aria-hidden="true" @click="searchHandler"></i>
	</div>
</template>
<script>
	export default {
		data () {
			return {
				value: ''
			}
		},
		methods: {
			searchHandler (e) {
				this.$store.dispatch('toggleInit')
				let that = this
				this.$http.get(`https://api.github.com/search/repositories?q=${this.value}&page=1&per_page=20`)
					.then(function (response) {
						that.updateRepos(response.data.items)
					})
					.catch(function (error) {
						console.log(error)
					})
			},
			updateRepos (data) {
				this.$store.dispatch('updateRepos', data)
			}
		}
	}
</script>
<style scoped>
	input {
		width: 468px;
		outline: none;
		height: 36px;
		font-size: 16px;
		line-height: 36px;
		padding: 0 16px;
		border-radius: 36px;
		border: 1px solid #ccc;
		transition: all .2s;
	}

	input:focus {
		border-color: #008cff;
		transition: all .2s;
	}

	.search {
		position: relative;
	}

	.fa {
		font-size: 18px;
		position: absolute;
		top: 8px;
		right: 18px;
		color: #ccc;
		transition: all .2s;
		cursor: pointer;
	}

	input:focus ~ .fa {
		color: #008cff;
		transition: all .2s;
	}
</style>