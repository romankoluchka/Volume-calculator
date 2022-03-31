const formSearch = document.querySelector('.form-search'),
diametr = formSearch.querySelector('.diametr'),
lenght = formSearch.querySelector('.lenght'),
    wrapperResult = document.querySelector('.wrapper_result');

const calculateVolume = (d, l) => Math.PI * (d/2) ** 2 * l / 1000; 

const showResult = (result) => {
    wrapperResult.removeChild(wrapperResult.firstChild);
    const p = document.createElement('p');
    p.classList.add('result');
    p.textContent = (`Об'єм: ${result} л`);
    wrapperResult.append(p);
};

formSearch.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const d = diametr.value;
    const l = lenght.value
    result = calculateVolume(d, l).toFixed(3);

    showResult(result);
});


// const getData = (url, callback) => {
//     const request = new XMLHttpRequest();

//     request.open('GET', url);

//     request.addEventListener('readystatechange', () => {
//         if (request.readyState !== 4) return;

//         if (request.status === 200) {
//             callback(request.response);
//         } else {
//             console.error(request.status);
//         }
//     });

//     request.send();
// };

// const showCity = (input, list) => {
//     list.textContent = '';

//     if (input.value === '') return;
//     const filterSity = city.filter((item) => {
//         const fixItem = item.name.toLowerCase();
//         return fixItem.includes(input.value.toLowerCase());
//     });

//     filterSity.forEach((item) => {
//         const li = document.createElement('li');
//         li.classList.add('dropdown__city');
//         li.textContent = item.name;
//         list.append(li)
//     });
// };

// const selectCity = (event, input, list) => {
//     const target = event.target;
//     if (target.tagName.toLowerCase() === 'li') {
//         input.value = target.textContent;
//         list.textContent = '';
//     }
// }

// const renderCheapDay = (cheapTicket) => {
//     console.log(cheapTicket);
    
// };

// const renderCheapAll = (cheapTickets) => {
//     cheapTickets.sort((a, b)=> a.value - b.value);
//     console.log(cheapTickets);
// };

// const renderChip = (data, date) => {
//     const cheapTicketAll = JSON.parse(data).best_prices;

//     const cheapTicketDay = cheapTicketAll.filter(item => item.depart_date === date);

//     renderCheapDay(cheapTicketDay);
    
//     renderCheapAll(cheapTicketAll);
    
// };

// inputCitiesFrom.addEventListener('input', () => {
//     showCity(inputCitiesFrom, dropdownCitiesFrom)
// });

// dropdownCitiesFrom.addEventListener('click', () => {
//     selectCity(event, inputCitiesFrom, dropdownCitiesFrom)
// });

// inputCitiesTo.addEventListener('input', () => {
//     showCity(inputCitiesTo, dropdownCitiesTo)
// });

// dropdownCitiesTo.addEventListener('click', () => {
//     selectCity(event, inputCitiesTo, dropdownCitiesTo)
// });

// formSearch.addEventListener('submit', (event) => {
//     event.preventDefault();

//     const formData = {
//         from: city.find((item) => inputCitiesFrom.value === item.name).code,
//         to: city.find((item) => inputCitiesTo.value === item.name).code,
//         when: inputDateDepart.value,
//     };

//     const requestData = `?depart_date=${formData.when}&origin=${formData.from}` + 
//     `&destination=${formData.to}&one_way=true&token=${API_KEY}`

//     const requestData2 = '?depart_date=' + formData.when + 
//     '&origin=' + formData.from + 
//     '&destination=' + formData.to + 
//     '&one_way=true&token=' + API_KEY;

//     getData(calendar + requestData, (response) => {
//         renderChip(response, formData.when)
//     });
// });

// getData(citiesApi, (data) => {
//     city = JSON.parse(data).filter(item => item.name);
// }); 