export default class SecondBackTask {
    static getResult(a: number, b: number): number {

        const lastDigitMap: number[][] = [
            [0],
            [1],
            [6, 2, 4, 8],
            [1, 3, 9, 7],
            [6, 4],
            [5],
            [6],
            [1, 7, 9, 3],
            [6, 8, 4, 2],
            [1, 9]
        ];

        const lastDigitA = a % 10

        const lastDigitIndex = b % lastDigitMap[lastDigitA].length;
        const lastDigit = lastDigitMap[lastDigitA][lastDigitIndex];

        return lastDigit;
    }
}