export interface CommonForm {
	labelName?: string
	checked?: boolean
	name?: string
	onChange?: any
	error?: boolean
	errorMessage?: string
	value?: string | number | readonly string[] | undefined
	placeholder?: string
	helperText?: React.ReactNode
}

export interface Status {
	status: 'idle' | 'loading' | 'success' | 'error'
}

export type Page = "constructor" | "school" | "user" | "logout";

export interface NavItem {
  label: string;
  icon: string;
  value: Page;
  path: any;
}
