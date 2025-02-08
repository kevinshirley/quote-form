'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function LoggedInUserValidation({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
	const router = useRouter();

	useEffect(() => {
		const storedLoggedInUser = localStorage.getItem('user');
		
		if (storedLoggedInUser) {
			router.push('/dashboard');
		}
	}, []);

  return (
    <>{children}</>
  );
}
