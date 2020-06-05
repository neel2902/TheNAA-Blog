import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';

const NoMatch = () => {
    return (
        <React.Fragment>
            <Container className="my-5">
                <h1>404 No Match Found</h1>
                <Link to='/'>
                    Take me back
                </Link>
            </Container>
        </React.Fragment>
    )

}

export default NoMatch;