<script setup>
const props = defineProps(['title', 'variable', 'click', 'type', 'disabled']);
</script>

<template>
	<button :type="type" :class="[variable]" @click="click" :disabled="disabled">
		<slot></slot>
	</button>
</template>

<style lang="scss">
@import '@/shared/styles/vars';

button.primary {
	background: var(--gold-color);
	border-radius: 999px;
	height: 53px;
	text-align: center;
	font-weight: 500;
	font-size: 18px;
	line-height: 21px;
	color: var(--white-color);
	transition: var(--trs-300);
	&:hover {
		background: var(--red-color);
	}
}
</style>
