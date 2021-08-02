import React, { memo, useCallback, useEffect , useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getBannersActions } from "../../store/actions";

import { Carousel } from "antd";
import { BannerWrapper, BannerLeft, BannerRight } from "./style";

export default memo(function TopBanners() {
  //内部数据
  const [currentIndex, setCurrentIndex] = useState(0)

  // 数据hooks
	const dispatch = useDispatch();
	const { banners } = useSelector(state => ({
		banners: state.getIn(["recommend", "recommenBanners"]),
	}));

  // 其他hooks
	useEffect(() => {
		dispatch(getBannersActions());
	}, [dispatch]);

  // 内部逻辑
  const currentChange = useCallback((from,to)=>{
    setCurrentIndex(to)
  },[])

  const bgImg = banners[currentIndex]?.imageUrl + '?imageView&blur=40x20'

	return (
		<BannerWrapper bgImg={bgImg}>
			<div className="banner wrap-v2">
				<BannerLeft>
					<Carousel effect="fade" autoplay beforeChange={currentChange}>
						{banners.map(item => {
							return (
								<div className="banner-item" key={item.imageUrl}>
									<img src={item.imageUrl} alt={item.typeTitle} />
								</div>
							);
						})}
					</Carousel>
				</BannerLeft>
				<BannerRight></BannerRight>
			</div>
		</BannerWrapper>
	);
});
