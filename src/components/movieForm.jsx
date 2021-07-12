import React from 'react';

const MoviesForm = ({ match, history }) => {
    return (
        <div>
            <h1>MoviesForm {match.params.id}</h1>
            <button
                className="btn btn-primary"
                onClick={() => history.push("/movies")}
            >Save</button>
        </div>
    );
}
export default MoviesForm;