import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import TeacherList from './pages/TeacherList';
import TeacherForm from './pages/TeacherForm';



export default function Routes() {
  return(
    <Switch>
      <Route path="/" exact component={Landing}/>
      <Route path="/list"  component={TeacherList}/>
      <Route path="/give-classes"  component={TeacherForm}/>
    </Switch>
  )
}