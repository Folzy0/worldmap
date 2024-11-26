const map = L.map('map').setView([61.5240, 105.3188], 4);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
}).addTo(map);

const cities = [
    {
        name: 'Москва',
        coordinates: [55.7443523118569, 37.62106157881133],
        description: '— столица России, город федерального значения, административный центр Центрального федерального округа и центр Московской области, в состав которой не входит. Мегаполис; крупнейший по численности населения город России и её субъект — 13 149 803 человека (2024), что делает Москву 22-й среди городов мира по численности населения. Центр Московской городской агломерации. Самый крупный город Европы по площади и населению.', 
         landmarks: [
            { name: 'Чистые пруды', coordinates: [55.76183179120321, 37.643801396943395],
                description: '',
            },
            { name: 'Большой театр', coordinates: [55.760008474777884, 37.618679686568065],
                description: '',
            },
            { name: 'ГУМ', coordinates: [55.7547675354506, 37.621331629534495],
                description: '',
            },
            { name: 'Красная площадь', coordinates: [55.75394383772985, 37.620776351055728],
                description: '',
            },
            { name: 'Храм Василия Блаженного', coordinates: [55.75261040717146, 37.6230299086259],
                description: '',
            },
            { name: 'Парк Зарядье', coordinates: [55.75144214708164, 37.62877813716473],
                description: '',
            },
            { name: 'Парящий мост', coordinates: [55.74946469197854, 37.62946713579662],
                description: '',
            },
            { name: 'Патриарший мост', coordinates: [55.743410651134845, 37.60844737917068],
                description: '',
            },
            { name: 'Храм Христа Спасителя', coordinates: [55.744620911939165, 37.605495464539416],
                description: '',
            },
        ]
    },
    {
        name: 'Санкт-Петербург',
        coordinates: [59.93358987179147, 30.333005471591424],
        description: '— второй по численности населения город России. Город федерального значения. Административный центр Северо-Западного федерального округа. Основан 16 (27) мая 1703 года царём Петром I. В 1714—1728 и 1732—1918 годах — столица Российского государства. Назван в честь святого Петра — небесного покровителя царя-основателя, но со временем стал всё больше ассоциироваться с именем самого Петра I. Город исторически и культурно связан с рождением Российской империи и вхождением России в современную историю в роли европейской великой державы. Расположен на северо-западе страны на побережье Финского залива и в устье реки Невы. Граничит с Ленинградской областью, также имеет морские границы с Финляндией и Эстонией',
        landmarks: [
            { name: 'Музей Фаберже', coordinates: [59.93474559959557, 30.342828191900892],
                description: '',
            },
            { name: 'Михайловский замок', coordinates: [59.93970482360478, 30.33824805745934],
                description: '',
            },
            { name: 'Русский музей, Михайловский дворец', coordinates: [59.938643342941496, 30.33225830942375],
                description: '',
            },
            { name: 'Спас на Крови', coordinates: [59.94032216773725, 30.328491342372264],
                description: '',
            },
            { name: 'Эрмитаж', coordinates: [59.939862137785724, 30.31451256382978],
                description: '',
            },
            { name: 'Памятник "Медный всадник"', coordinates: [59.93641645642582, 30.302243925254693],
                description: '',
            },
            { name: 'Исаакиевский собор', coordinates: [59.933976442455545, 30.306507500237487],
                description: '',
            },
            { name: 'Казанский собор', coordinates: [59.933716547519, 30.32344547873555],
                description: '',
            }
        ]
    },
    {
        name: 'Казань',
        coordinates: [55.774389025594274, 49.137613070999926],
        description: '',
        landmarks: [
            { name: 'Казанский кремль', coordinates: [55.7963, 49.1088],
                description: '',
            },
            { name: 'Мечеть Кул-Шариф', coordinates: [55.7973, 49.1070],
                description: '',
            },
            { name: 'Дворец земледельцев', coordinates: [55.7961, 49.1054],
                description: '',
            },
            { name: 'Набережная реки Казанки', coordinates: [55.7994, 49.1062],
                description: '',
            },
            { name: 'Парк Тысячелетия', coordinates: [55.7866, 49.1221],
                description: '',
            }
        ]
    },
    {
        name: 'Нижний Новгород',
        coordinates: [56.3269, 44.0059],
        description: '',
        landmarks: [
            { name: 'Нижегородский кремль', coordinates: [56.3287, 44.0074],
                description: '',
            },
            { name: 'Чкаловская лестница', coordinates: [56.3280, 44.0086],
                description: '',
            },
            { name: 'Площадь Минина и Пожарского', coordinates: [56.3289, 44.0075],
                description: '',
            },
            { name: 'Набережная Федоровского', coordinates: [56.3300, 44.0160],
                description: '',
            },
            { name: 'Парк Швейцария', coordinates: [56.3144, 44.0224],
                description: '',
            }
        ]
    },
    {
        name: 'Владивосток',
        coordinates: [43.04959621932487, 131.84277324714847],
        description: '',
        landmarks: [
            { name: 'Русский мост', coordinates: [43.0639, 131.9087],
                description: '',
            },
            { name: 'Золотой мост', coordinates: [43.1103, 131.8962],
                description: '',
            },
            { name: 'Корабельная набережная', coordinates: [43.1129, 131.8915],
                description: '',
            },
            { name: 'Токаревский маяк', coordinates: [43.07397033772767, 131.84263904618888],
                description: '',
            },
            { name: 'Видовая площадка Орлиное гнездо', coordinates: [43.1149, 131.8856],
                description: '',
            }
        ]
    },

    {
        name: 'Екатеринбург',
        coordinates: [56.8389, 60.6057],
        description: '',
        landmarks: [
            { name: 'Храм-на-Крови', coordinates: [56.8372, 60.6241],
                description: '',
            },
            { name: 'Ельцин Центр', coordinates: [56.8384, 60.6042],
                description: '',
            },
            { name: 'Плотинка', coordinates: [56.8396, 60.6086],
                description: '',
            },
            { name: 'Верх-Исетский пруд', coordinates: [56.8510, 60.5767],
                description: '',
            },
            { name: 'Смотровая площадка "Высоцкий"', coordinates: [56.8379, 60.5984],
                description: '',
            }
        ]
    },
    {
        name: 'Новосибирск',
        coordinates: [55.0084, 82.9357],
        description: '',
        landmarks: [
            { name: 'Новосибирский государственный краеведческий музей', coordinates: [55.0067, 82.9349],
                description: '',
            },
            { name: 'Площадь Ленина', coordinates: [55.0081, 82.9345],
                description: '',
            },
            { name: 'Оперный театр', coordinates: [55.0084, 82.9336],
                description: '',
            },
            { name: 'Зоопарк Новосибирска', coordinates: [55.0411, 82.9185],
                description: '',
            },
            { name: 'Часовня Святого Николая', coordinates: [55.0087, 82.9331],
                description: '',
            }
        ]
    },
    {
        name: 'Иркутск',
        coordinates: [52.2869, 104.3050],
        description: '',
        landmarks: [
            { name: '130-й квартал', coordinates: [52.2843, 104.2895],
                description: '',
            },
            { name: 'Иркутский областной краеведческий музей', coordinates: [52.2891, 104.3007],
                description: '',
            },
            { name: 'Спасская церковь', coordinates: [52.2865, 104.3043],
                description: '',
            },
            { name: 'Дом-музей декабристов', coordinates: [52.2878, 104.2863],
                description: '',
            },
            { name: 'Набережная реки Ангара', coordinates: [52.2879, 104.3046],
                description: '',
            }
        ]
    },
    {
        name: 'Петрозаводск',
        coordinates: [61.7891, 34.3596],
        description: '',
        landmarks: [
            { name: 'Онежская набережная', coordinates: [61.7885, 34.3623],
                description: '',
            },
            { name: 'Памятник Петру I', coordinates: [61.7911, 34.3614],
                description: '',
            },
            { name: 'Музей изобразительных искусств Карелии', coordinates: [61.7867, 34.3545],
                description: '',
            },
            { name: 'Крестовоздвиженский собор', coordinates: [61.7873, 34.3558],
                description: '',
            },
            { name: 'Парк культуры и отдыха', coordinates: [61.7889, 34.3555],
                description: '',
            }
        ]
    },
    {
        name: 'Архангельск',
        coordinates: [64.5399, 40.5152],
        description: '',
        landmarks: [
            { name: 'Памятник Ломоносову', coordinates: [64.5408, 40.5167],
                description: '',
            },
            { name: 'Набережная Северной Двины', coordinates: [64.5393, 40.5171],
                description: '',
            },
            { name: 'Кенозерский национальный парк', coordinates: [64.5673, 40.5906],
                description: '',
            },
            { name: 'Музей деревянного зодчества', coordinates: [64.5404, 40.5181],
                description: '',
            },
            { name: 'Архангельский театр драмы', coordinates: [64.5375, 40.5129],
                description: '',
            }
        ]
    },
    {
        name: 'Сыктывкар',
        coordinates: [61.6680, 50.8357],
        description: '',
        landmarks: [
            { name: 'Национальный музей Республики Коми', coordinates: [61.6678, 50.8313],
                description: '',
            },
            { name: 'Театр оперы и балета Республики Коми', coordinates: [61.6675, 50.8397],
                description: '',
            },
            { name: 'Памятник Ленину', coordinates: [61.6682, 50.8369],
                description: '',
            },
            { name: 'Городская площадь', coordinates: [61.6680, 50.8380],
                description: '',
            },
            { name: 'Свято-Стефановский кафедральный собор', coordinates: [61.6690, 50.8350],
                description: '',
            }
        ]
    },
    {
        name: 'Мурманск',
        coordinates: [68.9730, 33.0864],
        description: '',
        landmarks: [
            { name: 'Алёша — памятник защитникам Заполярья', coordinates: [68.9792, 33.0833],
                description: '',
            },
            { name: 'Мурманский морской вокзал', coordinates: [68.9716, 33.0844],
                description: '',
            },
            { name: 'Арктическая выставка', coordinates: [68.9729, 33.0866],
                description: '',
            },
            { name: 'Северное сияние парк', coordinates: [68.9751, 33.0892],
                description: '',
            },
            { name: 'Музей ледокола Ленин', coordinates: [68.9736, 33.0912],
                description: '',
            }
        ]
    },
    {
        name: 'Новокузнецк',
        coordinates: [53.7596, 87.1216],
        description: '',
        landmarks: [
            { name: 'Кузнецкая крепость', coordinates: [53.7615, 87.1092],
                description: '',
            },
            { name: 'Новокузнецкий драматический театр', coordinates: [53.7558, 87.1246],
                description: '',
            },
            { name: 'Музей-заповедник "Кузнецкий Алатау"', coordinates: [53.7522, 87.1025],
                description: '',
            },
            { name: 'Площадь Побед', coordinates: [53.7592, 87.1212],
                description: '',
            },
            { name: 'Парк Гагарина', coordinates: [53.7591, 87.1274],
                description: '',
            }
        ]
    },
    {
        name: 'Якутск',
        coordinates: [62.04040562742643, 129.73365229954706],
        description: '',
        landmarks: [
            { name: 'Музей мамонта', coordinates: [62.0170, 129.7045],
                description: '',
            },
            { name: 'Площадь Ленина', coordinates: [62.0272, 129.7321],
                description: '',
            },
            { name: 'Национальный художественный музей', coordinates: [62.0258, 129.7319],
                description: '',
            },
            { name: 'Царство вечной мерзлоты', coordinates: [62.0331, 129.7435],
                description: '',
            },
            { name: 'Краеведческий музей', coordinates: [62.0243, 129.7287],
                description: '',
            }
        ]
    },
    {
        name: 'Волгоград',
        coordinates: [48.71796657307283, 44.50627963243695],
        description: '',
        landmarks: [
            { name: 'Мамаев Курган', coordinates: [48.7424, 44.5378],
                description: '',
            },
            { name: 'Родина-Мать зовёт!', coordinates: [48.7424, 44.5366],
                description: '',
            },
            { name: 'Панорама Сталинградской битвы', coordinates: [48.7194, 44.5132],
                description: '',
            },
            { name: 'Царицынская опера', coordinates: [48.7237, 44.5156],
                description: '',
            },
            { name: 'Набережная Волгограда', coordinates: [48.7073, 44.5161],
                description: '',
            }
        ]
    },
    {
        name: 'Ростов-на-Дону',
        coordinates: [47.21007756797204, 39.71512331685644],
        description: '',
        landmarks: [
            { name: 'Ростовский государственный музыкальный театр', coordinates: [47.2333, 39.7159],
                description: '',
            },
            { name: 'Набережная реки Дон', coordinates: [47.2173, 39.7132],
                description: '',
            },
            { name: 'Собор Рождества Пресвятой Богородицы', coordinates: [47.2210, 39.7104],
                description: '',
            },
            { name: 'Центральный рынок', coordinates: [47.2226, 39.7057],
                description: '',
            },
            { name: 'Парк Революции', coordinates: [47.2201, 39.7175],
                description: '',
            }
        ]
    }
];

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

