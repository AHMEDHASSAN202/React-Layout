import routes from './routes';
import BaseServiceProvider from './../../core/BaseServiceProvider';

class AdminLoginServiceProvider extends BaseServiceProvider {
    constructor() {
        super();
        this.routes = routes;
    }
}

export default AdminLoginServiceProvider;