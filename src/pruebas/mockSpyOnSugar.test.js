import * as app from "./app";
import * as math from "./math";
test("calls math.add", () => {
  // se crea una constante y se la asigna el metodo add de la clase math
  const originalAdd = math.add;
  // luego se mokea el metodo add de la clase math
  math.add = jest.fn(originalAdd);
  // se hace la validacion del metodo doAdd ingresando 2 valores como parametro y comparamos su resultado
  // con el metodo toEqual ingrsando como parametro el valor que deseamos como respuesta 
  expect(app.doAdd(1, 2)).toEqual(3);
  expect(math.add).toHaveBeenCalledWith(1, 2);
  // se sobreescribe el metodo add para que el resultado esperado sea "mock" y luego validamos
  // el metodo doAdd esperando como respuesta "mock"
  math.add.mockImplementation(() => "mock");
  expect(app.doAdd(1, 2)).toEqual("mock");
  // validamos el llamdo de la funcion simulada con argumentos especificos 
  expect(math.add).toHaveBeenCalledWith(1, 2);
  // finalmente restauramos el valor final del metodo add y validamos su respuesta 
  math.add = originalAdd;
  expect(app.doAdd(1, 2)).toEqual(3);
});