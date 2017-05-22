import angular from 'angular';
import Home from './home/home';
import Accounts from './accounts/accounts';
import Locations from './locations/locations';
import LocationTypes from './locationTypes/locationTypes';
import Categories from './categories/categories';
import Status from './status/status';
import Items from './items/items';
import ItemsCRD from './itemsCRD/itemsCRD';
import Login from './login/login';
import Navbar from './navbar/navbar';
import MyAccount from './myAccount/myAccount';
import AccessLogs from './accessLogs/accessLogs';

let Components = angular.module('app.components', [
  Home,
  Accounts,
  Locations,
  Categories,
  Status,
  LocationTypes,
  Items,
  ItemsCRD,
  Navbar,
  Login,
  MyAccount,
  AccessLogs
])
.name;

export default Components;
