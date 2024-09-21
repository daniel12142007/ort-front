import React from "react"
import { CommonForm } from "./types"
import { FormInput, Label } from "@/features/Auth/style/style"
import { UseFormRegisterReturn } from "react-hook-form"

interface InputProps extends CommonForm {
  id?: string
  type?: string
  label?: string
  register?: UseFormRegisterReturn
}

export const MyInput: React.FC<InputProps> = ({
  id,
  name,
  label,
  type,
  onChange,
  value,
  register,
  ...props
}) => {
  return (
    <div>
      <Label htmlFor={id}>{label}</Label>
      <FormInput
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        {...register}
        {...props}
      />
    </div>
  )
}
