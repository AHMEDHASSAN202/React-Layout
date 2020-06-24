import { addRoute } from "./Router";

class BaseServiceProvider {
    constructor() {
        this.routes = [];
    }

    mapRoutes() {
        if (!this.routes) return ;
        for (let route of this.routes) {
            addRoute(route);
        }
    }
}


export default BaseServiceProvider;