import routes from './routes';
import BaseServiceProvider from '../../../core/BaseServiceProvider';

class LoginServiceProvider extends BaseServiceProvider {
    constructor() {
        super();
        this.routes = routes;
    }
}

export default LoginServiceProvider;