import { AppSidebar } from "@/components/app-sidebar";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
	SidebarInset,
	SidebarProvider,
	SidebarTrigger,
} from "@/components/ui/sidebar";
/* import routesList from "@/constants/routes"; */
import useTelegram from "@/hooks/useTelegram";
import { matchRoute } from "@/utils/matchRoutes";
import { Outlet, useLocation } from "react-router";
/* import Breadcrumblist from "@/components/ui/breadcrumblist"; */

const DashboardPageLayout = () => {
	const location = useLocation();
	const pageName = location.pathname;
	/* const page = Object.values(routesList).find((item) =>
		matchRoute(item.route, pageName)
	)?.name; */
    const { isTelegram } = useTelegram();
	return (
		<SidebarProvider>
			<AppSidebar />
			<SidebarInset>
				<header
					className={`flex h-16 shrink-0 items-center gap-2 ${!isTelegram && "max-sm:pt-[120px]"}`}
				>
					{/* //TODO if telegram app delete padding */}
					<div className="flex items-center gap-2 px-4 ">
						<SidebarTrigger className="-ml-1" />
						{/* <Separator
							orientation="vertical"
							className="mr-2 h-4"
						/> */}
						{/* <Breadcrumblist /> */}
					</div>
				</header>
				<div className="flex flex-1 flex-col gap-4 p-4 pt-0 max-sm:pt-3">
					<div className="grid auto-rows-min gap-4 md:grid-cols-3">
						{pageName}
					</div>
					<div className=" flex-1 rounded-xl bg-muted/50 md:min-h-min p-3">
						{/* min-h-[100vh] */}
						<ScrollArea className="h-min">
							<Outlet />
						</ScrollArea>
					</div>
				</div>
			</SidebarInset>
		</SidebarProvider>
	);
};

export default DashboardPageLayout;
