'use client';

import type { MenuProps } from 'antd';
import { Button, Dropdown, Space, Tooltip } from 'antd';
import { Bolt, CircleUser, LogOut, User } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useAppContext } from '@/context/app-context';

const DropdownMenu = () => {
	const router = useRouter();

	const handleMenuClick: MenuProps['onClick'] = (e) => {
		if (Number(e.key) === 3) {
			console.log('log out');
			localStorage.removeItem('user');
			router.push('/');
		}
	};
	
	const items: MenuProps['items'] = [
		{
			label: 'Profile',
			key: '1',
			icon: <User />,
		},
		{
			label: 'Settings',
			key: '2',
			icon: <Bolt />,
		},
		{
			label: 'Log out',
			key: '3',
			icon: <LogOut />,
		},
	];
	
	const menuProps = {
		items,
		onClick: handleMenuClick,
	};

	const {
		loggedInUser,
	} = useAppContext();

	return (
    <Dropdown menu={menuProps}>
      <Button className='border-none'>
        <Space>
          <CircleUser />
					{`${loggedInUser?.firstName || ''} ${loggedInUser?.lastName || ''}`}
        </Space>
      </Button>
    </Dropdown>
  );
};

export default DropdownMenu;
