import { Getters } from './types';

export default {
	challengesLength: state => state.allChallenges.length,
	currentXpPercentage: (state) => {
		const percentage = state.xp.current / state.xp.end * 100;
		return Number(percentage.toFixed(2));
	},
	currentChallenge: (state) => {
		if (typeof state.currentChallengeIndex !== 'number') {
			return null;
		}
		return state.allChallenges[state.currentChallengeIndex];
	},
} as Getters;
