import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductDetails from '../components/product-overview/ProductDetails';
import Loading from '../components/ui/Loader/Loading';
import ServerError from '../components/ui/ServerError';
import axios from 'axios';
import { motion } from 'framer-motion';
import { pageVariant } from '../utils/Common';

const Overview = () => {
	const [productDetails, setProductDetails] = useState(<Loading />);
	const params = useParams();
	useEffect(() => {
		axios
			.get(`/api/product/${params.productName}/`)
			.then((response) => {
				setProductDetails(
					<ProductDetails details={response.data?.data} />
				);
			})
			.catch((error) =>
				setProductDetails(
					<div className='col-span-3'>
						<ServerError
							error={error.response.data?.error?.message}
						/>
					</div>
				)
			);
	}, [params.productName]);
	window.scroll(0, 0);
	return (
		<motion.section
			initial='pageHidden'
			animate='pageVisible'
			exit='pageExit'
			variants={pageVariant}>
			{productDetails}
		</motion.section>
	);
};

export default Overview;
