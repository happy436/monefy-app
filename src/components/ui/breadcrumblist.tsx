import React from "react";
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "./breadcrumb";
import { useLocation } from "react-router";
import { formatText } from "@/utils/formatText";

function Breadcrumblist() {
	const location = useLocation();
	const locationList = location.pathname
		.split("/")
		.filter((item) => item !== "");

	return (
		<Breadcrumb>
			<BreadcrumbList>
				{locationList.map((item, index) => (
					<React.Fragment key={item + index}>
						<BreadcrumbItem className="hidden md:block">
							{index !== locationList.length - 1 ? (
								<BreadcrumbLink to={item}>
									{formatText(item, "-")}
								</BreadcrumbLink>
							) : (
								<BreadcrumbPage>
									{formatText(item, "-")}
								</BreadcrumbPage>
							)}
						</BreadcrumbItem>
						{index === locationList.length - 1 ? null : (
							<BreadcrumbSeparator className="hidden md:block" />
						)}
					</React.Fragment>
				))}
				{/* <BreadcrumbItem className="hidden md:block">
					<BreadcrumbLink href="#">
						Building Your Application
					</BreadcrumbLink>
				</BreadcrumbItem>
				<BreadcrumbSeparator className="hidden md:block" />
				<BreadcrumbItem>
					<BreadcrumbPage>Data Fetching</BreadcrumbPage>
				</BreadcrumbItem> */}
			</BreadcrumbList>
		</Breadcrumb>
	);
}

export default Breadcrumblist;
