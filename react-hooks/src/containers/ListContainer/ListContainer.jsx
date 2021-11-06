import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// STYLE
import './ListContainer.scss';

// STORE
import { commentsRequest } from '@store/modules/comments';

// COMPONENTS
import { ItemComponent } from '@components';

const ListContainer = () => {
	const comments = useSelector((state) => state.comments);
	const [favourites, setFavourites] = useState([]);
	const dispatch = useDispatch();

	async function fetchData() {
		dispatch(commentsRequest());
	}

	useEffect(() => {
		fetchData();
	}, []); // [] -> indicates that this method will not be executed more than once

	function handleFavourite(id) {
		if (favourites.includes(id)) {
			const newFavourites = favourites.filter((comment) => comment !== id);
			return setFavourites([...newFavourites]);
		}

		return setFavourites([...favourites, id]);
	}

	return (
		<div className="ListContainer">
			<ul className="ListContainer__list">
				{comments.data.map((comment) => (
					<ItemComponent
						key={comment.id}
						item={comment}
						onClick={(item) => handleFavourite(item.id)}
						favourite={favourites.includes(comment.id)}
					/>
				))}
			</ul>
		</div>
	);
};

export { ListContainer };
