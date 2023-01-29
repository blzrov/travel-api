База монго: 
Users
[{
  "_id": {
    "$oid": "63d2024a4388e0c2806dde41"
  },
  "name": "Максим",
  "surname": "Савков",
  "login": "savkov",
  "birth": "2002-01-29T04:30:53.000Z",
  "sex": "male",
  "num": "89220971260",
  "id": 10,
  "region": "Свердловская обл",
  "password": "savkov",
  "favorites": [],
  "about": "Dungeon master, perfomance artist",
  "travels": []
},{
  "_id": {
    "$oid": "63d20a474388e0c2806dde45"
  },
  "name": "Артур",
  "surname": "Гаскаров",
  "login": "gaskarov",
  "birth": "2001-06-08T04:03:49.000Z",
  "sex": "other",
  "num": "89122721715",
  "id": 11,
  "region": "Свердловская обл",
  "password": "savkov1",
  "favorites": [
    27
  ],
  "about": "Люблю короткие узкие лесные дорожки",
  "travels": [
    32,
    29,
    28
  ]
},{
  "_id": {
    "$oid": "63d210154388e0c2806dde48"
  },
  "name": "Андрей",
  "surname": "Вовк",
  "login": "vovk",
  "birth": "2000-12-15T05:30:18.000Z",
  "sex": "male",
  "num": "88005553535",
  "id": 12,
  "region": "Омская обл",
  "password": "savkov2",
  "favorites": [],
  "about": "Увлекаюсь путешествиями по горной местности",
  "travels": [
    27,
    28
  ]
}]


Travels

