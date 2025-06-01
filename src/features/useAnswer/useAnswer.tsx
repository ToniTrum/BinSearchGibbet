import { COUNT_NUMBERS } from "../../shared/constants";

export const useAnswer = () => Math.floor(Math.random() * COUNT_NUMBERS) + 1;