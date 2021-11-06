import React from 'react';
import classNames from 'classnames';

// STYLE
import './ItemComponent.scss';

function ItemComponent({ item, onClick, favourite }) {
	return (
		<div
			className={classNames('ItemComponent', {
				'ItemComponent--favourite': favourite,
			})}
			onClick={() => onClick(item)}>
			<p className="ItemComponent__text">{item.name}</p>
		</div>
	);
}

export { ItemComponent };
