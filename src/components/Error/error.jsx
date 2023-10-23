import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <>
            <h2>404</h2>
            <p>Page Not Found</p>
            <Link to='/'>Back home</Link>
        </>
    )
}

export default Error;