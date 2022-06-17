import React, { useState, useEffect } from 'react'
import ReactPaginate from 'react-paginate'
import RecipesList from './RecipesList'

const PaginateRecipes = ({ itemsPerPage, items, totalResults, offset, number }) => {
    const [currentItems, setcurrentItems] = useState([])
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setcurrentItems(items.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(totalResults / itemsPerPage))
    }, [itemOffset, itemsPerPage, items]);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % totalResults;
        console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
    }

    return (
        <>
            <RecipesList currentItems={currentItems} />
            <ReactPaginate
                breakLabel="..."
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="< previous"
                renderOnZeroPageCount={null}
            />
        </>
    )
}

export default PaginateRecipes