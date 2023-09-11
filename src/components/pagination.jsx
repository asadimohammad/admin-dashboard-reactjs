// @ts-nocheck
import React from "react";
import _ from "lodash";
import { useSearchParams } from "react-router-dom";

const Pagination = ({ totalRecords , pageSize}) => {
    let pages = Math.ceil(totalRecords / pageSize);

    // Access to query params in url
    const [searchParams , setSearchParams] = useSearchParams()

    const currentPage = +searchParams.get('page') || 1
    function prevPage() {
        if(currentPage > 1) {
            setSearchParams({page : currentPage - 1})
        }
    }
    function nextPage() {
        if(currentPage < pages) {
            setSearchParams({page : currentPage + 1})
        }
    }

    return (
        <nav>
            <ul className="pagination d-flex jc-center align-center m-4">
                <li className="page-item" onClick={prevPage}>
                    <a href="" className="page-link">
                        قبلی
                    </a>
                </li>
                {_.times(pages, (index) => (
                    <li key={"page" + index + 1} onClick={() => setSearchParams(index + 1)}>
                        <a href="" className="page-link">{index+1}</a>
                    </li>
                ))}
                <li className="page-item" onClick={nextPage}>
                    <a href="" className="page-link">
                        بعدی
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Pagination;
