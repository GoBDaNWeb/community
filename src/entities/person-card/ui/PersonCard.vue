<script setup>
defineProps(['img', 'name', 'post']);
</script>

<template>
	<div class="person-card">
		<div class="image-wrapper">
			<img :src="img" alt="person" />
		</div>
		<p>
			{{ name }} <br />
			<span>{{ post }}</span>
		</p>
	</div>
</template>

<style lang="scss" scoped>
.image-wrapper {
	position: relative;
	padding-bottom: 107%;
	img {
		position: absolute;
		width: 100%;
		height: 100%;
		object-fit: cover;
		position: absolute;
	}
}
p {
	color: var(--red-color);
	font-weight: 500;
	font-size: 24px;
	line-height: 28px;
	letter-spacing: -1px;
	margin-top: 20px;
	span {
		color: var(--gold-color);
	}
}
</style>
