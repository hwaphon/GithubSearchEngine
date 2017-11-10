<template>
	<div class="datalist">
		<header>
			<span 
				class="repository" 
				:class="{ 'selected': active === 'repos' }"
				@click="reposHandler">Repository</span>
			<span 
				class="user"
				:class="{ 'selected': active === 'user' }"
				@click="userHandler">User</span>
		</header>

		<section>
			<Repos 
				v-for="(item, index) in repos"
				:key="index"
				:href="item.html_url"
				:name="item.full_name"
				:language="item.language"
				:star="item.stargazers_count"
				:des="item.description"></Repos>
		</section>
	</div>
</template>
<script>
	import { mapState } from 'vuex'
	import Repos from './repos.vue'
	export default {
		computed: {
			...mapState([
					'active',
					'repos'
				])
		},
		methods: {
			reposHandler () {
				this.$store.dispatch('toggleActive', 'repos')
			},
			userHandler () {
				this.$store.dispatch('toggleActive', 'user')
			}
		},
		components: {
			Repos
		}
	}
</script>
<style scoped>
	.datalist {
		width: 468px;
	}

	header {
		border-bottom: 1px solid #ccc;
		font-size: 14px;
		color: #444;
		padding: 12px 6px;
	}

	header > span {
		margin-right: 16px;
		cursor: pointer;
	}

	header > span:hover, header > span.selected {
		color: #008cff;
		transition: color .2s;
	}

	section {
		margin-bottom: 24px;
	}
</style>