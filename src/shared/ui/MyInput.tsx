import React from 'react'
import { CommonForm } from './types'
import { FormInput, Label } from '@/features/Auth/style/style'

interface InputProps extends CommonForm {
	id?: string
	type?: string
	label?: string
}

export const MyInput: React.FC<InputProps> = ({
	id,
	name,
	label,
	type,
	onChange,
	value,
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
				{...props}
			/>
		</div>
	)
}
