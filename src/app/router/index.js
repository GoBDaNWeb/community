import { createRouter, createWebHistory } from 'vue-router';

import { About } from '@/pages/about';
import { BecomeMember } from '@/pages/become-member';
import { Contacts } from '@/pages/contacts';
import { Event } from '@/pages/event';
import { Events } from '@/pages/events';
import { Home } from '@/pages/main';
import { Mikva } from '@/pages/mikva';
import { Tsdaka } from '@/pages/tsdaka';
import { TsdakaInner } from '@/pages/tsdaka-inner';

import { PATH_PAGE } from '@/shared/config';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: PATH_PAGE.home,
			name: 'home',
			component: Home
		},
		{
			path: PATH_PAGE.about,
			name: 'about',
			component: About
		},
		{
			path: PATH_PAGE.events,
			name: 'events',
			component: Events
		},
		{
			path: PATH_PAGE.tsdaka,
			name: 'tsdaka',
			component: Tsdaka
		},
		{
			path: `${PATH_PAGE.tsdaka}/:slug`,
			name: 'tsdaka-inner',
			component: TsdakaInner
		},
		{
			path: `${PATH_PAGE.events}/:slug`,
			name: 'event',
			component: Event
		},
		{
			path: `${PATH_PAGE.contacts}`,
			name: 'contacts',
			component: Contacts
		},
		{
			path: `${PATH_PAGE.member}`,
			name: 'become-member',
			component: BecomeMember
		},
		{
			path: `${PATH_PAGE.mikva}`,
			name: 'mikva',
			component: Mikva
		}
	]
});

export default router;
