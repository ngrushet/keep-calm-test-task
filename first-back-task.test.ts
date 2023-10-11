import FirstBackTask from "./first-back-task";

describe("FirstBackTask", () => {
  describe("getResult", () => {
    it("should return the correct result", () => {
      // Arrange
      const actions = ["start", "connect", "message", "end"];
      // Act
      const result = FirstBackTask.getResult(actions);
      // Assert
      expect(result).toEqual(1);
    });
  });
  describe("getResult", () => {
    it("should return the correct result", () => {
      // Arrange
      const actions = ["start", "connect", "message", "end", "start", "connect", "message", "end", "start", "connect", "message"];
      // Act
      const result = FirstBackTask.getResult(actions);
      // Assert
      expect(result).toEqual(2);
    });
  });
  describe("getResult", () => {
    it("should return the correct result", () => {
      // Arrange
      const actions = ["end", "start", "connect", "message", "end", "connect", "start", "message", "end"];
      // Act
      const result = FirstBackTask.getResult(actions);
      // Assert
      expect(result).toEqual(1);
    });
  });
});