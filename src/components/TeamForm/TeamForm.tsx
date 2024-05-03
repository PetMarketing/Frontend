'use client'

import React, { ChangeEvent, FormEvent, useState } from 'react'
import Image from 'next/image'

import Loader from '@/components/Loader/Loader'
import Button from '@/components/Button/Button'

import { ITeamFormData, ITeamFormDataErrors } from '@/types/IFormData'

import clip from '@/assets/clip.png'
import welcome from '@/assets/welcome.png'

import styles from './TeamForm.module.scss'

const apiKey = process.env.NEXT_PUBLIC_API_KEY

const TeamForm = () => {
	const [formData, setFormData] = useState<ITeamFormData>({
		name: '',
		position: '',
		email: '',
		description: '',
		imagePath: null,
	})

	const [validationErrors, setValidationErrors] = useState<Partial<ITeamFormDataErrors>>(
		{},
	)
	const [showErrorMessage, setShowErrorMessage] = useState<boolean>(false)
	const [showSentConfirm, setShowSentConfirm] = useState<boolean>(false)
	const [loading, setLoading] = useState<boolean>(false)

	const handleChange = (
		e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLInputElement>,
	) => {
		const { name, value } = e.target
		setFormData(prevState => ({
			...prevState,
			[name]: value,
		}))
		setValidationErrors(prevState => ({
			...prevState,
			[name]: '',
		}))
	}

	const handleCVChange = (e: ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0]
		setFormData(prevState => ({
			...prevState,
			imagePath: file || null,
		}))
	}

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		const errors: Partial<ITeamFormDataErrors> = {}
		if (!formData.name.trim()) {
			errors.name = 'Введіть імʼя'
		}
		if (!formData.position.trim()) {
			errors.position = 'Введіть посаду'
		}
		if (!formData.email.trim()) {
			errors.email = 'Введіть email address'
		} else if (!validateEmail(formData.email)) {
			errors.email = 'Невірний email address'
		}
		if (!formData.description.trim()) {
			errors.description = 'Введіть опис'
		}
		if (formData.imagePath === null) {
			errors.imagePath = 'No file'
		}

		setValidationErrors(errors)

		if (Object.keys(errors).length === 0) {
			setLoading(true)
			try {
				const formDataToSend = new FormData()
				formDataToSend.append('name', formData.name)
				formDataToSend.append('email', formData.email)
				formDataToSend.append('position', formData.position)
				formDataToSend.append('description', formData.description)
				if (formData.imagePath) {
					formDataToSend.append('imagePath', formData.imagePath)
				}

				const response = await fetch(`${apiKey}/team-form`, {
					method: 'POST',
					body: formDataToSend,
				})

				if (response.ok) {
					setFormData({
						name: '',
						position: '',
						email: '',
						description: '',
						imagePath: null,
					})
					setLoading(false)
					setShowSentConfirm(true)
				}
			} catch (error) {
				setShowErrorMessage(true)
			}
		}
	}

	const validateEmail = (email: string): boolean => {
		const regex = /\S+@\S+\.\S+/
		return regex.test(email)
	}

	return (
		<div className={styles.teamForm}>
			{showSentConfirm ? (
				<div className={styles.welcomeBlock}>
					<Image src={welcome} alt='welcome image' />
					<h5 style={{ textTransform: 'uppercase' }}>
						Дякуємо! <br /> Скоро напишемо вам!
					</h5>
				</div>
			) : (
				<>
					{loading ? (
						<div className={styles.loaderWrapper}>
							<Loader className={styles.loader} />
						</div>
					) : (
						<form className={styles.form} onSubmit={handleSubmit}>
							{showErrorMessage && (
								<p style={{ color: 'red' }}>
									Нажаль, щось пішло не так:( <br />
									Перевірте чи правильно заповнили форми
								</p>
							)}
							<div className={styles.inputContainer} style={{ gridArea: 'name' }}>
								<input
									type='text'
									id='name'
									name='name'
									placeholder=''
									value={formData.name}
									onChange={handleChange}
									style={
										validationErrors.name ? { borderColor: 'red' } : undefined
									}
								/>
								{validationErrors.name ? (
									<label htmlFor='name' style={{ color: 'red' }}>
										{validationErrors.name}
									</label>
								) : (
									<label htmlFor='name'>Ім’я</label>
								)}
							</div>
							<div
								className={styles.inputContainer}
								style={{ gridArea: 'position' }}
							>
								<input
									type='text'
									id='position'
									name='position'
									placeholder=''
									value={formData.position}
									onChange={handleChange}
									style={
										validationErrors.position
											? { borderColor: 'red' }
											: undefined
									}
								/>
								{validationErrors.position ? (
									<label htmlFor='name' style={{ color: 'red' }}>
										{validationErrors.position}
									</label>
								) : (
									<label htmlFor='name'>Посада</label>
								)}
							</div>
							<div className={styles.inputContainer} style={{ gridArea: 'email' }}>
								<input
									type='email'
									id='email'
									name='email'
									placeholder=''
									value={formData.email}
									onChange={handleChange}
									style={
										validationErrors.email ? { borderColor: 'red' } : undefined
									}
								/>
								{validationErrors.email ? (
									<label htmlFor='name' style={{ color: 'red' }}>
										{validationErrors.email}
									</label>
								) : (
									<label htmlFor='name'>Email address</label>
								)}
							</div>
							<div
								className={styles.inputContainer}
								style={{ gridArea: 'description' }}
							>
								<input
									id='description'
									name='description'
									placeholder=''
									value={formData.description}
									onChange={handleChange}
									style={
										validationErrors.description
											? { borderColor: 'red' }
											: undefined
									}
								/>
								{validationErrors.description ? (
									<label htmlFor='name' style={{ color: 'red' }}>
										{validationErrors.description}
									</label>
								) : (
									<label htmlFor='name'>Короткий опис</label>
								)}
							</div>
							{formData.imagePath === null ? (
								<label
									htmlFor='cv'
									className={styles.fileUpload}
									style={
										validationErrors.imagePath
											? { border: '1px solid red', color: 'red' }
											: undefined
									}
								>
									Прикріпити резюме +
								</label>
							) : (
								<label htmlFor='cv' className={styles.fileUpload}>
									Прикріплено{' '}
									<Image
										src={clip}
										alt='clip icon'
										style={{ marginLeft: '5px' }}
									/>
								</label>
							)}
							<input
								type='file'
								id='cv'
								name='cv'
								accept='.pdf'
								onChange={handleCVChange}
								style={{ display: 'none' }}
							/>
							<Button variant='primary' type='submit' className={styles.sendBtn}>
								Надіслати
							</Button>
						</form>
					)}
				</>
			)}
		</div>
	)
}

export default TeamForm
