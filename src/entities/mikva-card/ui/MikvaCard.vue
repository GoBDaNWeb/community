<script setup>
defineProps(['img', 'title', 'text']);
</script>

<template>
	<div class="mikva-card">
		<div class="image-wrapper">
			<img :src="img" alt="mikva" />
		</div>
		<div class="content">
			<h6>{{ title }}</h6>
			<p>{{ text }}</p>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.mikva-card {
	.image-wrapper {
		padding-bottom: 100%;
		position: relative;
		img {
			position: absolute;
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}
	.content {
		margin-top: 30px;
		h6 {
			color: var(--gray-color);
			font-weight: 500;
			font-size: 32px;
			line-height: 38px;
			letter-spacing: -1px;
		}
		p {
			color: var(--gray-color);
			margin-top: 20px;
			font-weight: 400;
			line-height: 22px;
			letter-spacing: -1px;
		}
	}
}
</style>
