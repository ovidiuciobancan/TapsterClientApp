import { VenuesService } from "services/venuesService";

/**
 *  class Services
 **/

class ServiceFactory {

    public venues: VenuesService = new VenuesService();

}

export default new ServiceFactory();