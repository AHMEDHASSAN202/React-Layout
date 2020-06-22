import * as serviceWorker from './serviceWorker';
import { scan } from './Router';
import ServiceProvider from './ServiceProvider';

class Reactor {

    offlineApplication() {
        // If you want your app to work offline and load faster, you can change
          // unregister() to register() below. Note this comes with some pitfalls.
          // Learn more about service workers: https://bit.ly/CRA-PWA
          serviceWorker.unregister(); 
    }

    run() {
        this.serviceProvider();

        scan();
    }


    serviceProvider() {
        const serviceProvider = new ServiceProvider();
        serviceProvider.boot();
        serviceProvider.registerRoutes();
    }
}


export default Reactor;