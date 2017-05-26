import angular from 'angular';
import accountService from './accountService';
import auditService from './auditService';
import locationTypeService from './locationTypeService';
import baseService from './baseService';
import categoryService from './categoryService';
import statusService from './statusService';
import locationService from './locationService';
import itemService from './itemService';
import itemCRDService from './itemCRDService';
import sessionService from './sessionService';
import jwtService from './jwtService';
import myAccountService from './myAccountService';
import accessLogService from './accessLogService';
import swalService from './swalService';
import roleService from './roleService';
import transitionService from './transitionService';
import reportService from './reportService';

export default angular
  .module('app.services', [])
  .service({
    baseService,
    accountService,
    auditService,
    categoryService,
    statusService,
    locationTypeService,
    locationService,
    itemService,
    itemCRDService,
    sessionService,
    jwtService,
    myAccountService,
    accessLogService,
    swalService,
    roleService,
    transitionService, 
    reportService
}).name;
