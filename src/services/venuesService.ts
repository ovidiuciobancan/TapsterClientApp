import constants from 'code/constants';

export class VenuesService {
    
    public getVenue(id: string) {
        let url = `${this.getResourceUrl()}(${id})`;
        return fetch(url)
            .then(response => response.json())
            .catch(error => console.error(error));
    }

    public getVenues() {
        let url = this.getResourceUrl();
        return fetch(url)
            .then(response => response.json())
            .then(json => json.value)
            .catch(error => console.error(error));
    }

    private getResourceUrl() {
        return `${constants.API_URL}/venues`;
    }
}