export default class ThirdBackTask {
    static getResult(s: string): string {
        const stack: (number | string)[] = [];
        let finalresult: string = "";
        let stack_string: string = ""

        let temp: string = "";
        
        for (let i = 0; i < s.length; i++) {
            console.log(`received char: ${s[i]} `)
            const char = s[i];
            
            if (/\d/.test(char)) {
                // if (s[i+1] === "{") {
                    stack.push(Number(char))
                // } else {
                //     stack_string += char
                // }
            } else if (char === "{") {
                stack.push("{");
            } else if (char === "}") {
                let toRepeat: string = temp

                while (stack[stack.length - 1] !== "{") {
                    toRepeat = stack.pop() as string + toRepeat;
                    console.log(`toRepeat string: ${toRepeat}`)
                }

                stack.pop(); // Удаляем "{"
                temp = toRepeat.repeat(stack.pop() as number); 
                console.log(`temp string: ${temp}`)
            }
        }
        console.log(`result string before cleaning stack: ${finalresult}`)

        while (stack.length !== 0) {
            finalresult = stack.pop() as string + finalresult;
        }

        return finalresult;
    }
}
