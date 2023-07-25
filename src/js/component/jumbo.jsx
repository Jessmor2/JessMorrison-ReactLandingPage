import React from 'react';

const Jumbo = () => {

    return (
        <>
             <div class="p-5 my-4 bg-body-tertiary rounded-3" style={{background: "lightGray"}}>
                <div class="container-fluid py-5">
                    <h1 class="display-5 fw-bold">A Warm Welcome!</h1>
                    <p class="col-12 fs-4">Using a series of utilities, you can create this jumbotron, just like the one in previous versions of Bootstrap. Check out the examples below for how you can remix and restyle it to your liking.</p>
                    <button class="btn btn-primary btn-lg" type="button">Call to action</button>
                </div>
            </div>
        </>

    )
}

export default Jumbo;