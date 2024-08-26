// import { useState } from 'react'
// import VisibilityIcon from '@mui/icons-material/Visibility'
// import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
// import { TextField } from '@mui/material'
// import { CommonForm } from './types'

// interface PasswordInputProps extends CommonForm {
// 	id?: string
// 	label?: string
// 	variant?: 'outlined' | 'filled' | 'standard'
// 	size?: 'small' | 'medium'
// 	placeholder?: string
// 	type: string
// }

// export const MyPasswordInput: React.FC<PasswordInputProps> = ({
// 	id,
// 	type,
// 	value,
// 	onChange,
// 	placeholder,
// 	label,
// 	variant,
// 	size,
// 	...props
// }) => {
// 	const [showPassword, setShowPassword] = useState(false)

// 	const togglePasswordVisibility = () => {
// 		setShowPassword(!showPassword)
// 	}

// 	return (
// 		<div style={{ position: 'relative', marginTop: '6px' }}>
// 			<TextField
// 				type={showPassword ? 'text' : 'password'}
// 				id={id}
// 				value={value}
// 				onChange={onChange}
// 				placeholder={placeholder}
// 				variant={variant}
// 				label={label}
// 				size={size}
// 				fullWidth
// 				InputProps={{
// 					endAdornment: (
// 						<span
// 							onClick={togglePasswordVisibility}
// 							style={{
// 								position: 'absolute',
// 								right: '10px',
// 								top: '57%',
// 								transform: 'translateY(-50%)',
// 								cursor: 'pointer',
// 								userSelect: 'none',
// 							}}
// 						>
// 							{showPassword ? (
// 								<VisibilityIcon
// 									sx={{
// 										color: '#E1E1E1',
// 									}}
// 								/>
// 							) : (
// 								<VisibilityOffIcon
// 									sx={{
// 										color: '#E1E1E1',
// 									}}
// 								/>
// 							)}
// 						</span>
// 					),
// 				}}
// 				{...props}
// 			/>
// 		</div>
// 	)
// }
import React, { useState } from 'react'
import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import { CommonForm } from './types'
import { FormInput, Label } from '@/features/Auth/style/style'

interface PasswordInputProps extends CommonForm {
	id?: string
	label?: string
	placeholder?: string
	type: string
}

export const MyPasswordInput: React.FC<PasswordInputProps> = ({
	id,
	type,
	value,
	onChange,
	placeholder,
	label,
	...props
}) => {
	const [showPassword, setShowPassword] = useState(false)

	const togglePasswordVisibility = () => {
		setShowPassword(!showPassword)
	}

	return (
		<div style={{ position: 'relative', marginTop: '25px' }}>
			<Label htmlFor={id}>{label}</Label>
			<FormInput
				type={showPassword ? 'text' : 'password'}
				id={id}
				value={value}
				onChange={onChange}
				placeholder={placeholder}
				{...props}
			/>
			<span
				onClick={togglePasswordVisibility}
				style={{
					position: 'absolute',
					right: '10px',
					top: '71%', // Adjust this to better center the icon
					transform: 'translateY(-50%)',
					cursor: 'pointer',
					userSelect: 'none',
					display: 'flex',
					alignItems: 'center',
					height: '100%', // Make sure it takes up the full height of the input
				}}
			>
				{showPassword ? (
					<VisibilityIcon
						sx={{
							color: '#E1E1E1',
						}}
					/>
				) : (
					<VisibilityOffIcon
						sx={{
							color: '#E1E1E1',
						}}
					/>
				)}
			</span>
		</div>
	)
}
