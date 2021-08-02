import React, { memo, useEffect } from "react";
import { useDispatch, useSelector , shallowEqual} from "react-redux";
import { getBannersActions } from "./store/actions";

import TopBanners from './c-cpns/topBanners';

function Recommend(props) {
	const dispath = useDispatch();
	const { banners } = useSelector(state => ({
		// banners: state.get('recommend').get('recommenBanners'),
    banners:state.getIn(['recommend','recommenBanners'])
	}),shallowEqual);

	useEffect(() => {
		dispath(getBannersActions());
	}, [dispath]);

	return (
		<div>
			<TopBanners/>
		</div>
	);
}

export default memo(Recommend);