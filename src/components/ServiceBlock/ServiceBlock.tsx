import { Section } from '@/components/Section/Section'
import Service from '@/components/Service/Service'

import { getServices } from '@/services/fetchData'

import { IGroupedServices, IService } from '@/types/IService'

import styles from './ServiceBlock.module.scss'

const ServiceBlock = async () => {
	const services = await getServices();

	if (!services.length) {
		return (
			<Section title='Serviced'>
				<p>No results found</p>
			</Section>
		);
	}

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
		<Section title='Serviced'>
			{renderGroupedServices(groupServicesByCategory(services))}
		</Section>
	)
}

export default ServiceBlock
