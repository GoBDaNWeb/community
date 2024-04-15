import { computed, ref } from 'vue';

import { defineStore } from 'pinia';

export const useMikvaModalStore = defineStore('mikva-modal', {
	state: () => {
		return { modalActive: false };
	},

	actions: {
		handleOpenModal() {
			this.modalActive = !this.modalActive;
		}
	}
});
