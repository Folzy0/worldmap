const map = L.map('map').setView([61.5240, 105.3188], 4);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
}).addTo(map);
const cities = [
    {
        name: 'Москва',
        coordinates: [55.7443523118569, 37.62106157881133],
        description: ' столица России, город федерального значения, административный центр Центрального федерального округа и центр Московской области, в состав которой не входит. Мегаполис; крупнейший по численности населения город России и её субъект — 13 149 803 человека (2024), что делает Москву 22-й среди городов мира по численности населения. Центр Московской городской агломерации. Самый крупный город Европы по площади и населению. Археологические данные свидетельствуют о существовании городского поселения в районе будущего Кремля с XI века. История города насчитывает, по меньшей мере, 877 лет: первое письменное упоминание о Москве относится к 1147 году. Москва — историческая столица Великого княжества Московского, Русского царства, Российской империи (в 1728—1732 годах), Советской России и СССР. Город-герой. В Москве находятся федеральные органы государственной власти Российской Федерации (за исключением Конституционного суда), посольства иностранных государств, штаб-квартиры большинства крупнейших российских коммерческих организаций и общественных объединений. Расположена на западе России, на реке Москве в центре Восточно-Европейской равнины, в междуречье Оки и Волги. Как субъект федерации Москва граничит с Московской и Калужской областями. Москва включает 6 городских населённых пунктов, в том числе 4 города и 2 посёлка городского типа, а также большое количество сельских населённых пунктов. Ряд подмосковных городов, посёлков городского типа и сельских населённых пунктов были включены в состав Москвы и утратили свой статус. Москва — популярный туристический центр. Московский Кремль, Красная площадь, Новодевичий монастырь и Церковь Вознесения в Коломенском входят в список объектов всемирного наследия ЮНЕСКО. Она является важнейшим транспортным узлом: город обслуживают 6 аэропортов, 10 железнодорожных вокзалов, 3 речных порта (имеется речное сообщение с морями бассейнов Атлантического и Северного Ледовитого океанов). С 1935 года в Москве работает метрополитен. Москва — спортивный центр страны. В 1980 году в Москве прошли XXII летние Олимпийские игры, а в 2018 году город стал одним из хозяев чемпионата мира по футболу. ',
        landmarks: [
            { name: 'Чистые пруды', coordinates: [55.76183179120321, 37.643801396943395],
                description: 'Популярный парк и пруд в центре Москвы, историческое и культурное место отдыха горожан.' 
            },
            { name: 'Большой театр', coordinates: [55.760008474777884, 37.618679686568065],
                description: 'Известный оперный и балетный театр, один из символов российской культуры.' 
            },
            { name: 'ГУМ', coordinates: [55.7547675354506, 37.621331629534495],
                description: 'Главный универмаг Москвы, расположенный на Красной площади, памятник архитектуры.' 
            },
            { name: 'Красная площадь', coordinates: [55.75394383772985, 37.620776351055728],
                description: 'Исторический центр Москвы, всемирно известная площадь и символ России.' 
            },
            { name: 'Храм Василия Блаженного', coordinates: [55.75261040717146, 37.6230299086259],
                description: 'Иконический православный храм, расположенный на Красной площади, памятник архитектуры XVI века.' 
            },
            { name: 'Парк Зарядье', coordinates: [55.75144214708164, 37.62877813716473],
                description: 'Современный парк в центре Москвы с инновационными пространствами и архитектурой.' 
            },
            { name: 'Парящий мост', coordinates: [55.74946469197854, 37.62946713579662],
                description: 'Уникальная архитектурная конструкция, смотровая площадка над Москвой-рекой в парке Зарядье.' 
            },
            { name: 'Патриарший мост', coordinates: [55.743410651134845, 37.60844737917068],
                description: 'Мост с видом на Храм Христа Спасителя и историческую часть Москвы.' 
            },
            { name: 'Храм Христа Спасителя', coordinates: [55.744620911939165, 37.605495464539416],
                description: 'Крупнейший православный храм России, место проведения значимых церковных событий.' 
            },
        ]
    },
    {
        name: 'Санкт-Петербург',
        coordinates: [59.93358987179147, 30.333005471591424],
        description: 'второй по численности населения город России. Город федерального значения. Административный центр Северо-Западного федерального округа. Основан 16 (27) мая 1703 года царём Петром I. В 1714—1728 и 1732—1918 годах — столица Российского государства. Назван в честь святого Петра — небесного покровителя царя-основателя, но со временем стал всё больше ассоциироваться с именем самого Петра I. Город исторически и культурно связан с рождением Российской империи и вхождением России в современную историю в роли европейской великой державы. Расположен на северо-западе страны на побережье Финского залива и в устье реки Невы. Граничит с Ленинградской областью, также имеет морские границы с Финляндией и Эстонией',
        landmarks: [
            { name: 'Музей Фаберже', coordinates: [59.93474559959557, 30.342828191900892],
                description: 'Музей, посвящённый искусству и знаменитым ювелирным яйцам фирмы Фаберже.' 
            },
            { name: 'Михайловский замок', coordinates: [59.93970482360478, 30.33824805745934],
                description: 'Архитектурный памятник и бывшая императорская резиденция.' 
            },
            { name: 'Русский музей, Михайловский дворец', coordinates: [59.938643342941496, 30.33225830942375],
                description: 'Главный музей русского изобразительного искусства.' 
            },
            { name: 'Спас на Крови', coordinates: [59.94032216773725, 30.328491342372264],
                description: 'Храм, построенный на месте убийства императора Александра II, шедевр архитектуры.' 
            },
            { name: 'Эрмитаж', coordinates: [59.939862137785724, 30.31451256382978],
                description: 'Один из крупнейших и старейших художественных музеев мира.' 
            },
            { name: 'Памятник "Медный всадник"', coordinates: [59.93641645642582, 30.302243925254693],
                description: 'Знаменитый памятник Петру Великому, основателю Санкт-Петербурга.' 
            },
            { name: 'Исаакиевский собор', coordinates: [59.933976442455545, 30.306507500237487],
                description: 'Крупнейший православный храм Санкт-Петербурга, один из символов города.' 
            },
            { name: 'Казанский собор', coordinates: [59.933716547519, 30.32344547873555],
                description: 'Кафедральный собор, памятник архитектуры и важное религиозное место.' 
            },
        ]
    },
    {
        name: 'Казань',
        coordinates: [55.774389025594274, 49.137613070999926],
        description: 'город в России, столица Республики Татарстан, порт на левом берегу реки Волги при впадении в неё реки Казанки. Крупнейший по численности населения город в Приволжском федеральном округе и на реке Волге, пятый по численности населения город в стране. Один из крупнейших экономических, научных, образовательных, религиозных, культурных и спортивных центров России. Казанский кремль и астрономические обсерватории Казанского федерального университета входят в число объектов Всемирного наследия ЮНЕСКО. Исторический центр Казанского ханства, Казанского уезда, Казанской губернии и Татарской АССР. Город имеет зарегистрированный бренд «Третья столица России». В 2005 году было отпраздновано тысячелетие Казани. Казань неоднократно принимала международные соревнования высокого уровня по различным видам спорта, в том числе XXVII Всемирную летнюю Универсиаду в 2013 году, а также ряд матчей чемпионата мира по футболу 2018 года.',
        landmarks: [
            { name: 'Набережная реки Казанки', coordinates: [55.80427407153581, 49.12011274002165],
                description: 'Популярное место для прогулок с живописными видами на город.' 
            },
            { name: 'Дворец земледельцев', coordinates: [55.80052603394393, 49.11187164002159],
                description: 'Архитектурный памятник, современное здание в историческом стиле.' 
            },
            { name: 'Казанский кремль', coordinates: [55.79971106724486, 49.105676668564584],
                description: 'Исторический центр города, объект Всемирного наследия ЮНЕСКО.' 
            },
            { name: 'Мечеть Кул-Шариф', coordinates: [55.79844997110231, 49.10525616122394],
                description: 'Одна из крупнейших мечетей России, расположенная на территории Казанского кремля.' 
            },
            { name: 'Парк Тысячелетия', coordinates: [55.78338987157061, 49.12359315940987],
                description: 'Современный парк, созданный в честь тысячелетия Казани.' 
            },
        ]
    },
    {
        name: 'Нижний Новгород',
        coordinates: [56.27320973833285, 44.038574942653526],
        description: 'город в центральной России, административный центр Приволжского федерального округа и Нижегородской области. Второй по численности населения город в Приволжском федеральном округе и на реке Волге, седьмой по численности населения город в стране. Основан по некоторым оценкам 4 (10) февраля 1221 года владимирским князем Юрием Всеволодовичем как пограничная крепость. Расположен в центре Восточно-Европейской равнины, на месте слияния Оки и Волги. Ока делит город на две части: на высоком правом берегу расположена нагорная на Дятловых горах, и заречная — на её левом низи́нном берегу. На левом берегу Волги расположен город-спутник Бор. В 1508—1515 годах был построен каменный кремль, который с тех пор ни разу не был взят противником.',
        landmarks: [
            { name: 'Нижегородский кремль', coordinates: [56.32855770431356, 44.00469622632109],
                description: 'Средневековая крепость, символ города и исторический центр.' 
            },
            { name: 'Чкаловская лестница', coordinates: [56.32523300798624, 44.007364214610225],
                description: 'Монументальная лестница, соединяющая Верхневолжскую набережную и речной порт.' 
            },
            { name: 'Большая Покровская улица', coordinates: [56.32648238037284, 44.004796911184664],
                description: 'Главная пешеходная улица города с множеством магазинов и ресторанов.' 
            },
            { name: 'Нижегородский государственный художественный музей', coordinates: [56.32979581798321, 44.00059942689216],
                description: 'Музей с коллекцией русского и западноевропейского искусства.' 
            },
            { name: 'Канатная дорога через Волгу', coordinates: [56.31176035378941, 44.02390017889562],
                description: 'Популярный способ насладиться видами города и Волги.' 
            },
            { name: 'Рождественская церковь', coordinates: [56.32021615644228, 44.00572266751231],
                description: 'Изящный православный храм с богатой архитектурой.' 
            }
        ]
    },
    {
        name: 'Владивосток',
        coordinates: [43.04959621932487, 131.84277324714847],
        description: 'крупный город и порт на юге Дальнего Востока России; политический, культурный, научно-образовательный и экономический центр региона; административный центр Приморского края, Владивостокского городского округа, а также с 13 декабря 2018 года центр Дальневосточного федерального округа. Расположен на полуострове Муравьёва-Амурского, городу подчинены 5 сельских населённых пунктов и острова в заливе Петра Великого Японского моря. Конечный пункт Транссибирской магистрали. Один из крупнейших морских портов Дальневосточного бассейна. Главная база Тихоокеанского флота.',
        landmarks: [
            { name: 'Русский мост', coordinates: [43.049888, 131.865322],
                description: 'Один из самых длинных вантовых мостов в мире, соединяющий Владивосток с островом Русский.' 
            },
            { name: 'Центральная площадь Владивостока', coordinates: [43.116324, 131.885555],
                description: 'Главная площадь города, место проведения массовых мероприятий и фестивалей.' 
            },
            { name: 'Подводная лодка С-56', coordinates: [43.112244, 131.883633],
                description: 'Музей на борту реальной подводной лодки, участвовавшей в Великой Отечественной войне.' 
            },
            { name: 'Набережная Цесаревича', coordinates: [43.111345, 131.877389],
                description: 'Популярное место для прогулок с красивым видом на бухту Золотой Рог.' 
            },
            { name: 'Золотой мост', coordinates: [43.121098, 131.878678],
                description: 'Вантовый мост через бухту Золотой Рог, символ современного Владивостока.' 
            },
            { name: 'Приморский океанариум', coordinates: [43.023212, 131.892675],
                description: 'Современный океанариум на острове Русский с уникальной коллекцией морских обитателей.' 
            },
            { name: 'Токаревский маяк', coordinates: [43.045556, 131.865528],
                description: 'Один из старейших маяков на Дальнем Востоке, расположенный на живописном мысе.' 
            },
            { name: 'Остров Русский', coordinates: [42.974991, 131.784512],
                description: 'Известен своими природными красотами, пляжами и современной инфраструктурой для отдыха.' 
            }
        ]
    },

    {
        name: 'Екатеринбург',
        coordinates: [56.8389, 60.6057],
        description: 'третий по площади и четвёртый по численности населения город-миллионер в России, административный центр Уральского федерального округа и Свердловской области. Образует муниципальное образование город Екатеринбург со статусом городского округа. Один из крупнейших экономических, научных, образовательных, религиозных, культурных и спортивных центров России. Расположен на восточном склоне Среднего Урала, по берегам реки Исеть (бассейн Иртыша) в её верхнем течении. Основан 7 ноября (18 ноября) 1723 года как железоделательный завод. При этом День города с 1987 года, по решению советских властей, отмечается в третью субботу августа. Многими считается, что имя городу дано в честь императрицы Екатерины I, однако в соответствии с православной традицией фактически город называется в честь святой Екатерины Александрийской, именем которой императрицу (урождённую Марту) крестили в православие. Ещё до указа Петра I об основании города при заводе была заложена церковь святой Екатерины в день именин императрицы 7 декабря 1723 года, и с тех пор православная церковь считает Екатерину Александрийскую покровительницей сначала завода-крепости, потом города. Статус уездного города Пермской губернии даровала Екатеринбургу императрица Екатерина II в 1781 году.',
        landmarks: [
            { name: 'Плотинка', coordinates: [56.83891221672564, 60.60337697160812],
                description: 'Историческая плотина на реке Исеть, сердце города.' 
            },
            { name: 'Храм-на-Крови', coordinates: [56.83900447672481, 60.610926539949464],
                description: 'Храм, построенный на месте гибели последней царской семьи Романовых.' 
            },
            { name: 'Ельцин Центр', coordinates: [56.83896873256153, 60.59721941318316],
                description: 'Современный музейно-образовательный центр, посвящённый первому президенту России Борису Ельцину.' 
            },
            { name: 'Высоцкий Бизнес-центр', coordinates: [56.83963217331374, 60.61313463119621],
                description: 'Высотное здание с панорамной площадкой, откуда открывается вид на Екатеринбург.' 
            },
            { name: 'Парк Маяковского', coordinates: [56.823164014949254, 60.60658890041614],
                description: 'Популярный городской парк для прогулок и семейного отдыха.' 
            },
            { name: 'Областной краеведческий музей', coordinates: [56.84001596476367, 60.60349224397045],
                description: 'Музей, рассказывающий об истории Урала и Екатеринбурга.' 
            }
        ]
    },
    {
        name: 'Новосибирск',
        coordinates: [55.0084, 82.9357],
        description: ' третий по численности населения город России, крупнейший город её азиатской части, административный центр Сибирского федерального округа, Новосибирской области и Новосибирского района (в состав последнего не входит), центр Западно-Сибирского экономического района. Город областного значения, образует муниципальное образование город Новосибирск со статусом городского округа. Место нахождения Полномочного представительства Президента РФ в Сибирском федеральном округе, президиума Сибирского отделения Российской академии наук, Пятого апелляционного суда общей юрисдикции и Кассационного военного суда Российской Федерации. Центр Новосибирской агломерации. Крупнейший торговый, деловой, культурный, транспортный, образовательный и научный центр Сибири. Основан в 1893 году, статус города получил 28 декабря 1903 (10 января 1904) года. Численность населения — 1 633 851 человек (2024 г.), благодаря чему он является самым многонаселённым городом азиатской части России и самым большим в России муниципальным образованием — городом без статуса субъекта Российской Федерации.',
        landmarks: [
            { name: 'Новосибирский государственный академический театр оперы и балета', coordinates: [55.03070779568926, 82.92352749785665],
                description: 'Самый большой театр в России, знаменит своей архитектурой и постановками.' 
            },
            { name: 'Первый мост через Обь', coordinates: [55.040380253616594, 82.92676555006792],
                description: 'Исторический железнодорожный мост, сыгравший ключевую роль в развитии города.' 
            },
            { name: 'Площадь Ленина', coordinates: [55.03094703496263, 82.92049882644412],
                description: 'Центральная площадь города, культурное и социальное сердце Новосибирска.' 
            },
            { name: 'Научный центр Академгородка', coordinates: [54.85130283543726, 83.10635976863273],
                description: 'Уникальный научно-исследовательский комплекс в Сибири.' 
            },
            { name: 'Новосибирский зоопарк', coordinates: [55.05221204910418, 82.9452844068821],
                description: 'Один из крупнейших зоопарков России с редкими видами животных.' 
            }
        ]
    },
    {
        name: 'Иркутск',
        coordinates: [52.2869, 104.3050],
        description: ' город в России, административный центр Иркутской области, образует Городской округ Иркутск. Население города — 606 369 (2024) человек; это шестой по численности населения город Сибири и двадцать пятый по численности населения город России. Расположен в Восточной Сибири, на берегах реки Ангары, при впадении в неё реки Иркут, в 66 км от Байкала. Климат резко континентальный, со значительными перепадами температур. Из-за близости к сейсмически активному Байкальскому рифту регулярны слабые землетрясения. Крупный научно-образовательный центр, в котором обучается свыше ста тысяч студентов. Среди отраслей промышленности: авиастроение, гидроэнергетика и производство продуктов питания. Транспортный узел на Транссибирской железнодорожной магистрали и федеральных автомагистралях «Байкал» и «Сибирь». Старинный сибирский город основан как острог в 1661 году. Сильно пострадал при пожаре 1716 года. Следующий крупный пожар 1879 года вызвал настолько сильные разрушения, что для полного восстановления города потребовалось более 10 лет.',
        landmarks: [
            { name: '130-й квартал', coordinates: [52.28170373130092, 104.29191917121907],
                description: 'Историко-архитектурный комплекс с восстановленными деревянными домами, ресторанами и магазинами.' 
            },
            { name: 'Казанская церковь', coordinates: [52.28620238000941, 104.30617076099499],
                description: 'Красивая православная церковь с яркими куполами и богатым внутренним убранством.' 
            },
            { name: 'Иркутский краеведческий музей', coordinates: [52.28412314493286, 104.28060564857296],
                description: 'Один из старейших музеев Сибири с коллекцией, рассказывающей об истории региона.' 
            },
            { name: 'Памятник Александру III', coordinates: [52.289485579929655, 104.28932191505487],
                description: 'Монумент в честь императора, инициатора строительства Транссибирской магистрали.' 
            },
            { name: 'Набережная Ангары', coordinates: [52.28848454048988, 104.28713471515387],
                description: 'Живописная набережная с видами на реку и прогулочными зонами.' 
            },
            { name: 'Тальцы', coordinates: [52.717949049843416, 104.28713471515387],
                description: 'Музей деревянного зодчества под открытым небом неподалеку от Байкала.' 
            },
            { name: 'Озеро Байкал', coordinates: [53.23424467337227, 107.36420411856916],
                description: 'Самое глубокое озеро в мире, природное чудо, привлекающее туристов со всего мира.' 
            }
        ]
    },
    {
        name: 'Петрозаводск',
        coordinates: [61.7891, 34.3596],
        description: ' город республиканского значения на северо-западе России на берегу Онежского озера; столица[8][9] Республики Карелия, образующая Петрозаводский городской округ (карел. Petroskoin linnupiiri, фин. Petroskoin kaupunkipiiri). 6 апреля 2015 года городу было присвоено почётное звание Российской Федерации «Город воинской славы».',
        landmarks: [
            { name: 'Онежская набережная', coordinates: [61.78418714768564, 34.369634595776215],
                description: 'Живописная набережная с уникальными скульптурами и видом на Онежское озеро.' 
            },
            { name: 'Национальный музей Республики Карелия', coordinates: [61.78599021794767, 34.36147210092058],
                description: 'Музей, представляющий историю и культуру Карелии.' 
            },
            { name: 'Памятник Петру I', coordinates: [61.7875119144359, 34.36118973142113],
                description: 'Памятник основателю города, установленный на Онежской набережной.' 
            },
            { name: 'Карельский государственный краеведческий музей', coordinates: [61.78673587443079, 34.36320546122588],
                description: 'Музей с богатой коллекцией артефактов Карелии.' 
            },
            { name: 'Музей-заповедник «Кижи»', coordinates: [62.066104563328004, 35.22371663362391],
                description: 'Всемирно известный музей деревянного зодчества под открытым небом, объект ЮНЕСКО.' 
            },
            { name: 'Губернаторский сад', coordinates: [61.78922328497545, 34.35954875596463],
                description: 'Уютный парк в центре города, популярное место отдыха.' 
            },
            { name: 'Река Лососинка', coordinates: [61.78977464588974, 34.33587215825255],
                description: 'Природная достопримечательность, пересекающая Петрозаводск, с прогулочными тропами.' 
            }
        ]
    },
    {
        name: 'Архангельск',
        coordinates: [64.5399, 40.5152],
        description: 'Архангельск — крупный портовый город на севере России, расположенный на берегах Северной Двины. Город славится своим деревянным зодчеством, историей поморских традиций и живописными пейзажами Белого моря.',
        landmarks: [
            { name: 'Памятник Ломоносову', coordinates: [64.5408, 40.5167], 
                description: 'Памятник великому учёному Михаилу Ломоносову, уроженцу Архангельской области.' 
            },
            { name: 'Набережная Северной Двины', coordinates: [64.5393, 40.5171], 
                description: 'Живописная набережная с видами на реку Северная Двина.' 
            },
            { name: 'Кенозерский национальный парк', coordinates: [64.5673, 40.5906], 
                description: 'Уникальный заповедник с разнообразной флорой и фауной, где сохранились древние церкви и часовни.' 
            },
            { name: 'Музей деревянного зодчества', coordinates: [64.5404, 40.5181], 
                 description: 'Один из крупнейших музеев деревянного зодчества в России, где можно увидеть уникальные памятники архитектуры.' 
            },
            { name: 'Архангельский театр драмы', coordinates: [64.5375, 40.5129], 
                description: 'Культурное сердце города, где проходят спектакли и театральные постановки.' 
            }
        ]
    },
    {
        name: 'Сыктывкар',
        coordinates: [61.6680, 50.8357],
        description: 'Сыктывкар — столица Республики Коми, известная своим культурным и историческим наследием, а также живописной природой региона.',
        landmarks: [
            { name: 'Национальный музей Республики Коми', coordinates: [61.6678, 50.8313], 
                description: 'Основной музей Республики Коми, где представлены экспонаты об истории, культуре и природе региона.' 
            },
            { name: 'Театр оперы и балета Республики Коми', coordinates: [61.6675, 50.8397], 
                description: 'Крупный центр оперного и балетного искусства в Коми.' 
            },
            { name: 'Памятник Ленину', coordinates: [61.6682, 50.8369], 
                description: 'Исторический памятник, расположенный в центре города.'
            },
            { name: 'Городская площадь', coordinates: [61.6680, 50.8380],
                description: 'Основное место проведения массовых мероприятий и праздников.' 
            },
            { name: 'Свято-Стефановский кафедральный собор', coordinates: [61.6690, 50.8350], 
                description: 'Главный храм города, выполненный в традиционном русском стиле.'
            }
        ]
    },
    {
        name: 'Мурманск',
        coordinates: [68.9730, 33.0864],
        description: 'Мурманск — крупнейший город за Полярным кругом, важный порт и центр арктической культуры.',
        landmarks: [
            { name: 'Алёша — памятник защитникам Заполярья', coordinates: [68.9792, 33.0833], 
                description: 'Монумент героям Великой Отечественной войны, ставший символом города.' 
            },
            { name: 'Мурманский морской вокзал', coordinates: [68.9716, 33.0844], 
                description: 'Историческое здание вокзала, откуда отправляются рейсы по Арктике.' 
            },
            { name: 'Арктическая выставка', coordinates: [68.9729, 33.0866],
                description: 'Музей, рассказывающий об уникальной природе и культуре Арктики.'
            },
            { name: 'Северное сияние парк', coordinates: [68.9751, 33.0892],
                description: 'Парк, где можно насладиться арктической природой и, при удаче, увидеть северное сияние.' 
            },
            { name: 'Музей ледокола Ленин', coordinates: [68.9736, 33.0912], 
                description: 'Первый атомный ледокол, превращённый в музей.'
            }
        ]
    },
    {
        name: 'Новокузнецк',
        coordinates: [53.7596, 87.1216],
        description: 'Новокузнецк — промышленный центр Сибири, богатый культурными и историческими достопримечательностями.',
        landmarks: [
            { name: 'Кузнецкая крепость', coordinates: [53.7615, 87.1092], 
                description: 'Историческая крепость, построенная в XIX веке, одна из главных достопримечательностей города.'
            },
            { name: 'Новокузнецкий драматический театр', coordinates: [53.7558, 87.1246],
                description: 'Культурный центр города с богатой историей.' 
            },
            { name: 'Музей-заповедник "Кузнецкий Алатау"', coordinates: [53.7522, 87.1025], 
                description: 'Природный заповедник с уникальными пейзажами.' 
            },
            { name: 'Площадь Побед', coordinates: [53.7592, 87.1212], 
                description: 'Главная площадь города, место проведения мероприятий.' 
            },
            { name: 'Парк Гагарина', coordinates: [53.7591, 87.1274], 
                description: 'Популярное место отдыха горожан.' 
            }
        ]
    },
    {
        name: 'Якутск',
        coordinates: [62.04040562742643, 129.73365229954706],
        description: 'Якутск — столица Республики Саха (Якутия), известная своими суровыми зимами и богатой культурой.',
        landmarks: [
            { name: 'Музей мамонта', coordinates: [62.0170, 129.7045], 
                description: 'Уникальный музей с экспонатами о мамонтах и древних животных.' 
            },
            { name: 'Площадь Ленина', coordinates: [62.0272, 129.7321], 
                description: 'Центральная площадь города.' 
            },
            { name: 'Национальный художественный музей', coordinates: [62.0258, 129.7319],
                description: 'Крупнейший художественный музей региона.'
            },
            { name: 'Царство вечной мерзлоты', coordinates: [62.0331, 129.7435], 
                description: 'Туристический комплекс с подземными ледяными экспозициями.' 
            },
            { name: 'Краеведческий музей', coordinates: [62.0243, 129.7287], 
                description: 'Музей с богатой коллекцией об истории и природе Якутии.' 
            }
        ]
    },
    {
        name: 'Волгоград',
        coordinates: [48.71796657307283, 44.50627963243695],
        description: 'Волгоград — город-герой, известный своей историей и символами Великой Отечественной войны.',
        landmarks: [
            { name: 'Мамаев Курган', coordinates: [48.7424, 44.5378],
                description: 'Историческое место битвы за Сталинград.' 
            },
            { name: 'Родина-Мать зовёт!', coordinates: [48.7424, 44.5366], 
                description: 'Одна из самых высоких статуй в мире.' 
            },
            { name: 'Панорама Сталинградской битвы', coordinates: [48.7194, 44.5132], 
                description: 'Музей с панорамным изображением сражения.' 
            },
            { name: 'Царицынская опера', coordinates: [48.7237, 44.5156],
                description: 'Оперный театр в Волгограде.' 
            },
            { name: 'Набережная Волгограда', coordinates: [48.7073, 44.5161],
                description: 'Прекрасное место для прогулок.' 
            }
        ]
    },
    {
        name: 'Ростов-на-Дону',
        coordinates: [47.21007756797204, 39.71512331685644],
        description: 'Ростов-на-Дону — крупнейший город юга России, известный своей набережной и культурным многообразием.',
        landmarks: [
            { name: 'Ростовский государственный музыкальный театр', coordinates: [47.2333, 39.7159],
                description: 'Один из ведущих музыкальных театров России.' 
            },
            { name: 'Набережная реки Дон', coordinates: [47.2173, 39.7132],
                description: 'Популярное место отдыха с видами на реку Дон.' 
            },
            { name: 'Собор Рождества Пресвятой Богородицы', coordinates: [47.2210, 39.7104],
                description: 'Исторический храм в центре города.' 
            },
            { name: 'Центральный рынок', coordinates: [47.2226, 39.7057],
                description: 'Одно из самых колоритных мест Ростова.' 
            },
            { name: 'Парк Революции', coordinates: [47.2201, 39.7175],
                description: 'Исторический парк с памятниками и местами отдыха.' 
            }
        ]
    }
    ];
cities.forEach(city => {
    const cityMarker = L.marker(city.coordinates).addTo(map);
    cityMarker.bindPopup(`<b>${city.name}</b>`);

    const landmarkCoordinates = city.landmarks.map(l => l.coordinates);
    const polyline = L.polyline(landmarkCoordinates, { color: 'blue' }).addTo(map);
    polyline.bindPopup(`Примерный маршрут по городу "${city.name}"`);

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