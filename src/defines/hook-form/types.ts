export type HookFormChangeEvent = {
	target: {
		name: string;
		value: string;
	};
	type: string;
};

export type HookFormChangeEventHandler = (e: HookFormChangeEvent) => void;
