import * as actionsType from "./contant";
import { Map } from 'immutable'

const initalState = Map({
	recommenBanners: [],
});

const reducer = (state = initalState, action) => {
	switch (action.type) {
		case actionsType.CAHNGE_BANNER:
			return state.set('recommenBanners' , action.banners);
		default:
			return state;
	}
};

export default reducer;
