import { Switch, Route, } from 'react-router-dom';

import Dashboard from 'pages/Dashboard';
import Document from 'pages/Document';
import GpaTool from 'pages/GpaTool';
import PrintOut from 'pages/PrintOut';
import Profile from 'pages/Profile';
import Result from 'pages/Result';  
import CourseRegistration from 'pages/CourseRegistration';

import StudentUnionAffairs from 'components/StudentUnionAffairs';
import SocialMedia from 'components/SocialMedia';
import Login from 'components/Login'; 


 
// Tailwind CSS Style Sheet
import 'assets/styles/tailwind.css';    
import CreateAccountS from 'components/CreateAccount';  

import WebFont from "webfontloader";  
import SignupNow from 'components/SignupNow';
import CreateLoginPassword from 'components/CreateLoginPassword'; 
import CourseTimeTables from 'components/CourseTimeTable';
import Examtimetable from "components/Examtimetable"

import ProfileEdit from 'components/ProfileComponents/ProfileEdit';
import EditPassword from 'components/ProfileComponents/EditPassword';
import EditMedia from 'components/ProfileComponents/EditMedia';


import SubmitCourseForm from 'components/CoureRegistrationFormComponent/SubmitCourseForm';




WebFont.load({
    google: {
        families: ['Poppins', "Roboto:400,500,900","Product Sans Medium:400"]
    }
  }); 

function App() { 


    return ( 
        <>     

          
          <Route exact path="/login" component={Login} />  
          <Route exact path="/signup" component={SignupNow} />  
          <Route exact path="/createpassword" component={CreateLoginPassword} />   
          <Route exact path="/createaccount" component={CreateAccountS} />    
         
        <div className="md:ml-64 white "> 
        
        <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/document" component={Document} />
            <Route exact path="/gpatool" component={GpaTool} />
            <Route exact path="/printout" component={PrintOut} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/result" component={Result} />
            
            <Route exact path="/coursereg" component={CourseRegistration} />  
            <Route exact path="/studentunionaffairs" component={StudentUnionAffairs} /> 
            <Route exact path="/social-media" component={SocialMedia} /> 
            <Route exact path="/coursetimetable" component={CourseTimeTables} />   
            <Route exact path="/examtimetable" component={Examtimetable} />  
             
            <Route exact path="/profile-edit" component={ProfileEdit} /> 
            <Route exact path="/editpassword" component={EditPassword} /> 
            <Route exact path="/editmedia" component={EditMedia} />  
            
           
            <Route exact path="/submit-course-form" component={SubmitCourseForm} />   
           
   
          
           
            
            
        </Switch>         
        </div> 

          

        </>
   
    );
}

export default App; 

