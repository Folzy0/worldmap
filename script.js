// Создаем карту России
const map = L.map('map').setView([61.5240, 105.3188], 4); // Центр России

// Добавляем слой карты OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
}).addTo(map);

// Города и достопримечательности
const cities = [
    {
        name: 'Москва',
        coordinates: [55.755805703209056, 37.61768648966566],
        landmarks: [
            { name: 'Чистые пруды', coordinates: [55.76183179120321, 37.643801396943395] },
            { name: 'Большой театр', coordinates: [55.760008474777884, 37.618679686568065] },
            { name: 'ГУМ', coordinates: [55.7547675354506, 37.621331629534495] },
            { name: 'Красная площадь', coordinates: [55.75394383772985, 37.620776351055728] },
            { name: 'Храм Василия Блаженного', coordinates: [55.75261040717146, 37.6230299086259] },
            { name: 'Парк Зарядье', coordinates: [55.75144214708164, 37.62877813716473] },
            { name: 'Парящий мост', coordinates: [55.74946469197854, 37.62946713579662] },
            { name: 'Патриарший мост', coordinates: [55.743410651134845, 37.60844737917068] },
            { name: 'Храм Христа Спасителя', coordinates: [55.744620911939165, 37.605495464539416] },
        ]
    },
    {
        name: 'Санкт-Петербург',
        coordinates: [59.9343, 30.3351],
        landmarks: [
            { name: 'Музей Фаберже', coordinates: [59.93474559959557, 30.342828191900892] },
            { name: 'Михайловский замок', coordinates: [59.93970482360478, 30.33824805745934] },
            { name: 'Русский музей, Михайловский дворец', coordinates: [59.938643342941496, 30.33225830942375] },
            { name: 'Спас на Крови', coordinates: [59.94032216773725, 30.328491342372264] },
            { name: 'Эрмитаж', coordinates: [59.939862137785724, 30.31451256382978] },
            { name: 'Памятник "Медный всадник"', coordinates: [59.93641645642582, 30.302243925254693]},
            { name: 'Исаакиевский собор', coordinates: [59.933976442455545, 30.306507500237487] },
            { name: 'Казанский собор', coordinates: [59.933716547519, 30.32344547873555] }
        ]
    },
    {
        name: 'Казань',
        coordinates: [55.8304, 49.0661],
        landmarks: [
            { name: 'Казанский кремль', coordinates: [55.7963, 49.1088] },
            { name: 'Мечеть Кул-Шариф', coordinates: [55.7973, 49.1070] },
            { name: 'Дворец земледельцев', coordinates: [55.7961, 49.1054] }
        ]
    },
    {
        name: 'Нижний Новгород',
        coordinates: [56.3269, 44.0059],
        landmarks: [
            { name: 'Нижегородский кремль', coordinates: [56.3287, 44.0074] },
            { name: 'Чкаловская лестница', coordinates: [56.3280, 44.0086] },
            { name: 'Стрелка', coordinates: [56.3304, 44.0251] }
        ]
    },
    {
        name: 'Владивосток',
        coordinates: [43.1198, 131.8869],
        landmarks: [
            { name: 'Русский мост', coordinates: [43.063920845649925, 131.908700255011135] },
           { name: 'Золотой мост', coordinates: [43.11032515352961, 131.89624771110897] },
            { name: 'Корабельная набережная', coordinates: [43.112962320972315, 131.8915563920866] }
            
        ]
    },
    {
        name: 'Якутск',
        coordinates: [62.0281, 129.7321],
        landmarks: [
            { name: 'Музей мамонта им. П.А. Лазарева', coordinates: [62.01701306495546, 129.704580514388] },
            { name: 'Площадь Ленина', coordinates: [62.02721305618359, 129.7321771349186] },
            { name: 'Национальный художественный музей', coordinates: [62.025807882644095, 129.73194229576563] }
        ]
    }
];

