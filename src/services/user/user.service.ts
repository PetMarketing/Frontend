'use server'

import { revalidatePath } from 'next/cache';

import { getSession } from '../auth/auth.service';

import { fetchWithAuth } from '@/utils/fetchWithAuth';

export const userUpdate = async (data: IUserUpdate) => {
    const session = await getSession();

    const res = await fetchWithAuth('admin/me', data, 'PATCH');

    session.user = res;

    await session.save();

    revalidatePath('dashboard/settings');
}
