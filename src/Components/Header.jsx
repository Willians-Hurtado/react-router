import { NavLink } from "react-router-dom";

export default function Header() {

    return (
        <>

            <nav className="navbar navbar-expand-sm navbar-light bg-primary">

                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/">Home</NavLink>

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarID"
                        aria-controls="navbarID" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarID">
                        <div className="navbar-nav">
                            <NavLink className="nav-link " to="/ChiSiamo">Chi Siamo</NavLink>
                        </div>

                        <div className="navbar-nav">
                            <NavLink className="nav-link" to="/PostList">Post List</NavLink>
                        </div>
                    </div>



                </div>

            </nav>

        </>

    );
}