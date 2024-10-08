import { useRouteError } from "react-router-dom";

function ErrorPage(){
    const error = useRouteError();
    console.log("The Error generated by react-dom-router is  : ", error);
    return(
        <>
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </>
    );
}

export default ErrorPage;