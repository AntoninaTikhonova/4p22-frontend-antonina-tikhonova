'use strict'

fetch('https://reqres.in/api/users?per_page=12') 
    .then((response) => response.json())
    .then((result) => {
        const usersDataArray = result.data;
        console.log('----------')
        console.log('Пункт №2:')
        usersDataArray.forEach((element) => {
            console.log(element.last_name);
        });
        console.log('----------');
        console.log('Пункт №3:');
        const letterFUsers = usersDataArray.filter((element) => {
            if (element.last_name[0] === 'F') {
                return element;
            };
        });
        function findInformationAboutUsers(obj) {
            for (let [key, value] of Object.entries(obj)) {
                if (typeof value !== 'object') {
                    console.log(`${key}: ${value}`);
                    continue;
                } 
                findInformationAboutUsers(value);
                };
            };
        console.log(findInformationAboutUsers(letterFUsers));
        console.log('----------');
        console.log('Пункт №4:');
        const ourBaseConsistOf = usersDataArray.reduce((acc, element) => {
            let firstAndSecondName = ` ${element.first_name} ${element.last_name}`
            if (element !== Array.length - 1) {
                firstAndSecondName += ',';
            } else {
                firstAndSecondName += '.';
            };
            acc += firstAndSecondName;
            return acc;
        }, '');
        console.log(`Наша база содержит данные следующих пользователей:${ourBaseConsistOf}`);
        console.log('----------');
        console.log('Пункт №5:');
        let element0 = usersDataArray[0];
        console.log(JSON.stringify(Object.keys(element0)));
    }
    )
    .catch((e) => 
    console.log(`Ошибка ${e}`))