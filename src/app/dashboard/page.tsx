import { getServerSession } from 'next-auth'

import { authConfig } from '@/config/auth'

export default async function Dashboard() {
    const session = await getServerSession(authConfig);

    return (
        <>
            <h3>Hello {session?.user?.name}</h3>
        </>
    )
}
