import { Fragment } from 'react';
import Background from '../../assets/svg/login-background.svg';
const AuthLayout = (props) => {
	return (
		<Fragment>
			<div
				className='w-screen h-screen blur-sm fixed -z-10'
				style={{
					backgroundImage: `url('${Background}')`,
					backgroundPosition: 'center',
					backgroundSize: 'cover',
					backgroundRepeat: 'no-repeat',
					backgroundColor: '#F2E9E4',
				}}
			/>
			<section className='flex justify-center align-middle w-screen h-screen text-space-cadet-300 overflow-x-hidden'>
				<div className='bg-isabelline-100 rounded-xl m-10 p-5 w-full md:w-2/5 text-center h-fit shadow-2xl'>
					{props.children}
					<p className='text-sm font-thin mt-5'>
						Privacy Policy | Terms & Conditions
					</p>
				</div>
			</section>
		</Fragment>
	);
};

export default AuthLayout;
