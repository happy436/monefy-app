const useTelegram = () => {
	const isTelegram = window.Telegram.WebApp.platform === "unknown" ? true : false;
	return { isTelegram };
};

export default useTelegram;
