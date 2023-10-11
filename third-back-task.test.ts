import ThirdBackTask from "./third-back-task";

describe("ThirdBackTask", () => {
    describe("getResult", () => {
        it("should return the correct result for 2{4}3{23}", () => {
            // Arrange
            const inputString = "2{4}3{23}";
            // Act
            const result = ThirdBackTask.getResult(inputString);
            // Assert
            expect(result).toEqual("44232323");
        });
    })
    describe("getResult", () => {
        it("should return the correct result for 2{37}4{58}", () => {
            // Arrange
            const inputString = "2{37}4{58}";
            // Act
            const result = ThirdBackTask.getResult(inputString);
            // Assert
            expect(result).toEqual("373758585858");
        });
    })
    describe("getResult", () => {
        it("should return the correct result for 4{93{2}}", () => {
            // Arrange
            const inputString = "4{93{2}}";
            // Act
            const result = ThirdBackTask.getResult(inputString);
            // Assert
            expect(result).toEqual("9222922292229222");
        });
    })
    describe("getResult", () => {
        it("should return the correct result for 1{2{3}} ", () => {
            // Arrange
            const inputString = "1{2{3}}";
            // Act
            const result = ThirdBackTask.getResult(inputString);
            // Assert
            expect(result).toEqual("33");
        });
    })
    describe("getResult", () => {
        it("should return the correct result for 3{2{3}} ", () => {
            // Arrange
            const inputString = "3{2{3}}";
            // Act
            const result = ThirdBackTask.getResult(inputString);
            // Assert
            expect(result).toEqual("333333");
        });
    })
    describe("getResult", () => {
        it("should return the correct result for 3{2{3}}5 ", () => {
            // Arrange
            const inputString = "3{2{3}}5";
            // Act
            const result = ThirdBackTask.getResult(inputString);
            // Assert
            expect(result).toEqual("3333335");
        });
    })
    describe("getResult", () => {
        it("should return the correct result for 3{2{3}5} ", () => {
            // Arrange
            const inputString = "3{2{3}5}";
            // Act
            const result = ThirdBackTask.getResult(inputString);
            // Assert
            expect(result).toEqual("335335335");
        });
    })
    describe("getResult", () => {
        it("should return the correct result 51{2{3}}", () => {
            // Arrange
            const inputString = "51{2{3}}";
            // Act
            const result = ThirdBackTask.getResult(inputString);
            // Assert
            expect(result).toEqual("533");
        });
    })
});