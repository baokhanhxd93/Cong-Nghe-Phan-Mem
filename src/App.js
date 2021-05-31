import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { AuthTemplate } from './templates/AuthTemplate/AuthTemplate'
import Login from './pages/Auth/Login'
import { UserTemplate } from './templates/UserTemplate/UserTemplate';
import Homepage from './pages/Homepage/homepage'
import { AdminTemplate } from './templates/AdminTemplate/AdminTemplate';
import { CustomerTemplate } from './templates/CustomerTemplate/CustomerTemplate';
import HomeAdmin from './pages/Admin/HomeAdmin';
import FeedbackAdmin from './pages/Admin/FeedbackAdmin';
import MenuItemAdmin from './pages/Admin/MenuItemAdmin';
import EmployeesAdmin from './pages/Admin/EmployeesAdmin';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <AuthTemplate exact path='/login' component={Login} />
        <AdminTemplate exact path='/admin' component={HomeAdmin} />
          <AdminTemplate exact path='/admin/dashboard' component={HomeAdmin} />
          <AdminTemplate exact path='/admin/feedback' component={FeedbackAdmin} />
          <AdminTemplate exact path='/admin/menuitem' component={MenuItemAdmin} />
          <AdminTemplate exact path='/admin/employees' component={EmployeesAdmin} />
        <UserTemplate exact path='/' component={Homepage} />
        <CustomerTemplate exact path='/customer' component={Homepage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;