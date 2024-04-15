<script setup>
defineProps(['placeholder']);
</script>

<template>
	<textarea class="textarea" :placeholder="placeholder"></textarea>
</template>

<style lang="scss" scoped>
.textarea {
	resize: none;
	height: 62px;
	border: none;
	border-bottom: 1px solid var(--border-color);
	width: 100%;
	outline: none;
	font-size: 16px;
	line-height: 20px;
	font-family: 'Inter', sans-serif;
	color: var(--gray-color);
	&::placeholder {
		font-weight: 400;
		color: var(--gray-back-color);
		font-size: 16px;
		line-height: 20px;
		font-family: 'Inter', sans-serif;
		opacity: 1;
	}
}
</style>
