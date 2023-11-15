function companyUsers(input) {

    let obj = {};

    for (const line of input) {
        let [company, idNumber] = line.split(' -> ');
        if (!obj.hasOwnProperty(company)) {
            obj[company] = [];
        }
        obj[company].push(idNumber);
    }

    let sortedCompanies = Object.entries(obj);
    sortedCompanies.sort((a, b) => a[0].localeCompare(b[0]));
    for (let element of sortedCompanies) {
        console.log(element[0]);
        let mySet = new Set(element[1]);
        for (const numbers of mySet) {
            console.log(`-- ${numbers}`);
        }

    }
}
companyUsers([
    'SoftUni -> AA12345', 'SoftUni -> BB12345',
    'Microsoft -> CC12345', 'HP -> BB12345'
]);