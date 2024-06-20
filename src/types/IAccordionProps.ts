export interface IAccordionProps {
	blockListItems: { [key: string]: any }[]
	columns: string[]
	blockData: { [key: string]: any }[]
}

export interface IAccordionHeaderProps {
	columns: string[]
}

export interface IAccordionBlockListProps {
	columns: string[]
	blockListItems: { [key: string]: any }[]
	toggleAccordion: (id: string) => void
	deleteItem: (id: string) => void
	currentBlock: string
	blockData: { [key: string]: any }[]
}
