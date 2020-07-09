import AdminLoginServiceProvider from "../modules/AdminLoginModule/AdminLoginServiceProvider";
import DashboardServiceProvider from "../modules/DashboardModule/DashboardServiceProvider";
import HomeServiceProvider from "../modules/HomeModule/HomeServiceProvider";

const ServiceProviderContainer = [
    AdminLoginServiceProvider,
    DashboardServiceProvider,
    HomeServiceProvider,
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