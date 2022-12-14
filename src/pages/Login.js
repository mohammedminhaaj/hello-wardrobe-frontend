import { Fragment, useState } from 'react';
import Background from '../assets/svg/login-background.svg';
import SendOtp from '../components/login/SendOtp';
import VerifyOtp from '../components/login/VerifyOtp';

const Login = () => {
	const [verifyScreen, setVerifyScreen] = useState({
		show: false,
		number: '',
	});
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
			<div className='flex justify-center align-middle w-screen h-screen text-space-cadet-300'>
				<div className='bg-isabelline-100 rounded-xl m-10 p-5 w-full md:w-1/3 text-center h-fit shadow-2xl'>
					{!verifyScreen.show ? (
						<SendOtp setVerifyScreen={setVerifyScreen} />
					) : (
						<VerifyOtp mobileNumber={verifyScreen.number} />
					)}
					<p className='text-sm font-thin mt-5'>
						Privacy Policy | Terms & Conditions
					</p>
				</div>
			</div>
		</Fragment>
	);
};

export default Login;