// Функция добавления маркеров и маршрутов
cities.forEach(city => {
    // Добавляем маркер города
    const cityMarker = L.marker(city.coordinates).addTo(map);
    cityMarker.bindPopup(`<b>${city.name}</b>`);

    // Добавляем маршрут по достопримечательностям
    const landmarkCoordinates = city.landmarks.map(l => l.coordinates);
    const polyline = L.polyline(landmarkCoordinates, { color: 'blue' }).addTo(map);
    polyline.bindPopup(`Маршрут по ${city.name}`);

    // Добавляем маркеры достопримечательностей
    city.landmarks.forEach(landmark => {
        const landmarkMarker = L.marker(landmark.coordinates).addTo(map);
        landmarkMarker.bindPopup(`<b>${landmark.name}</b>`);
    });
});
// Добавляем дополнительные города
cities.push(
    {
        name: 'Екатеринбург',
        coordinates: [56.8389, 60.6057],
        landmarks: [
            { name: 'Храм-на-Крови', coordinates: [56.8372, 60.6241] },
            { name: 'Плотинка', coordinates: [56.8396, 60.6086] },
            { name: 'Ельцин Центр', coordinates: [56.8384, 60.6042] }
        ]
    },
    {
        name: 'Новосибирск',
        coordinates: [55.0084, 82.9357],
        landmarks: [
            { name: 'Новосибирский государственный краеведческий музей', coordinates: [55.0067, 82.9349] },
            { name: 'Оперный театр', coordinates: [55.0084, 82.9336] },
            { name: 'Площадь Ленина', coordinates: [55.0081, 82.9345] }
        ]
    },
    {
        name: 'Иркутск',
        coordinates: [52.2869, 104.3050],
        landmarks: [
            { name: '130-й квартал', coordinates: [52.2843, 104.2895] },
            { name: 'Иркутский областной краеведческий музей', coordinates: [52.2891, 104.3007] },
            { name: 'Спасская церковь', coordinates: [52.2865, 104.3043] }
        ]
    }, 
    {
        name: 'Петрозаводск',
        coordinates: [61.7891, 34.3596],
        landmarks: [
            { name: 'Онежская набережная', coordinates: [61.7885, 34.3623] },
            { name: 'Музей изобразительных искусств Карелии', coordinates: [61.7867, 34.3545] },
            { name: 'Памятник Петру I', coordinates: [61.7911, 34.3614] }
        ]
    },
    {
        name: 'Архангельск',
        coordinates: [64.5399, 40.5152],
        landmarks: [
            { name: 'Памятник Ломоносову', coordinates: [64.5408, 40.5167] },
            { name: 'Набережная Северной Двины', coordinates: [64.5393, 40.5171] },
            { name: 'Кенозерский национальный парк', coordinates: [64.5673, 40.5906] }
        ]
    },
    {
        name: 'Сыктывкар',
        coordinates: [61.6680, 50.8357],
        landmarks: [
            { name: 'Национальный музей Республики Коми', coordinates: [61.6678, 50.8313] },
            { name: 'Театр оперы и балета Республики Коми', coordinates: [61.6675, 50.8397] },
            { name: 'Памятник Ленину', coordinates: [61.6682, 50.8369] }
        ]
    },
    {
        name: 'Салехард',
        coordinates: [66.5392, 66.6088],
        landmarks: [
            { name: 'Полярный круг', coordinates: [66.5338, 66.6115] },
            { name: 'Ямало-Ненецкий краеведческий музей', coordinates: [66.5386, 66.6094] },
            { name: 'Парк Победы', coordinates: [66.5401, 66.6079] }
        ]
    },
    {
        name: 'Мурманск',
        coordinates: [68.9730, 33.0864],
        landmarks: [
            { name: 'Алёша - памятник защитникам Заполярья', coordinates: [68.9792, 33.0833] },
            { name: 'Мурманский морской вокзал', coordinates: [68.9716, 33.0844] },
            { name: 'Арктическая выставка', coordinates: [68.9729, 33.0866] }
        ]
    },
    {
        name: 'Новокузнецк',
        coordinates: [53.7596, 87.1216],
        landmarks: [
            { name: 'Кузнецкая крепость', coordinates: [53.7615, 87.1092] },
            { name: 'Площадь Побед', coordinates: [53.7592, 87.1212] },
            { name: 'Новокузнецкий драматический театр', coordinates: [53.7558, 87.1246] }
        ]
    },
    {
        name: 'Сургут',
        coordinates: [61.2559, 73.3845],
        landmarks: [
            { name: 'Старый Сургут', coordinates: [61.2541, 73.3839] },
            { name: 'Сургутский мост', coordinates: [61.2466, 73.3922] },
            { name: 'Сургутский краеведческий музей', coordinates: [61.2589, 73.3851] }
        ]
    }
);

// Обновляем карту с новыми данными
cities.forEach(city => {
    const cityMarker = L.marker(city.coordinates).addTo(map);
    cityMarker.bindPopup(`<b>${city.name}</b>`);

    const landmarkCoordinates = city.landmarks.map(l => l.coordinates);
    const polyline = L.polyline(landmarkCoordinates, { color: 'blue' }).addTo(map);
    polyline.bindPopup(`Маршрут по ${city.name}`);

    city.landmarks.forEach(landmark => {
        const landmarkMarker = L.marker(landmark.coordinates).addTo(map);
        landmarkMarker.bindPopup(`<b>${landmark.name}</b>`);
    });
});
// Обновляем карту с поддержкой отображения информации при наведении
cities.forEach(city => {
    // Добавляем маркер города
    const cityMarker = L.marker(city.coordinates).addTo(map);
    cityMarker.bindPopup(`<b>${city.name}</b>`);

    // Добавляем событие отображения информации при наведении
    cityMarker.on('mouseover', function () {
        this.openPopup();
    });

    cityMarker.on('mouseout', function () {
        this.closePopup();
    });

    // Добавляем маршрут по достопримечательностям
    const landmarkCoordinates = city.landmarks.map(l => l.coordinates);
    const polyline = L.polyline(landmarkCoordinates, { color: 'blue' }).addTo(map);
    polyline.bindPopup(`Маршрут по ${city.name}`);

    // Добавляем маркеры достопримечательностей
    city.landmarks.forEach(landmark => {
        const landmarkMarker = L.marker(landmark.coordinates).addTo(map);
        landmarkMarker.bindPopup(`<b>${landmark.name}</b>`);

        // Добавляем событие для маркеров достопримечательностей
        landmarkMarker.on('mouseover', function () {
            this.openPopup();
        });

        landmarkMarker.on('mouseout', function () {
            this.closePopup();
        });
    });
});

