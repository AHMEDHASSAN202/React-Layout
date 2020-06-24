import './index.css';
import Reactor from './core/Reactor';
import './shared/config';

const reactor = new Reactor();

reactor.offlineApplication();

reactor.run();

