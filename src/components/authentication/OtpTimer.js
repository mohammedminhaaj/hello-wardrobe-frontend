import { useEffect, useState } from 'react';

const OtpTimer = (props) => {
	const [seconds, setSeconds] = useState(10);
	const [resend, setResend] = useState(false);
	const { setAllowResend } = props;

	useEffect(() => {
		setAllowResend((prev) => {
			return { ...prev, state: true };
		});
	}, [resend, setAllowResend]);

	useEffect(() => {
		const interval = setInterval(() => {
			setSeconds((previous) => {
				if (previous === 1) {
					setResend((prev) => !prev);
					clearInterval(interval);
					return 0;
				}
				return previous - 1;
			});
		}, 1000);

		return () => {
			clearInterval(interval);
		};
	}, [seconds]);

	return <p>{seconds}s</p>;
};

export default OtpTimer;
