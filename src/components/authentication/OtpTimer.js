import { useEffect, useState } from 'react';

const OtpTimer = (props) => {
	const [seconds, setSeconds] = useState(180);
	const { setAllowResend } = props;

	useEffect(() => {
		const interval = setInterval(() => {
			setSeconds((previous) => {
				if (previous === 1) {
					clearInterval(interval);
					return 0;
				}
				return previous - 1;
			});
		}, 1000);

		return () => {
			clearInterval(interval);
		};
	}, []);

	useEffect(() => {
		if (seconds === 0) {
			setAllowResend((prev) => ({ ...prev, state: true }));
		}
	}, [seconds, setAllowResend]);

	return <p>{seconds}s</p>;
};

export default OtpTimer;
