import { IAboutUs } from '@/types/IAboutUs'

export const blockData: IAboutUs[] = [
	{
		id: '00001',
		title: 'qwerqwe',
		description: '2 test description ',
		image: {
			id: 5,
			imagePath: '/public/graffiti-smile.png',
			description: 'A parrot is depicted with a raised paw giving a high five',
		},
	},
	{
		id: '00003',
		title: 'Rwar',
		description: 'test description ',
		image: {
			id: 3,
			imagePath: '/public/graffiti-smile.png',
			description: 'Зображено папугу з піднятою лапкою яка дає пьять',
		},
	},
]
export const blockListItems = [
	{
		ID: '00001',
		NAME: 'We are professionals',
		DATE: '04 Sep 2019',
		STATUS: 'Приховане',
	},
	{
		ID: '00002',
		NAME: 'We are professionals',
		DATE: '23 Nov 2019',
		STATUS: 'Включене',
	},
	{
		ID: '00003',
		NAME: 'We are professionals',
		DATE: '28 May 2019',
		STATUS: 'Включене',
	},
]

// const applicationsData = [
// 	{
// 		ID: '00001',
// 		NAME: 'Christine Brooks',
// 		EMAIL: 'kkkkkkkkk@mail.com',
// 		DATE: '04 Sep 2019',
// 		НАВИЧКИ: 'Маркетолог',
// 	},
// 	{
// 		ID: '00002',
// 		NAME: 'Rosie Pearson',
// 		EMAIL: 'eeee@mail.com',
// 		DATE: '28 May 2019',
// 		НАВИЧКИ: 'Таргетолог',
// 	},
// 	{
// 		ID: '00003',
// 		NAME: 'Darrell Caldwell',
// 		EMAIL: '999chj@gmail.com',
// 		DATE: '23 Nov 2019',
// 		НАВИЧКИ: 'Таргетолог',
// 	},
// ]

{
	/* <Accordion
				title='Заявки Хочу у вашу тім'
				data={applicationsData}
				columns={['ID', 'NAME', 'EMAIL', 'DATE', 'НАВИЧКИ']}
			/> */
}
