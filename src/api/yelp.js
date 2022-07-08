import axios from "axios";

// const accessToken = "MMMQuWnLGwlTYdSMtKujs774rvSF8 - g78jwHgo35nIoahZ1df13ph_HxFOTGIpGD - _CVpb--RMaPA2clqd8koS8x58EPk6H9fkhW791Uws_LRizh44UyVyGh4feNX3Yx"
const accessToken = "Ox1dPyMFowdC1KnQxkg5khZeHnh2CEFUatNpYxFFTcppxtOeJhcBe3QzvCUyl3vDsE_ToYeaIJgnv142pnstFlAeSs6CQ6qIv7vS9tmzPzJhNhgnSFIlgE0AdCmzYnYx"

export default axios.create({
	baseURL: "https://api.yelp.com/v3/businesses",
	headers: {
		Authorization:
			`Bearer ${accessToken}`,
	},
});
