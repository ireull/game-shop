import { createSlice } from "@reduxjs/toolkit";

const gamesSlice = createSlice({
  name: 'cart',
  initialState: {
    currentGame: null,
    allGames: [
      {
        image: '/img/forza_5.jpeg',
        title: 'Forza Horizon 5',
        genres: ['Гонки', 'Симулятор', 'Открытый мир'],
        price: 2399,
        video: 'https://www.youtube.com/embed/FYH9n37B7Yw',
        preview: true,
        id: 1,
        description:
          'Bac ждёт бесконечный калейдоскоп приключений Horizon! Совершайте увлекательные поездки по невероятно красивому и самобытному миру Мексики за рулём величайших автомобилей в истории. Начните своё приключение Horizon уже сегодня, добавив игру в свой список желаний!',
      },
      {
        image: '/img/battlefield_2042.jpg',
        title: 'Battlefield 2042',
        genres: ['Экшен', 'Шутер', 'Война'],
        video: 'https://www.youtube.com/embed/ASzOzrB-a9E',
        price: 1999,
        preview: true,
        id: 2,
        description:
          'Battlefield™ 2042 — это шутер от первого лица, в котором серия возвращается к легендарным масштабным сражениям. B будущем, где царит xaoc, адаптируйтесь и процветайте на постоянно меняющихся полях боя благодаря своему отряду и арсеналу новейших технологий.',
      },
      {
        image: '/img/life_is_strange_true_colors.jpeg',
        title: 'Life is Strange True Colors',
        genres: ['Глубокий сюжет', 'Протагонистка'],
        video: 'https://www.youtube.com/embed/b6CkzwVAr0M',
        price: 1699,
        preview: true,
        id: 3,
        description:
          'Алекс Чэнь от всех скрывает своё «проклятие» — сверхъестественную способность считывать сильные эмоции других и влиять на них. Однажды, когда её брат погибает — якобы в результате несчастного случая, — Алекс использует её, чтобы узнать правду.',
      },
      {
        image: '/img/gta_v.jpeg',
        title: 'Grand Theft Auto V',
        genres: ['Открытый мир', 'Экшен'],
        video: 'https://www.youtube.com/embed/QkkoHAzjnUs',
        price: 999,
        preview: true,
        id: 4,
        description:
          'Grand Theft Auto V для PC позволяет игрокам исследовать знаменитый мир Лос-Сантоса и округа Блэйн в разрешении до 4k и выше c частотой 60 кадров в секунду.',
      },
      {
        image: '/img/rainbow_siege.jpeg',
        title: "Tom Clancy's Rainbow Six® Siege",
        video: 'https://www.youtube.com/embed/6wlvYh0h63k',
        genres: ['Тактика', 'Шутер'],
        price: 1199,
        preview: true,
        id: 5,
        description:
          'Tom Clancys Rainbow Six Осада - это продолжение нашумевшего шутера от первого лица, разработанного студией Ubisoft Montreal.',
      },
      {
        image: '/img/assassins_creed_valhalla.png',
        title: "Assassin's Creed Valhalla",
        genres: ['Паркур', 'РПГ', 'Открытый мир'],
        video: 'https://www.youtube.com/embed/ssrNcwxALS4',
        price: 2999,
        preview: false,
        id: 6,
        description:
          "Assassin's Creed Valhalla — мультиплатформенная компьютерная игра в жанре action/RPG, разработанная студией Ubisoft Montreal под издательством компании Ubisoft. Является двенадцатой игрой в серии игр Assassin's Creed.",
      },
      {
        image: '/img/witcher_3_wild_hunt.jpg',
        title: 'The Witcher 3: Wild Hunt',
        genres: ['РПГ', 'Открытый мир', 'Глубокий сюжет'],
        video: 'https://www.youtube.com/embed/c0i88t0Kacs',
        price: 3000,
        preview: false,
        id: 7,
        description:
          'The Witcher 3: Wild Hunt - компьютерная ролевая игра по мотивам серии романов «Ведьмак» польского писателя Анджея Сапковского, продолжение игр «Ведьмак» и «Ведьмак 2: Убийцы королей». Заключительная часть трилогии. Игроку вновь отводится роль Геральта, ведьмака, убивающего монстров.',
      },
      {
        image: '/img/dayz.jpg',
        title: 'DayZ',
        genres: ['Выживание', 'Открытый мир', 'Зомби'],
        video: 'https://www.youtube.com/embed/7jk8prJA9nI',
        price: 1499,
        preview: false,
        id: 8,
        description:
          'Как долго вы сможете выжить в пост-апокалипсисе? Мир пал под натиском зараженных. Боритесь против других выживших за ограниченные ресурсы. Сможете ли вы работать сообща c незнакомцами? Или станете волком-одиночкой? Это ваша история, это DayZ.',
      },
      {
        image: '/img/elden_ring.jpg',
        title: 'ELDEN RING',
        genres: ['РПГ', 'Открытый мир'],
        video: 'https://www.youtube.com/embed/E3Huy2cdih0',
        price: 3999,
        preview: false,
        id: 9,
        description:
          'НОВЫЙ ФЭНТЕЗИЙНЫЙ РОЛЕВОЙ БОЕВИК. Восстань, погасшая душа! Междуземье ждёт своего повелителя. Пусть благодать приведёт тебя к Кольцу Элден.',
      },
      {
        image: '/img/cyberpunk_2077.jpg',
        title: 'Cyberpunk 2077',
        genres: ['РПГ', 'Открытый мир', 'Глубокий сюжет'],
        video: 'https://www.youtube.com/embed/8X2kIfS6fb8',
        price: 2499,
        preview: false,
        id: 10,
        description:
          'Cyberpunk 2077 — приключенческая ролевая игра c открытым миром, действие которой происходит в футуристическом мегаполисе Найт-Сити, где выше всего ценятся власть, роскошь и модификации тела.',
      },
    ]
  },
  reducers: {
    setCurrentGame: (state, action) => {
      state.currentGame = action.payload
    },

  }
})

export const { setCurrentGame, } = gamesSlice.actions;
export default gamesSlice.reducer