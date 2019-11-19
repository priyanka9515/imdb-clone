import React from 'react'

function Footer() {
    return (
        <div>
            <div className = "row">
                <div className = "col-md-12">
                    <div className = "footyer p-3 mt-4 text-center bg-dark text-light">
                        Devloped By : 
                        <span className = "text-warning font-weight-normal">
                                SOAL
                        </span>
                        , Using <i className = "fab fa-react" /> React JS &amp; Redux JS
                        integrated with external movies data API
                        <a
                            href ="http://www.omdbapi.com/"
                            target="_blankl"
                        >
                            OMDB
                        </a>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer
