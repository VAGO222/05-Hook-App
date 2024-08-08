import { renderHook } from "@testing-library/react";
import { useForm } from "../../src/hooks/useForm";
import { act } from "react";

describe("Pruebas en useForm", () => {
  const initialForm = {
    name: "Alan",
    email: "alan.google.com",
  };

  test("Debe de regrersar los valores por defecto", () => {
    const { result } = renderHook(() => useForm(initialForm));
    expect(result.current).toEqual({
      name: initialForm.name,
      email: initialForm.email,
      formState: initialForm,
      onInputChange: expect.any(Function),
      onResetForm: expect.any(Function),
    });
  });

  test("Debe de cambiar el valor del formulario", () => {
    const { result } = renderHook(() => useForm(initialForm));
    const { onInputChange } = result.current;

    const event = {
      target: {
        name: "name",
        value: "Alan",
      },
    };

    act(() => {
      onInputChange(event);
    });

    expect(result.current.name).toBe("Alan");
    expect(result.current.formState.name).toBe("Alan");
  });

  test("Debe de regrersar el formulario", () => {
    const { result } = renderHook(() => useForm(initialForm));
    const { onResetForm } = result.current;

    act(() => {
      onResetForm();
    });

    expect(result.current.name).toBe(initialForm.name);
    expect(result.current.email).toBe(initialForm.email);
    expect(result.current.formState).toEqual(initialForm);
  });
});
