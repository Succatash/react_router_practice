import {useLocation} from 'react-router-dom';

const Blue = () => {
	const location = useLocation();
	console.log(location.state, 'test');
	return (
		<div className='blue'>
			<h1>Blue</h1>
		</div>
	);
};
export default Blue;
