import { useState, useEffect } from 'react';

const OtpTimer = (props) => {
	const [seconds, setSeconds] = useState(180);
	const { setAllowResend } = props;
	useEffect(() => {
		const timer = setTimeout(() => {
			if (seconds !== 0) setSeconds((previous) => previous - 1);
			else setAllowResend(true);
		}, 1000);
		return () => {
			clearTimeout(timer);
		};
	}, [seconds, setAllowResend]);
	return <p>{seconds}s</p>;
};

export default OtpTimer;
