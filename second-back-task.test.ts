import SecondBackTask from "./second-back-task";

describe("SecondBackTask", () => {
    describe("getResult", () => {
        it("should return the correct result", () => {
            // Arrange
            const a = 7;
            const b = 3;
            // Act
            const result = SecondBackTask.getResult(a, b);
            // Assert
            expect(result).toEqual(3);
        });
    });
    describe("getResult", () => {
        it("should return the correct result", () => {
            // Arrange
            const a = 5;
            const b = 123456789;
            // Act
            const result = SecondBackTask.getResult(a, b);
            // Assert
            expect(result).toEqual(5);
        });
    });
    describe("getResult", () => {
        it("should return the correct result", () => {
            // Arrange
            const a = 5;
            const b = 123456789;
            // Act
            const result = SecondBackTask.getResult(a, b);
            // Assert
            expect(result).toEqual(5);
        });
    });
    describe("getResult", () => {
        it("should return the correct result", () => {
            // Arrange
            const a = 1;
            const b = 19;
            // Act
            const result = SecondBackTask.getResult(a, b);
            // Assert
            expect(result).toEqual(1);
        });
    });
    describe("getResult", () => {
        it("should return the correct result", () => {
            // Arrange
            const a = 17;
            const b = 3;
            // Act
            const result = SecondBackTask.getResult(a, b);
            // Assert
            expect(result).toEqual(3);
        });
    });
});
