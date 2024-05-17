import { Montserrat, Dela_Gothic_One } from 'next/font/google'

export const montserrat = Montserrat({
    subsets: ['latin', 'cyrillic'],
    weight: ['400', '500', '600', '800'],
    display: 'swap',
    preload: true,
    style: 'normal',
    variable: '--font-montserrat'
});

export const dela = Dela_Gothic_One({
    subsets: ['latin', 'cyrillic'],
    weight: ['400'],
    display: 'swap',
    preload: true,
    style: 'normal',
    variable: '--font-dela'
});
