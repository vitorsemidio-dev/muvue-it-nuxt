import { State, Getters, Mutations, MutationsInterface } from './types';

const SECONDS_IN_MINUTE = 60;
const MINUTES = 0.05;

export const state = (): State => ({
	time: MINUTES * SECONDS_IN_MINUTE,
	isActive: false,
	hasCompleted: false,
});

export const getters: Getters = {
	minutes: (state: State): number => Math.floor(state.time / SECONDS_IN_MINUTE),
	seconds: (state: State): number => state.time % SECONDS_IN_MINUTE,
};

export const mutations: MutationsInterface = {
	[Mutations.SET_TIME] (state: State, time: number): void {
		state.time = time;
	},
	[Mutations.RESET_TIME] (state: State): void {
		state.time = MINUTES * SECONDS_IN_MINUTE;
	},
	[Mutations.SET_IS_ACTIVE] (state: State, isActive: boolean): void {
		state.isActive = isActive;
	},
	[Mutations.SET_HAS_COMPLETED] (state: State, hasCompleted: boolean): void {
		state.hasCompleted = hasCompleted;
	},
};
