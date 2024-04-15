<script setup>
import { Contacts } from '@/widgets/contacts';
</script>

<template>
	<main>
		<div class="contacts">
			<h1 class="container">Контакты</h1>
			<Contacts />
		</div>
	</main>
</template>

<style lang="scss" scoped>
.contacts {
	margin-top: 80px;
	h1 {
		margin-bottom: 50px;
		color: var(--gray-color);
		font-weight: 500;
		font-size: 64px;
		line-height: 64px;
		letter-spacing: -1px;
	}
}
</style>
