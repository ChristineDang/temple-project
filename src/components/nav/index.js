import React from 'react';
import './nav.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Nav() {
    return (
        <>
        <nav ClassName="navbar navbar-expand-lg navbar-light bg-light">
            <a ClassName="navbar-brand" href="/home">TD Khất Sĩ Úc Đại Lợi</a>
            <button ClassName="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation">
                <span ClassName="navbar-toggler-icon"></span>
            </button>
            
            <div ClassName="collapse navbar-collapse" id="navbarSupportedContent">
                <ul ClassName="navbar-nav ml-auto">
                <li ClassName="nav-item active">
                    <a ClassName="navbar-brand" href="/home">Home</a>
                </li>
                <li ClassName="nav-item">
                    <a ClassName="navbar-brand" href="/bio">Biography</a>
                </li>
                <li ClassName="nav-item">
                    <a ClassName="navbar-brand" href="/events">Events</a>
                </li>
                <li ClassName="nav-item">
                    <a ClassNameName="navbar-brand" href="/media">Media</a>
                </li>
                <li ClassName="nav-item">
                    <a ClassName="navbar-brand" href="/photos">Photos</a>
                </li>
                <li ClassName="nav-item">
                    <a ClassName="navbar-brand" href="/poems">Poems</a>
                </li>
                </ul>
            </div>
            </nav>
            </>
    )        
}

export default Nav;