import {
	LOAD_COLLABORATORS,
	REMOVE_COLLABORATOR,
} from '../../types/collaborators';

const INITIAL_STATE = {
	collaborators: [],
	loading: false,
};

const collaborators = (state = INITIAL_STATE, { type, payload }) => {
	switch (type) {
		case LOAD_COLLABORATORS:
			return {
				...state,
				collaborators: [...payload],
				loading: false,
			};
		case REMOVE_COLLABORATOR:
			return state;
		default:
			return state;
	}
};

export default collaborators;
