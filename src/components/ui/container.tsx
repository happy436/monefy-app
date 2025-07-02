type ContainerProps = {
	children: React.ReactNode;
	className?: string; // Исправлено с `class` на `className`
};

const Container: React.FC<ContainerProps> = ({ children, className }) => {
	const styles = `${
		className || ""
	} flex w-full items-center gap-2 px-1.5 py-1.5 text-left text-sm bg-gray-200 dark:bg-black rounded-lg shadow-sm overflow-hidden `;

	return <div className={styles}>{children}</div>;
};

export default Container;
