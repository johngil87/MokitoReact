import * as app from "./app";
import * as math from "./math";


test("calls math.add", () => {
  const addMock = jest.spyOn(math, "add");
  // calls the original implementation
  expect(app.doAdd(1, 2)).toEqual(3);
  // and the spy stores the calls to add
  expect(addMock).toHaveBeenCalledWith(1, 2);
});



  test("calls math.subtract", () => {
    const addMock = jest.spyOn(math, "subtract");
    // calls the original implementation
    expect(app.doSubtract(5, 1)).toEqual(4);
    // and the spy stores the calls to add
    expect(addMock).toHaveBeenCalledWith(5, 1);
  });



