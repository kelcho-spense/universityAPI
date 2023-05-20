import { addUniversity, getUniversities, searchUniversityViaCountry } from '../controllers/crm.Controllers';
const routes = (app) => {
    app.route('/universities')
        .get(getUniversities)
        .post(addUniversity);
    app.route('/universities/:country')
        .get(searchUniversityViaCountry)
}
export default routes;