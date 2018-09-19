import http from './http';

let api = (()=>{
    let api={};

    api.company=(()=>{
        let company={};
        company.getCompaniesInfoBySearchResult=()=>{
           return  http.get('api/companies?name=北方火车')
        };
        return company;
    })();

    return api;
})();
export default api