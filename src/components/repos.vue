<template>
	<div class="repos">
		<header>
			<a :href="href" target="_blank">{{ name }}</a>
			<div class="language-container">
				<i class="fa fa-circle" aria-hidden="true" :style="{ 'color': color }"></i>
				<span>{{ language}}</span>
			</div>
			<div class="star-container">
				<i class="fa fa-star" aria-hidden="true"></i>
				<span>{{ finalStar }}</span>
			</div>
		</header>

		<section>
			<p>{{ des }}</p>
		</section>
	</div>
</template>

<script>
	export default {
		props: {
			href: {
				type: String,
				default: ''
			},
			name: {
				type: String,
				default: ''
			},
			language: {
				type: String,
				default: ''
			},
			star: {
				type: String | Number,
				default: 0
			},
			des: {
				type: String,
				default: ''
			}
		},
		computed: {
			finalStar () {
				if (this.star >= 1000) {
					return Math.floor(this.star / 1000) + 'k'
				}
				return this.star
			},
			color () {
				if (this.language === 'JavaScript') {
					return '#f1e05a'
				}

				if (this.language === 'Vue') {
					return '#2c3e50'
				}

				if (this.language === 'HTML') {
					return '#e34c26'
				}

				if (this.language === 'Java') {
					return '#b07219'
				}

				return '#6E828A'
			}
		},
	}
</script>

<style scoped>

	.repos {
		padding: 16px 0;
		border-bottom: 1px solid #e1e4e8;
	}

	header {
		display: flex;
		flex-flow: row nowrap;
		margin-bottom: 12px;
		align-items: center;
	}

	header > a {
		flex: 7 7 273px;
		text-decoration: none;
		color: #008cff;
		font-weight: bold;
		font-size: 18px;
	}

	.language-container, .star-container {
		font-size: 14px;
		color: #444;
	}

	.language-container {
		text-align: left;
		flex: 3 3 117px;
	}

	.star-container {
		text-align: right;
		flex: 1 1 78px;
	}

	i {
		margin-right: 4px;
	}

	p {
		font-size: 14px;
		color: #666;
	}
</style>