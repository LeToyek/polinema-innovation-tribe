import React from "react";
import type { InputType } from "~/types/Input/InputType";
export const InputForm: React.FC<InputType> = ({
  type,
  placeholder,
  width,
  icon,
  label,
  id,
  register,
  defaultValue,
}) => {
  return (
    <div
      className={["p-2", width == "1/2" ? "lg:w-1/2 w-full" : "w-full"].join(
        " "
      )}
    >
      <label
        htmlFor={id}
        className={
          "text-white font-bold block mb-2 text-sm font-medium text-white"
        }
      >
        {label}
      </label>
      <div className={"relative"}>
        {icon ? (
          <div
            className={
              "absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
            }
          >
            {icon}
          </div>
        ) : (
          " "
        )}
        <input
          {...register}
          defaultValue={defaultValue}
          id={id}
          type={type}
          placeholder={placeholder}
          className={[
            "border text-sm rounded-md block w-full bg-transparent border-slate-700 hover:border-purple-500 placeholder-slate-300 placeholder-font-medium text-white focus:ring-purple-500 py-3 px-4 focus:border-purple-500",
            icon ? "pl-10" : " ",
          ].join(" ")}
          autoComplete={"false"}
        />
      </div>
    </div>
  );
};

export const InputFormTest: React.FC<InputType> = ({
  type,
  placeholder,
  width,
  icon,
  label,
  id,
  register,
  defaultValue,
}) => {
  return (
    <div
      className={["p-2", width == "1/2" ? "lg:w-1/2 w-full" : "w-full"].join(
        " "
      )}
    >
      <label
        htmlFor={id}
        className={
          "text-white font-bold block mb-2 text-sm font-medium text-white"
        }
      >
        {label}
      </label>
      <div className={"relative"}>
        {icon ? (
          <div
            className={
              "absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
            }
          >
            {icon}
          </div>
        ) : (
          " "
        )}
        <input
          {...register}
          defaultValue={defaultValue}
          id={id}
          type={type}
          placeholder={placeholder}
          className={[
            "border text-sm rounded-md block w-full bg-transparent border-slate-700 hover:border-purple-500 placeholder-slate-300 placeholder-font-medium text-white focus:ring-purple-500 py-2 px-4 focus:border-purple-500",
            icon ? "pl-10" : " ",
          ].join(" ")}
          autoComplete={"false"}
        />
      </div>
    </div>
  );
};
