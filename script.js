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
        description: '— культурная столица России, город, основанный Петром I на берегах Невы.',
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
        coordinates: [55.8304, 49.0661],
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
            { name: 'Стрелка', coordinates: [56.3304, 44.0251],
                description: '',
  }
        ]
    },
    {
        name: 'Владивосток',
        coordinates: [43.1198, 131.8869],
        description: '',
        landmarks: [
            { name: 'Русский мост', coordinates: [43.063920845649925, 131.908700255011135],
                description: '',
  },
           { name: 'Золотой мост', coordinates: [43.11032515352961, 131.89624771110897],
            description: '',
},
            { name: 'Корабельная набережная', coordinates: [43.112962320972315, 131.8915563920866],
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
            { name: 'Плотинка', coordinates: [56.8396, 60.6086],
                description: '',
  },
            { name: 'Ельцин Центр', coordinates: [56.8384, 60.6042],
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
            { name: 'Оперный театр', coordinates: [55.0084, 82.9336],
                description: '',
  },
            { name: 'Площадь Ленина', coordinates: [55.0081, 82.9345],
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
            { name: 'Музей изобразительных искусств Карелии', coordinates: [61.7867, 34.3545],
                description: '',
  },
            { name: 'Памятник Петру I', coordinates: [61.7911, 34.3614],
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
  }
        ]
    },
    {
        name: 'Мурманск',
        coordinates: [68.9730, 33.0864],
        description: '',
        landmarks: [
            { name: 'Алёша - памятник защитникам Заполярья', coordinates: [68.9792, 33.0833],
                description: '',
  },
            { name: 'Мурманский морской вокзал', coordinates: [68.9716, 33.0844],
                description: '',
  },
            { name: 'Арктическая выставка', coordinates: [68.9729, 33.0866],
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
            { name: 'Площадь Побед', coordinates: [53.7592, 87.1212],
                description: '',
  },
            { name: 'Новокузнецкий драматический театр', coordinates: [53.7558, 87.1246],
                description: '',
  }
        ]
    },
    {
        name: 'Якутск',
        coordinates: [62.04040562742643, 129.73365229954706],
        description: '',
        landmarks: [
            { name: 'Площадь Ленина', coordinates: [62.02721305618359, 129.7321771349186],
                description: '',
  },
            { name: 'Музей мамонта им. П.А. Лазарева', coordinates: [62.01701306495546, 129.704580514388],
                description: '',
  },
            { name: 'Национальный художественный музей', coordinates: [62.025807882644095, 129.73194229576563],
                description: '',
  }
        ]
    },
    {
        name: 'Волгоград',
        coordinates: [48.71796657307283, 44.50627963243695],
        description: '',
        landmarks: [
            { name: 'Площадь Ленина', coordinates: [62.02721305618359, 129.7321771349186],
                description: '',
  },
            { name: 'Музей мамонта им. П.А. Лазарева', coordinates: [62.01701306495546, 129.704580514388],
                description: '',
  },
            { name: 'Национальный художественный музей', coordinates: [62.025807882644095, 129.73194229576563],
                description: '',
  }
        ]
    },
    {
        name: 'Ростов-на-Дону',
        coordinates: [47.23533417998279, 39.702078260720505],
        description: '',
         landmarks: [
            { name: 'Площадь Ленина', coordinates: [62.02721305618359, 129.7321771349186],
                description: '',
  },
            { name: 'Музей мамонта им. П.А. Лазарева', coordinates: [62.01701306495546, 129.704580514388],
                description: '',
  },
            { name: 'Национальный художественный музей', coordinates: [62.025807882644095, 129.73194229576563],
                description: '',
  }
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

// Обновляем карту с поддержкой двух функций: наведение мыши и открытие информации
cities.forEach(city => {
    // Создание кастомного красного маркера для города
    const cityIcon = L.icon({
        iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',  // Стандартный маркер
        iconSize: [25, 41], // Размер маркера
        iconAnchor: [12, 41], // Точка якоря маркера
        popupAnchor: [1, -34], // Подсказка
        className: 'city-marker', // Чтобы можно было стилизовать маркер
    });

    const cityMarker = L.marker(city.coordinates, { icon: cityIcon }).addTo(map);
    cityMarker.bindPopup(`<b>${city.name}</b>`);

    // Событие отображения всплывающей подсказки при наведении
    cityMarker.on('mouseover', function () {
        this.openPopup();
    });

    cityMarker.on('mouseout', function () {
        this.closePopup();
    });

    // Событие отображения основного информационного блока при клике на город
    cityMarker.on('click', function (e) {
        e.originalEvent.stopPropagation(); // Останавливаем всплытие события
        showInfo(`
            <h2>${city.name}</h2>
            <p>${city.description}</p>
        `);
    });

    // Массив для хранения маркеров достопримечательностей
    const landmarkMarkers = [];

    city.landmarks.forEach(landmark => {
        const landmarkMarker = L.marker(landmark.coordinates).addTo(map);
        landmarkMarker.bindPopup(`<b>${landmark.name}</b>`);

        // Событие отображения всплывающей подсказки при наведении
        landmarkMarker.on('mouseover', function () {
            this.openPopup();
        });

        landmarkMarker.on('mouseout', function () {
            this.closePopup();
        });

        // Событие отображения основного информационного блока при клике на достопримечательность
        landmarkMarker.on('click', function (e) {
            e.originalEvent.stopPropagation(); // Останавливаем всплытие события
            showInfo(`
                <h2>${landmark.name}</h2>
                <p>${landmark.description}</p>
            `);
        });

        // Добавляем маркер достопримечательности в массив
        landmarkMarkers.push(landmarkMarker);
    });

    // Обработка события изменения масштаба карты (zoomend)
    map.on('zoomend', function () {
        const zoomLevel = map.getZoom();

        // Если масштаб меньше 10, скрыть маркеры достопримечательностей
        if (zoomLevel < 10) {
            landmarkMarkers.forEach(marker => {
                if (map.hasLayer(marker)) {
                    map.removeLayer(marker); // Убираем маркеры
                }
            });
        } else {
            // Если масштаб больше 10, показать маркеры достопримечательностей
            landmarkMarkers.forEach(marker => {
                if (!map.hasLayer(marker)) {
                    marker.addTo(map); // Добавляем маркер, если он не добавлен
                }
            });
        }
    });
});

// Функция отображения основного информационного блока
function showInfo(content) {
    // Создаем или обновляем блок с информацией
    let infoBox = document.getElementById('info-box');
    if (!infoBox) {
        infoBox = document.createElement('div');
        infoBox.id = 'info-box';
        infoBox.style.position = 'fixed';
        infoBox.style.top = '0'; // Начинаем с верхней границы экрана
        infoBox.style.right = '0'; // Прилегает к правой границе
        infoBox.style.width = '30%'; // Ширина блока (можно настроить)
        infoBox.style.height = '100%'; // Высота на весь экран
        infoBox.style.backgroundColor = 'rgba(50, 50, 50, 0.9)'; // Серый фон с прозрачностью
        infoBox.style.color = '#ffffff'; // Белый цвет текста
        infoBox.style.boxShadow = '-4px 0 8px rgba(0,0,0,0.2)'; // Тень слева
        infoBox.style.overflowY = 'auto'; // Прокрутка для длинного содержимого
        infoBox.style.padding = '20px';
        infoBox.style.zIndex = '1000';
        document.body.appendChild(infoBox);
    }
    infoBox.innerHTML = content;
}

// Добавляем событие для закрытия блока при клике на пустое пространство
document.addEventListener('click', function () {
    const infoBox = document.getElementById('info-box');
    if (infoBox) {
        infoBox.remove(); // Удаляем блок информации
    }
});

// Останавливаем закрытие блока при клике внутри него
document.body.addEventListener('click', function (e) {
    const infoBox = document.getElementById('info-box');
    if (infoBox && infoBox.contains(e.target)) {
        e.stopPropagation();
    }
});
