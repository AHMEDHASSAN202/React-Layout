import routes from './routes';
import BaseServiceProvider from '../../core/BaseServiceProvider';

class HomeServiceProvider extends BaseServiceProvider {
    constructor() {
        super();
        this.routes = routes;
    }
}

export default HomeServiceProvider;