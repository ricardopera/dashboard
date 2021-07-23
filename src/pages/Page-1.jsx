import React, { useEffect } from 'react';

function Page1(props) {
    useEffect(() => {
        document.title = "Creche";
    });
    return (
        <div>
            <h1>Page 1</h1>
            <p>I bring the sauce.</p>
        </div>
    );
}

export default Page1;