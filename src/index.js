import Reactor from './core/Reactor';
import './modules/admin/LoginModule/routes.js';


const reactor = new Reactor();


reactor.offlineApplication();

reactor.run();