cities.forEach(city => {
    
    const cityIcon = L.icon({
        iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png', 
        iconSize: [25, 41], 
        iconAnchor: [12, 41], 
        popupAnchor: [1, -34], 
        className: 'city-marker', 
    });

    const cityMarker = L.marker(city.coordinates, { icon: cityIcon }).addTo(map);
    cityMarker.bindPopup(`<b>${city.name}</b>`);

    cityMarker.on('mouseover', function () {
        this.openPopup();
    });

    cityMarker.on('mouseout', function () {
        this.closePopup();
    });

    cityMarker.on('click', function (e) {
        e.originalEvent.stopPropagation(); 
        showInfo(`
            <h2>${city.name}</h2>
            <p>${city.description}</p>
        `);
    });

    const landmarkMarkers = [];

    city.landmarks.forEach(landmark => {
        const landmarkMarker = L.marker(landmark.coordinates).addTo(map);
        landmarkMarker.bindPopup(`<b>${landmark.name}</b>`);

        landmarkMarker.on('mouseover', function () {
            this.openPopup();
        });

        landmarkMarker.on('mouseout', function () {
            this.closePopup();
        });

        landmarkMarker.on('click', function (e) {
            e.originalEvent.stopPropagation(); 
            showInfo(`
                <h2>${landmark.name}</h2>
                <p>${landmark.description}</p>
            `);
        });

        landmarkMarkers.push(landmarkMarker);
    });

    map.on('zoomend', function () {
        const zoomLevel = map.getZoom();

        if (zoomLevel < 10) {
            landmarkMarkers.forEach(marker => {
                if (map.hasLayer(marker)) {
                    map.removeLayer(marker); 
                }
            });
        } else {
            landmarkMarkers.forEach(marker => {
                if (!map.hasLayer(marker)) {
                    marker.addTo(map); 
                }
            });
        }
    });
});


function showInfo(content) {
    
    let infoBox = document.getElementById('info-box');
    if (!infoBox) {
        infoBox = document.createElement('div');
        infoBox.id = 'info-box';
        infoBox.style.position = 'fixed';
        infoBox.style.top = '0'; 
        infoBox.style.right = '0'; 
        infoBox.style.width = '30%'; 
        infoBox.style.height = '100%'; 
        infoBox.style.backgroundColor = 'rgba(50, 50, 50, 0.9)'; 
        infoBox.style.color = '#ffffff'; 
        infoBox.style.boxShadow = '-4px 0 8px rgba(0,0,0,0.2)'; 
        infoBox.style.overflowY = 'auto'; 
        infoBox.style.padding = '20px';
        infoBox.style.zIndex = '1000';
        document.body.appendChild(infoBox);
    }
    infoBox.innerHTML = content;
}

document.addEventListener('click', function () {
    const infoBox = document.getElementById('info-box');
    if (infoBox) {
        infoBox.remove(); 
    }
});

document.body.addEventListener('click', function (e) {
    const infoBox = document.getElementById('info-box');
    if (infoBox && infoBox.contains(e.target)) {
        e.stopPropagation();
    }
});
