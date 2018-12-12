import constants from 'code/constants';

export class MenuService {
    
    public getMenu(venueId: string) {
        let url = this.getResourceUrl(venueId);
        return fetch(url)
            .then(response => response.json())
            .catch(error => console.error(error));
    }

    private getResourceUrl(venueId: string) {
        return `${constants.API_URL}/venues(${venueId})/menuCategories`;
    }
}