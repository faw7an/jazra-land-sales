import React from "react";

function NavBar() {
    return (
        <div className="container">
            <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
                <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                    <svg className="bi me-2" width="40" height="32" xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-bootstrap" viewBox="0 0 16 16">
                        <path d="M5.062 12.5c-.5 0-.938-.188-1.312-.562-.375-.375-.562-.812-.562-1.312V5.375c0-.5.188-.938.562-1.312.375-.375.812-.562 1.312-.562h3.875c.5 0 .938.188 1.312.562.375.375.562.812.562 1.312v1.25c0 .5-.188.938-.562 1.312-.375.375-.812.562-1.312.562H6.75v1.25h2.187c.5 0 .938.188 1.312.562.375.375.562.812.562 1.312v1.25c0 .5-.188.938-.562 1.312-.375.375-.812.562-1.312.562H5.062zm0-7.125v3.75h3.875c.25 0 .438-.062.562-.188.125-.125.188-.312.188-.562v-1.25c0-.25-.062-.438-.188-.562-.125-.125-.312-.188-.562-.188H6.75V5.375c0-.25-.062-.438-.188-.562-.125-.125-.312-.188-.562-.188H5.062zm0 5.625v1.25c0 .25.062.438.188.562.125.125.312.188.562.188h3.875c.25 0 .438-.062.562-.188.125-.125.188-.312.188-.562v-1.25c0-.25-.062-.438-.188-.562-.125-.125-.312-.188-.562-.188H6.75v1.25H5.062z"/>
                    </svg>
                    <span className="fs-4">Jazra Lands</span>
                </a>

                <ul className="nav nav-pills">
                    <li className="nav-item"><a href="#" className="nav-link active" aria-current="page">Home</a></li>
                    <li className="nav-item"><a href="#" className="nav-link">listing</a></li>
                    <li className="nav-item"><a href="#" className="nav-link">Pricing</a></li>
                    <li className="nav-item"><a href="#" className="nav-link">FAQs</a></li>
                    <li className="nav-item"><a href="#" className="nav-link">About</a></li>
                </ul>
            </header>
        </div>
    );
}

export default NavBar;