import routes from './routes';
import BaseServiceProvider from './../../core/BaseServiceProvider';

class DashboardServiceProvider extends BaseServiceProvider {
    constructor() {
        super();
        this.routes = routes;
    }
}

export default DashboardServiceProvider;