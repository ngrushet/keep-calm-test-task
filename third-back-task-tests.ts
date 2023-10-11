class FirstBackTask {
    static getResult(actions: string[]): number {
        const statusCounts: Record<string, number> = {};

        let currentStatus: string | null = null;
        let sessionCount = 0;

        for (const action of actions) {
            if (action === "start") {
                currentStatus = null; // Сбрасываем текущий статус при начале новой сессии
            } else if (action === "message") {
                if (currentStatus) {
                    statusCounts[currentStatus] = (statusCounts[currentStatus] || 0) + 1; // Увеличиваем счетчик отправленных сообщений для текущего статуса
                }
            } else if (action === "end") {
                if (currentStatus) {
                    delete statusCounts[currentStatus]; // Удаляем текущий статус из словаря при завершении сессии
                }
            } else {
                currentStatus = action; // Устанавливаем текущий статус
            }
        }

        sessionCount = Object.keys(statusCounts).length; // Количество оставшихся статусов в словаре соответствует количеству сессий

        return sessionCount;
    }
}

const actions = ["start", "connect", "message", "end"];
console.log(FirstBackTask.getResult(actions)); // 1

const actions2 = ["start", "connect", "message", "end", "start", "connect", "message", "end", "start", "connect", "message"];
console.log(FirstBackTask.getResult(actions2)); // 2