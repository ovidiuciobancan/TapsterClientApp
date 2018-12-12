import constants from 'code/constants';
//import { path } from 'path';

export class BaseService {
    
    protected resourceUrl : string;

    constructor(resourceName: string) {
        this.resourceUrl = `${constants.API_URL}/${resourceName}`;
    }
}