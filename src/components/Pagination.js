import React from 'react';

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
 
  return (
    <nav aria-label='Page navigation example' >
      <ul className='pagination '>
          {/* <a class="page-link" href="!#" aria-label="Previous">
          <span aria-hidden="true">&laquo;</span>
          </a> */}
          {pageNumbers.map(number => (
            <> 
              <li key={number} className='page-item '>
                <a onClick={() => paginate(number)} className='page-link'>
                  {number}
                </a>
              </li>         
            </>
          ))}
          {/* <a class="page-link" href="!#" aria-label="Next">
          <span aria-hidden="true">&raquo;</span>
          </a> */}
      </ul>
    </nav>
  );
};


export default Pagination;
