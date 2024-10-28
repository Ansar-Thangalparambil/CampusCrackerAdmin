import { Route, Routes } from 'react-router-dom';
import './App.css';
import AdminHome from './Pages/AdminHome';
import Login from './Pages/Login';
import LandingPage from './Pages/LandingPage';
import PoTFormulas from './Subtopics/PoTFormulas';
import SubtopicsHome from './Pages/SubtopicsHome';
import GeneralQuestions from './Subtopics/GeneralQuestions';

function App() {
  return (
   <>

      <Routes>
        <Route path='/adminhome' element={<AdminHome/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/subtopicshome' element={<SubtopicsHome/>}/>
        <Route path='/potformulas' element={<PoTFormulas/>}/>
        <Route path='/generalquestions' element={<GeneralQuestions/>}/>
      </Routes>

   </>
  );
}

export default App;
