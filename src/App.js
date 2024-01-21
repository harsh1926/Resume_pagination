import './App.css';
import Resume from './component/resume'
import Values from './data/data'
import ResumePagination from './ResumePagination';
function App() {
  
  return (
    /*<div className="App">
      {
        Values.map(item=><Resume
          key={item.id}
          id = {item.id}
          userName = {item.userName}
          Bio = {item.Bio}
          location={item.location}
          
        ></Resume>)
      }
    </div>*/
    <div>
      
      <ResumePagination />
    </div>
  );
}

export default App;