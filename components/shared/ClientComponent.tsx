'use client';

import { useSession } from 'next-auth/react';

type ClientComponentProps = {};
export function ClientComponent({}: ClientComponentProps) {
    const session = useSession();
    return <>{JSON.stringify(session)}</>;
}
