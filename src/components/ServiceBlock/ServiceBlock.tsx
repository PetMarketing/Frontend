'use client'

import React, { useEffect, useState } from 'react'

import { Section } from '@/components/Section/Section'
import Service from '@/components/Service/Service'

import { IGroupedServices, IService } from '@/types/IService'

import styles from './ServiceBlock.module.scss'

const apiKey = process.env.NEXT_PUBLIC_API_KEY

const ServiceBlock = () => {
	const [services, setServices] = useState()
	const [loading, setLoading] = useState(false)

	const fetchServices = async () => {
		try {
			setLoading(true)
			const response = await fetch(`${apiKey}/services`, {
				method: 'GET',
				next: { revalidate: 5000 },
			})

			const data = await response.json()
			setServices(data)
		} catch (error) {
			setLoading(false)
			console.log(error)
		} finally {
			setLoading(false)
		}
	}

	useEffect(() => {
		fetchServices()
	}, [])

	const groupServicesByCategory = (services: IService[]) => {
		const groupedServices: IGroupedServices = {}

		services.forEach(service => {
			const categoryName = service.category.name
			if (!groupedServices[categoryName]) {
				groupedServices[categoryName] = []
			}
			groupedServices[categoryName].push(service)
		})
		return groupedServices
	}

	const renderGroupedServices = (groupedServices: IGroupedServices) => {
		return (
			<ul className={styles.services}>
				{Object.entries(groupedServices).map(([categoryName, services]) => (
					<li key={categoryName}>
						<Service services={services} categoryName={categoryName} />
					</li>
				))}
			</ul>
		)
	}

	return (
		<Section title='Послуги'>
			{loading ? (
				<div>Loading...</div>
			) : (
				services && renderGroupedServices(groupServicesByCategory(services))
			)}
		</Section>
	)
}

export default ServiceBlock
