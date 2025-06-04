interface UseRelation {
    selected: number | null
    answer: number
}

export const useRelation = ({ selected, answer }: UseRelation) => {
    const relation =
        selected === null
        ? "null"
        : selected > answer
        ? "<"
        : selected < answer
        ? ">"
        : "=";

    return relation;
};
