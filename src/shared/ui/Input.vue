<script setup>
import { computed, defineEmits, defineProps, ref, watch } from 'vue';
import { TheMask } from 'vue-the-mask';

const props = defineProps(['type', 'placeholder', 'value', 'modelValue', 'error', 'modelValue']);
const emit = defineEmits(['update:modelValue']);
const value = computed({
	get: () => props.modelValue,
	set: val => emit('update:modelValue', val)
});

defineExpose({ value });
</script>

<template>
	<div :class="error ? 'error' : ''" v-if="type === 'tel'" class="input-wrapper">
		<input
			v-mask="'+7 (###) ###-##-##'"
			class="input"
			:type="type"
			:placeholder="placeholder"
			:value="modelValue"
			@input="$emit('update:modelValue', $event.target.value)"
		/>
		<p>Заполните поле</p>
	</div>
	<div :class="error ? 'error' : ''" class="input-wrapper" v-else>
		<input
			class="input"
			:type="type"
			:placeholder="placeholder"
			:value="modelValue"
			@input="$emit('update:modelValue', $event.target.value)"
		/>
		<p>Заполните поле</p>
	</div>
</template>

<style lang="scss" scoped>
.input::placeholder {
	color: var(--gray-color);
	text-transform: none;
	opacity: 1;
}
.input-wrapper.error {
	.input {
		border-color: var(--red-color) !important;
	}
	p {
		opacity: 1;
	}
}
.input-wrapper {
	position: relative;
	p {
		position: absolute;
		color: var(--red-color);
		font-size: 11px;
		font-weight: 400;
		line-height: 15px;
		bottom: -20px;
		opacity: 0;
		transition: var(--trs-300);
	}
}
.input {
	font-size: 16px;
	line-height: 22px;
	font-weight: 400;
	outline: none;
	color: var(--gray-color);
	width: 100%;
	padding-bottom: 20px;
	border: none;
	border-bottom: 1px solid var(--border-color);
}
</style>
