import React from 'react';
import PropTypes from 'prop-types';

import s from './Button.css';

/**
 * The only true button.
 */

function _Button ({ color, size, children }) {
	let styles = {
		color,
		fontSize: Button.sizes[size],
	};

	return (
		<button className={s.root} style={styles}>
			{children}
		</button>
	);
}

export default React.memo(_Button)

_Button.propTypes = {
	/**
	 * Button label.
	 */
	children: PropTypes.string.isRequired,
	color: PropTypes.string,
	size: PropTypes.oneOf(['small', 'normal', 'large']),
};
_Button.defaultProps = {
	color: '#333',
	size: 'normal',
};
_Button.sizes = {
	small: '10px',
	normal: '14px',
	large: '18px',
};
