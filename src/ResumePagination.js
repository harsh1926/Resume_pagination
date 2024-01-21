import React, { useState } from 'react';
import resumes from './data/data'
import Resume from './component/resume';
const ResumePagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const resumesPerPage = 1;

  

  const indexOfLastResume = currentPage * resumesPerPage;
  const indexOfFirstResume = indexOfLastResume - resumesPerPage;
  const currentResumes = resumes.slice(indexOfFirstResume, indexOfLastResume);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      {
        currentResumes.map(item=><Resume
          key={item.id}
          id = {item.id}
          userName = {item.userName}
          Bio = {item.Bio}
          location={item.location}
          
        ></Resume>)
      }

      <div>
        {Array.from({ length: Math.ceil(resumes.length / resumesPerPage) }).map((_, index) => (
          <button
            key={index + 1}
            onClick={() => paginate(index + 1)}
            style={{
              margin: '5px',
              padding: '5px 10px',
              backgroundColor: currentPage === index + 1 ? '#4CAF50' : '#ddd', 
              color: '#fff',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ResumePagination;
