export interface ITeamFormData {
	name: string
	position: string
	email: string
	description: string
	imagePath: File | null
}

export interface ITeamFormDataErrors {
	name: string
	position: string
	email: string
	description: string
	imagePath: string
}