[{
  "_id": {
    "$oid": "63d204464388e0c2806dde42"
  },
  "name": "Зима на Сахалине",
  "region": "Сахалинская обл",
  "place": "Остров Сахалин",
  "placeDescription": "Уникальное путешествие на Сахалин",
  "organizer": "savkov",
  "organizer_Id": "Нужно получить id пользователя",
  "guide": "savkov",
  "id": 27,
  "start": {
    "$date": {
      "$numberLong": "1677092400000"
    }
  },
  "finish": {
    "$date": {
      "$numberLong": "1677610800000"
    }
  },
  "countday": 6,
  "description": "Рождество, 23 февраля или 8 марта – любой из этих праздников отличный повод подарить себе уникальное зимнее путешествие на Сахалин! Здесь можно покорить горы, вдохнуть океан и попробовать на вкус все его дары, узнать богатое историческое прошлое и, конечно, уйти от проблем больших городов.",
  "cost": 30000,
  "status": "open",
  "seats": 6,
  "items": [
    "Рюкзак",
    "Тёплая одежда для активного отдыха",
    "Купальник",
    "Средства личной гигиены",
    "Документы и деньги"
  ],
  "seatsIsTaken": 1,
  "canJoin": true,
  "media": [
    {
      "info": "Гастрономические изыски",
      "url": "https://i.bolshayastrana.com/1200x00/33/ae/33ae0f1c14d3436bb08c3e5ab7853b24.jpeg"
    },
    {
      "info": "Ледопады бухты Тихая",
      "url": "https://i.bolshayastrana.com/1200x00/c7/f0/c7f0d757ccc7a405a2780ee9759c408b.jpeg"
    },
    {
      "info": "Снегоходный восторг",
      "url": "https://i.bolshayastrana.com/1200x00/ef/cc/efccf794f61191725139e91b1e5e4060.jpeg"
    },
    {
      "info": "Горнолыжный курорт",
      "url": "https://i.bolshayastrana.com/1200x00/14/31/1431453f47b45b9b1f776419b4e6783f.jpeg"
    }
  ],
  "members": [
    {
      "login": "vovk"
    }
  ],
  "reviews": []
},{
  "_id": {
    "$oid": "63d2068d4388e0c2806dde43"
  },
  "name": "Поход вокруг Толбачика",
  "region": "Камчатский край",
  "place": "Камчатка",
  "placeDescription": "Камчатка — это рай для настоящих туристов и искателей приключений.",
  "organizer": "savkov",
  "organizer_Id": "Нужно получить id пользователя",
  "guide": "savkov",
  "id": 28,
  "start": {
    "$date": {
      "$numberLong": "1688929200000"
    }
  },
  "finish": {
    "$date": {
      "$numberLong": "1689879600000"
    }
  },
  "countday": 11,
  "description": "Камчатку иногда называют «край географии», а в советские времена название этого полуострова, одного из крупнейших в стране, прочно закреплялось за последними партами в школьных классах. Над учениками, занимавшими там свои места, даже подшучивали: «Сидит на Камчатке». Действительно, эта земля ассоциируется с такими понятиями, как «дальний», «удаленный» и так далее. Однако сегодня Камчатка, несомненно, стала намного ближе, чем когда бы то ни было. И все благодаря активному развитию туристической инфраструктуры края. Чего вам здесь только не предложат для полноценного отдыха: это и насыщенные экскурсионные программы, и эксклюзивные туры с охотой и рыбной ловлей, подводным спортом, круизами по знаменитой Авачинской бухте, не говоря уже о конных и орнитологические путешествиях и, конечно, лечебно-оздоровительном и культурно-этнографическом туризме. Также стоит упомянуть снегоходные и вертолетные туры, но и это еще будет далеко не полный перечень.\nКамчатка – это край первозданной природы, поэтому неудивительно, что здесь находится целых 3 государственных заповедника, 5 природных парков, 19 заказников, которые тоже охраняются государством, и 169 других уникальных природных объектов. Охраняемыми являются в общей сложности 18% территории этого отдаленного, во многом сурового, но такого манящего края. Так, в список Всемирного наследия ЮНЕСКО включены 6 особо охраняемых местных природных объектов, объединенных общим названием «Вулканы Камчатки». Но при этом никакая статистика, даже самая впечатляющая, не заменит собой те незабываемые чувства и эмоции, которые ждут каждого, кто хотя бы единожды ступит на эту землю. Мы говорим сегодня всем и каждому: добро пожаловать на Камчатку!",
  "cost": 39000,
  "status": "open",
  "seats": 11,
  "items": [
    "Рюкзак",
    "Походная одежда",
    "Банные принадлежности",
    "Средства от комаров",
    "Дождевик",
    "Документы"
  ],
  "seatsIsTaken": 2,
  "canJoin": true,
  "media": [
    {
      "info": "Вид с плоского Толбачика",
      "url": "https://static.tildacdn.com/tild3164-3533-4635-a663-633536616664/15-DSC02491.jpg"
    },
    {
      "info": "Мёртвый лес оживает",
      "url": "https://thumb.tildacdn.com/tild3533-6663-4761-b130-656230653331/-/format/webp/11-IMG-20150829-WA00.jpg"
    },
    {
      "info": "Восхождение на вулкан Безымянный",
      "url": "https://thumb.tildacdn.com/tild6639-6330-4364-b533-333138333338/-/format/webp/37DSC02214.jpg"
    },
    {
      "info": "Вулкан Крестовский",
      "url": "https://thumb.tildacdn.com/tild3138-3033-4235-b762-303163643764/-/format/webp/42DSC02766.JPG"
    },
    {
      "info": "Суслики Еврашки",
      "url": "https://thumb.tildacdn.com/tild3236-3332-4432-b736-626430656263/-/format/webp/35DSC02067.jpg"
    }
  ],
  "members": [
    {
      "login": "gaskarov"
    },
    {
      "login": "vovk"
    }
  ],
  "reviews": []
},{
  "_id": {
    "$oid": "63d208da4388e0c2806dde44"
  },
  "name": "В гостях у Кухта",
  "region": "Камчатский край",
  "place": "Камчатка",
  "placeDescription": "В гостях у Кутха. Комбинированный тур на Камчатке",
  "organizer": "savkov",
  "organizer_Id": "Нужно получить id пользователя",
  "guide": "savkov",
  "id": 29,
  "start": {
    "$date": {
      "$numberLong": "1689102000000"
    }
  },
  "finish": {
    "$date": {
      "$numberLong": "1689706800000"
    }
  },
  "countday": 7,
  "description": "В этом туре вас ждут самые интересные локации, которые непременно стоит поселить, прилетая на Камчатку. Джип-тур на Дачные термальные источники, этно-программа в корякском стойбище «Эйвет», «Черный пляж» на берегу Тихого океана и морская прогулка в бухту «Русская». В путешествии вы сможете полетать на вертолете, попробовать местные деликатесы в ресторане, а если повезет, то увидеть косаток и китов.",
  "cost": 47000,
  "status": "open",
  "seats": 14,
  "items": [
    "Рюкзак",
    "Одежда",
    "Банные принадлежности",
    "Средство от комаров",
    "Аптечка",
    "Документы"
  ],
  "seatsIsTaken": 1,
  "canJoin": true,
  "media": [
    {
      "info": "Посетим разные части острова и увидим разные локации",
      "url": "https://icdn.bolshayastrana.com/1200x00/6b/54/6b549372bbea084c0b233b4ec7755665.jpeg"
    },
    {
      "info": "Искупаемся в целебных источниках с разными минеральными составами",
      "url": "https://icdn.bolshayastrana.com/1200x00/63/51/635141631feeaf6fe8789b478bbd8fff.jpeg"
    },
    {
      "info": "Увидим огнедышащего стража города – Авачинский вулкан",
      "url": "https://icdn.bolshayastrana.com/1200x00/e9/51/e951dcb94cce23dff65595efa060a924.jpeg"
    },
    {
      "info": "Вертолетная экскурсия или сплав по реке с рыбалкой",
      "url": "https://icdn.bolshayastrana.com/1200x00/a0/16/a0162e130ea2d3f93bb19b231e06888b.jpeg"
    },
    {
      "info": "Поездка на внедорожниках",
      "url": "https://icdn.bolshayastrana.com/1200x00/c8/4a/c84a354f5c34fc132c1a4e8c76ff90bf.jpeg"
    }
  ],
  "members": [
    {
      "login": "gaskarov"
    }
  ],
  "reviews": []
},{
  "_id": {
    "$oid": "63d20c914388e0c2806dde46"
  },
  "name": "Зимний этно-тур по Адыгее",
  "region": "Респ Адыгея",
  "place": "Республика Адыгея",
  "placeDescription": "Адыгея - познакомит с обычаями адыгов и увидеть очаровательную природу Кавказа",
  "organizer": "gaskarov",
  "organizer_Id": "Нужно получить id пользователя",
  "guide": "gaskarov",
  "id": 30,
  "start": {
    "$date": {
      "$numberLong": "1674673200000"
    }
  },
  "finish": {
    "$date": {
      "$numberLong": "1675537200000"
    }
  },
  "countday": 10,
  "description": "Каждый регион неотрывно связан с народом, история которого происходила на его территории. Именно здесь, в Адыгее, зарождались и до сих пор передаются красивейшие обычаи адыгов, национальный этикет, тонкости адыгской кухни и настоящая любовь к Родине. Традиционное гостеприимство и очарование природы Кавказа покорит ваши сердца и влюбит в Адыгею без сомнения!",
  "cost": 40000,
  "status": "open",
  "seats": 15,
  "items": [
    "Рюкзак",
    "Спортивная одежда",
    "Ветрозащитная куртка",
    "Шапка",
    "Перчатки",
    "Аптечка",
    "Деньги и документы"
  ],
  "seatsIsTaken": 0,
  "canJoin": true,
  "media": [
    {
      "info": "Понаблюдаем за течение реки Белая, движущейся между каменными скалами",
      "url": "https://icdn.bolshayastrana.com/1200x00/67/1a/671ad455e0e399abf01e37eb89873648.jpeg"
    },
    {
      "info": "Полакомимся вкуснейшими сырами и национальной кухней Адыгеи",
      "url": "https://icdn.bolshayastrana.com/1200x00/ea/90/ea9058dc1960cefa9e88938743e49cc2.jpeg"
    },
    {
      "info": "Прогуляемся в природном парке Лаго-Наки, насладимся свежим горным воздухом",
      "url": "https://icdn.bolshayastrana.com/1200x00/23/14/2314d19b03e11fa52efbbbb28dc8c654.jpeg"
    }
  ],
  "members": [],
  "reviews": []
},{
  "_id": {
    "$oid": "63d20ef94388e0c2806dde47"
  },
  "name": "Вокруг Байкала на джипах и внедорожниках",
  "region": "Респ Бурятия",
  "place": "Байкал, Бурятия, Дальний Восток",
  "placeDescription": "Самый насыщенный тур по льду Байкала",
  "organizer": "gaskarov",
  "organizer_Id": "Нужно получить id пользователя",
  "guide": "gaskarov",
  "id": 31,
  "start": {
    "$date": {
      "$numberLong": "1674500400000"
    }
  },
  "finish": {
    "$date": {
      "$numberLong": "1676746800000"
    }
  },
  "countday": 26,
  "description": "Самый насыщенный тур по льду Байкала! Изумительное путешествие, которое свяжет восточный и западный берега заледеневшего Байкала, подарит Вам незабываемые впечатления, очарует красотой пейзажей и позволит насладиться чистым воздухом и простором.",
  "cost": 87000,
  "status": "open",
  "seats": 15,
  "items": [
    "Рюкзак",
    "Спальник",
    "Одежда",
    "Фотоаппарат",
    "Билеты",
    "Документы"
  ],
  "seatsIsTaken": 0,
  "canJoin": true,
  "media": [
    {
      "info": "Прокатимся на джипах, хивусе, снегоходах и собачьих упряжках, а возможно и на аэроботах или аэролодках",
      "url": "https://icdn.bolshayastrana.com/1200x00/02/c0/02c015e7bb17e39b7d9cd19f54c8dd20.jpeg"
    },
    {
      "info": "Сделаем шикарные фото гротов, пещер, ледяных торосов и сталактитов",
      "url": "https://icdn.bolshayastrana.com/1200x00/6b/e0/6be0a15c1b32b07307726b0aae397959.jpeg"
    },
    {
      "info": "Порыбачим на омуля и хариуса",
      "url": "https://icdn.bolshayastrana.com/1200x00/a1/6a/a16ae31a5b01cd046a710f82b1152a7e.jpeg"
    }
  ],
  "members": [],
  "reviews": []
},{
  "_id": {
    "$oid": "63d213fc9cf2f164faf62822"
  },
  "name": "Поход по Уктусу",
  "region": "Свердловская обл",
  "place": "горы Уктуса",
  "placeDescription": "Присоединитесь к увлекательной вылазке по горам Уктуса",
  "organizer": "vovk",
  "organizer_Id": "Нужно получить id пользователя",
  "guide": "vovk",
  "id": 32,
  "start": {
    "$date": {
      "$numberLong": "1660330800000"
    }
  },
  "finish": {
    "$date": {
      "$numberLong": "1660503600000"
    }
  },
  "countday": 2,
  "description": "Путешествие по горам Уктуса",
  "cost": 1500,
  "status": "closed",
  "seats": 3,
  "items": [
    "Спальник и палатка"
  ],
  "seatsIsTaken": 1,
  "canJoin": false,
  "media": [
    {
      "info": "горы Уктуса",
      "url": "https://sun9-37.userapi.com/impg/6q-c1Ljadp-cP2Zx-iTrJt2K3HVFWgqbh1mEvA/xMXo5qPJcZQ.jpg?size=1200x654&quality=96&sign=c1e051e44a75fe4bb5b9ec80c54dd103&type=album"
    }
  ],
  "members": [
    {
      "login": "gaskarov"
    }
  ],
  "reviews": [
    {
      "name": "Артур",
      "surname": "Гаскаров",
      "reviews": "Участвовал один на выходные, очень понравилось, красивые пейзажи. Для новичков самое то!"
    }
  ]
},{
  "_id": {
    "$oid": "63d215f6d8dac294bd60e7fe"
  },
  "name": "Вылазка на озеро Окунёвое ",
  "region": "Мурманская обл",
  "place": "озеро Окунёвое",
  "placeDescription": "Зимняя вылазка на озеро Окунёвое",
  "organizer": "vovk",
  "organizer_Id": "Нужно получить id пользователя",
  "guide": "vovk",
  "id": 33,
  "start": {
    "$date": {
      "$numberLong": "1670612400000"
    }
  },
  "finish": {
    "$date": {
      "$numberLong": "1670698800000"
    }
  },
  "countday": 1,
  "description": "Двухдневная вылазка на озеро Окунёвое для отдыха и рыбалки",
  "cost": 1000,
  "status": "closed",
  "seats": 2,
  "items": [
    "Тёплая палатка",
    "Рыболовные снасти",
    "Провизия"
  ],
  "seatsIsTaken": 0,
  "canJoin": false,
  "media": [
    {
      "info": "Озеро Окунёвое",
      "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Озеро_Окуневое_%28г._Мурманск%29.jpg/1200px-Озеро_Окуневое_%28г._Мурманск%29.jpg"
    }
  ],
  "members": [],
  "reviews": []
}]