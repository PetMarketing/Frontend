'use client'

import React, { useState } from 'react'
import Image from 'next/image'

import Loader from '@/components/Loader/Loader'
import Button from '@/components/Button/Button'

import { ITeamFormData } from '@/types/IFormData'

import clip from '@/assets/clip.png'
import welcome from '@/assets/welcome.png'

import styles from './TeamForm.module.scss'
import { useFormik } from 'formik'
import { validationSchema } from '@/utils/yupTeamForm'

const apiKey = process.env.NEXT_PUBLIC_API_KEY

const TeamForm = () => {
	const [showSentConfirm, setShowSentConfirm] = useState<boolean>(false)
	const [loading, setLoading] = useState<boolean>(false)

	const formik = useFormik<ITeamFormData>({
		initialValues: {
			name: '',
			position: '',
			email: '',
			description: '',
			imagePath: null,
		},
		validationSchema,
		onSubmit: async values => {
			try {
				setLoading(true)
				console.log(values)
				await fetch(`${apiKey}/team-form`, {
					method: 'POST',
					body: JSON.stringify(values),
				})
			} catch (error) {
				setShowSentConfirm(true)
			} finally {
				formik.resetForm()
				setLoading(false)
			}
		},
	})

	return (
		<div className={styles.teamForm}>
			{showSentConfirm ? (
				<div className={styles.welcomeBlock}>
					<Image src={welcome} alt='welcome image' />
					<h5 style={{ textTransform: 'uppercase' }}>
						Thank you! <br /> We will write to you soon!
					</h5>
				</div>
			) : (
				<>
					{loading ? (
						<div className={styles.loaderWrapper}>
							<Loader className={styles.loader} />
						</div>
					) : (
						<>
							<form className={styles.form} onSubmit={formik.handleSubmit}>
								<div
									className={styles.inputContainer}
									style={{ gridArea: 'name' }}
								>
									<input
										type='text'
										id='name'
										name='name'
										placeholder=''
										value={formik.values.name}
										onChange={formik.handleChange}
										onBlur={formik.handleBlur}
										style={
											formik.touched.name && formik.errors.name
												? { borderColor: 'red' }
												: undefined
										}
									/>
									{formik.touched.name && formik.errors.name ? (
										<label htmlFor='name' style={{ color: 'red' }}>
											{formik.errors.name}
										</label>
									) : (
										<label htmlFor='name'>Name</label>
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
										value={formik.values.position}
										onChange={formik.handleChange}
										onBlur={formik.handleBlur}
										style={
											formik.touched.position && formik.errors.position
												? { borderColor: 'red' }
												: undefined
										}
									/>
									{formik.touched.position && formik.errors.position ? (
										<label htmlFor='position' style={{ color: 'red' }}>
											{formik.errors.position}
										</label>
									) : (
										<label htmlFor='position'>Position</label>
									)}
								</div>
								<div
									className={styles.inputContainer}
									style={{ gridArea: 'email' }}
								>
									<input
										type='email'
										id='email'
										name='email'
										placeholder=''
										value={formik.values.email}
										onChange={formik.handleChange}
										onBlur={formik.handleBlur}
										style={
											formik.touched.email && formik.errors.email
												? { borderColor: 'red' }
												: undefined
										}
									/>
									{formik.touched.email && formik.errors.email ? (
										<label htmlFor='email' style={{ color: 'red' }}>
											{formik.errors.email}
										</label>
									) : (
										<label htmlFor='email'>Email address</label>
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
										value={formik.values.description}
										onChange={formik.handleChange}
										onBlur={formik.handleBlur}
										style={
											formik.touched.description && formik.errors.description
												? { borderColor: 'red' }
												: undefined
										}
									/>
									{formik.touched.description && formik.errors.description ? (
										<label htmlFor='description' style={{ color: 'red' }}>
											{formik.errors.description}
										</label>
									) : (
										<label htmlFor='description'>Short description</label>
									)}
								</div>

								{formik.values.imagePath === null ? (
									<label
										htmlFor='cv'
										className={styles.fileUpload}
										style={
											formik.touched.imagePath && formik.errors.imagePath
												? { border: '1px solid red', color: 'red' }
												: undefined
										}
									>
										Attach your CV +
									</label>
								) : (
									<label htmlFor='cv' className={styles.fileUpload}>
										Attached{' '}
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
									name='imagePath'
									accept='.pdf'
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									style={{ display: 'none' }}
								/>

								<Button
									variant='primary'
									type='submit'
									className={styles.sendBtn}
								>
									Send
								</Button>
							</form>
						</>
					)}
				</>
			)}
		</div>
	)
}

export default TeamForm
