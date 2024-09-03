import { LABEL_BY_DEMAND_TYPE } from "@/defines/forms/project/constants";
import { DemandType } from "@/defines/forms/project/types";

export const DEMAND_RADIOS: { value: DemandType; label: string }[] = Object.keys(LABEL_BY_DEMAND_TYPE).map((key) => ({
	value: key as DemandType,
	label: LABEL_BY_DEMAND_TYPE[key as DemandType],
}));
