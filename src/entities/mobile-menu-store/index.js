import { computed, ref } from 'vue';

import { defineStore } from 'pinia';

export const useMobileMenuStore = defineStore('mobile-menu', {
	state: () => {
		return { menuActive: false };
	},

	actions: {
		handleOpenMenu() {
			this.menuActive = !this.menuActive;
		}
	}
});
