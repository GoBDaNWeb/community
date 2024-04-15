<script setup>
import { watch } from 'vue';
import { RouterLink, RouterView, useRoute } from 'vue-router';

import { EventModal } from '@/widgets/event-modal';
import { Footer } from '@/widgets/footer';
import { Header } from '@/widgets/header';
import { MikvaModal } from '@/widgets/mikva-modal';
import { SuccessModal } from '@/widgets/success-modal';

const router = useRoute();

watch(router, () => {
	window.scrollTo({
		top: 0,
		left: 0,
		behavior: 'instant'
	});
});
</script>

<template>
	<Header />
	<RouterView />
	<Footer />
	<EventModal />
	<SuccessModal />
	<MikvaModal />
</template>
