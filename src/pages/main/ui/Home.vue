<script setup>
import About from './About.vue';
import Activity from './Activity.vue';
import Events from './Events.vue';
import Gallery from './Gallery.vue';
import Hero from './Hero.vue';
import Tsdaka from './Tsdaka.vue';

import { Contacts } from '@/widgets/contacts';
import { Donation } from '@/widgets/donation';
</script>

<template>
	<main>
		<Hero />
		<Events />
		<About />
		<Activity />
		<Tsdaka />
		<Donation />
		<Gallery />
		<Contacts />
	</main>
</template>
