const React = require('react');
var {Link} = require('react-router');

var Examples = (props) => {
    return (
        <div>
        <h1>Examples</h1>
        <p>Here a few example locations to try out: </p>
        <ol>
            <li>
                <Link to='/?location=Atlanta'>Atlanta, GA</Link>
            </li>
            <li>
                <Link to='/?location=Seattle'>Seattle, WA</Link>
            </li>
        </ol>
        </div>

    )
};


module.exports = Examples;