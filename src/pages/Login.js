import { useEffect, useState } from 'react';
import CredentialLogin from '../components/authentication/CredentialLogin';
import AuthLayout from '../components/authentication/AuthLayout';
import Loading from '../components/ui/Loader/Loading';

const Login = () => {
	const [layout, setLayout] = useState(<Loading />);

	useEffect(() => {
		setLayout(<CredentialLogin setLayout={setLayout} />);
	}, []);
	return <AuthLayout>{layout}</AuthLayout>;
};

export default Login;
