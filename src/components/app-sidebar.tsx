import * as React from "react";
import { Command, Dumbbell, Home, Users } from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavAdmin } from "@/components/nav-admin";
/* import { NavSecondary } from "@/components/nav-secondary"; */
import { NavUser } from "@/components/nav-user";
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	useSidebar,
} from "@/components/ui/sidebar";
import { Link } from "react-router";
import { ModeToggle } from "./mode-toggle";
import { useSelector } from "react-redux";
/* import { getUser } from "@/store/telegram"; */
/* import routesList from "@/constants/routes"; */
import useTelegram from "@/hooks/useTelegram";
/* import { getLogInUserId } from "@/store/users"; */

const data = {
	user: {
		name: "User",
		email: "",
		avatar: "/avatars/shadcn.jpg",
	},
	admin: [
		{
			name: "Тест",
			url: "/test",
			icon: Users,
		},
	],
	navMain: [
		{
			isActive: true,
			title: "Home",
			url: "/",
			icon: Home,
			/* list: [
				{
					title: routesList.workoutList.name,
					url: routesList.workoutList.route,
				}
			], */
		},
	],
	/* navSecondary: [
		{
			title: "Поддержка",
			url: "#",
			icon: LifeBuoy,
		},
		{
			title: "Отзывы",
			url: "#",
			icon: Send,
		},
	], */
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
	const [fetchData, setData] = React.useState<{
		first_name?: string;
		last_name?: string;
		photo_url?: string;
	} | null>(null);

	/* const user = useSelector(getUser()); */

	/* React.useEffect(() => {
		if (user) {
			setData(user);
		}
	}, [user]); */
	/* const userId = useSelector(getUser());
	const isAdmin = React.useCallback(() => {
		if (userId) {
			return userId.id === 462125054 || userId.id === 591879391;
		}
	}, [userId]); */
	const { toggleSidebar } = useSidebar();
	const { isTelegram } = useTelegram();
	return (
		<Sidebar variant="inset" {...props}>
			<SidebarHeader>
				<SidebarMenu
					className={`${!isTelegram && "max-sm:pt-[100px]"}`}
				>
					<SidebarMenuItem className="flex items-center gap-2">
						<SidebarMenuButton size="lg" asChild>
							<Link to="/" onClick={() => toggleSidebar()}>
								<div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
									<Command className="size-4" />
								</div>
								<div className="grid flex-1 text-left text-sm leading-tight">
									<span className="truncate font-semibold">
										Monefy
									</span>
									<span className="truncate text-xs">
										App
									</span>
								</div>
							</Link>
						</SidebarMenuButton>
						<ModeToggle />
					</SidebarMenuItem>
				</SidebarMenu>
			</SidebarHeader>
			<SidebarContent>
				<NavAdmin projects={data.admin} />
				<NavMain items={data.navMain} />
				{/* <NavSecondary items={data.navSecondary} className="mt-auto" /> */}
			</SidebarContent>
			<SidebarFooter>
				<NavUser
					user={{
						first_name: fetchData?.first_name ?? "",
						last_name: fetchData?.last_name ?? "",
						photo_url: fetchData?.photo_url ?? "",
					}}
				/>
			</SidebarFooter>
		</Sidebar>
	);
}
