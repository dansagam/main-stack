import { BaseSvgType } from '@/@types/base';
import Icon1 from '@/assets/svg/sidebar-icon-1.svg?react';
import Icon2 from '@/assets/svg/sidebar-icon-2.svg?react';
import Icon3 from '@/assets/svg/sidebar-icon-3.svg?react';
import Icon4 from '@/assets/svg/sidebar-icon-4.svg?react';
import { IconType } from 'react-icons';
import { GoHome } from 'react-icons/go';
import { CiSettings } from 'react-icons/ci';
import { BsJournalRichtext } from 'react-icons/bs';
import { IoIosLogOut } from 'react-icons/io';
import { MdOutlineInsertChart, MdBugReport, MdOutlineSwitchAccount } from 'react-icons/md';
import { FaMoneyBills } from 'react-icons/fa6';
import UserGroup from '@/assets/svg/user-group.svg?react';

export type SidebarDataType = {
  title: string;
  icon: BaseSvgType;
};

const HOME_SIDEBAR_DATA: SidebarDataType[] = [
  {
    title: 'Link In Bio',
    icon: Icon1,
  },
  {
    title: 'Store',
    icon: Icon2,
  },
  {
    title: 'Media Kit',
    icon: Icon3,
  },
  {
    title: 'Invoicing',
    icon: Icon4,
  },
];

export default HOME_SIDEBAR_DATA;

export type NavLinkProps = {
  title: string;
  icon: IconType | BaseSvgType;
  active?: boolean;
};

export const HOME_NAV_LINK: NavLinkProps[] = [
  { title: 'Home', icon: GoHome },
  { title: 'Analytics', icon: MdOutlineInsertChart },
  { title: 'Revenue', icon: FaMoneyBills, active: true },
  { title: 'CRM', icon: UserGroup },
];

export type ProfileTabType = {
  title: string;
  icon: IconType | BaseSvgType;
};
export const HOME_PROFILE_TAB: ProfileTabType[] = [
  { title: 'Settings', icon: CiSettings },
  { title: 'Purchase History', icon: BsJournalRichtext },
  { title: 'Refer and Earn', icon: GoHome },
  { title: 'Integrations', icon: GoHome },
  { title: 'Report Bug', icon: MdBugReport },
  { title: 'Switch Account', icon: MdOutlineSwitchAccount },
  { title: 'Sign Out', icon: IoIosLogOut },
];

export type AppMenuItemType = {
  title: string;
  icon: IconType | BaseSvgType;
  description: string;
};
export const HOME_APP_MENU_LINK: AppMenuItemType[] = [
  {
    title: 'Link In Bio',
    icon: Icon1,
    description: 'Manage your Link in Bio',
  },
  {
    title: 'Store',
    icon: Icon2,
    description: 'Manage your Store activities',
  },
  {
    title: 'Media Kit',
    icon: Icon3,
    description: 'Manage your Media kit',
  },
  {
    title: 'Invoicing',
    icon: Icon4,
    description: 'Invoicing',
  },
];
