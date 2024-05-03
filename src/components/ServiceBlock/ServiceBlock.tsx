'use client'

import React, { useEffect } from 'react'

import { Section } from '@/components/Section/Section'
import Service from '@/components/Service/Service'

import { IGroupedServices, IService } from '@/types/IService'

import { useServicesStore } from '@/store/store'

import styles from './ServiceBlock.module.scss'

const ServiceBlock = () => {
	const { services, fetchServices } = useServicesStore(state => state);

	useEffect(() => {
		fetchServices();
	}, [])
	const groupServicesByCategory = (services: IService[]) => {
		const groupedServices: IGroupedServices = {};

		services.forEach(service => {
			const categoryName = service.category.name;
			if (!groupedServices[categoryName]) {
				groupedServices[categoryName] = [];
			}
			groupedServices[categoryName].push(service);
		});
		return groupedServices;
	};

	const renderGroupedServices = (groupedServices: IGroupedServices) => {
		return (
			<ul className={styles.services}>
				{Object.entries(groupedServices).map(([categoryName, services]) => (
					<li key={categoryName}>
						<Service
							services={services}
							categoryName={categoryName}
						/>
					</li>
				))}
			</ul>
		);
	};

	return (
		<Section title='Послуги'>
			{services && renderGroupedServices(groupServicesByCategory(services))}
		</Section>
	)
}

export default ServiceBlock
