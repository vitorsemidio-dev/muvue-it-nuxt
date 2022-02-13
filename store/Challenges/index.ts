import allChallenges from '~/assets/challenges/data';

import { State } from './types';

export const state = (): State => ({
	level: 1,
	xp: {
		current: 0,
		state: 0,
		end: 64,
	},
	completedChallenges: 0,
	currentChallengeIndex: null,
	isLevelUpModalOpen: false,
	allChallenges,
});
