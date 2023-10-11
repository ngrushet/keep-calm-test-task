export default class FirstBackTask {
    private static requiredStatuses: string[] = ["start", "connect", "message", "end"];

    static getResult(actions: string[]): number {
        const sessionCount = actions.filter(
                (_, index) => actions.slice(
                    index, index + FirstBackTask.requiredStatuses.length
                ).join() === FirstBackTask.requiredStatuses.join()
            ).length;
        return sessionCount;
    }
}
