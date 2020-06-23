import LoginServiceProvider from "../modules/admin/LoginModule/LoginServiceProvider";
import HomeServiceProvider from "../modules/front/HomeModule/HomeServiceProvider";

const ServiceProviderContainer = [
    LoginServiceProvider,
    HomeServiceProvider
];

class ServiceProvider {
    constructor() {
        this.serviceProviders = [];
    }


    boot() {
        for (let ServiceProvider of ServiceProviderContainer) {
            this.serviceProviders.push(new ServiceProvider());
        }
    }

    registerRoutes() {
        for (let provider of this.serviceProviders) {
            provider.mapRoutes();
        }
    }
}


export default ServiceProvider;