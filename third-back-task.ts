export default class ThirdBackTask {
    static getResult(s: string): string {
        const stack: (number | string)[] = [];
        let finalResult: string = "";
        
        for (let i = 0; i < s.length; i++) {
            const char = s[i];

            if (/\d/.test(char)) {
                stack.push(Number(char));

            } else if (char === "{") {
                stack.push("{");

            } else if (char === "}") {
                let toRepeat: string = "";

                while (stack[stack.length - 1] !== "{") {
                    toRepeat = stack.pop() as string + toRepeat;
                }
                stack.pop(); // Удаляем "{"
                stack.push(toRepeat.repeat(stack.pop() as number))
            }
        }

        while (stack.length !== 0) {
            finalResult = stack.pop() as string + finalResult;
        }

        return finalResult;
    }
}

// console.log(ThirdBackTask.getResult("333333")) 