const vegeData COPY = [
    {
        id: 0,
        name: 'None',
        family: '',
        companions: [],
        antagonists: [],
        tips: ''
    },
    {
        id: 1,
        name: 'Lettuce',
        family: 'Greens',
        companions: [
            'Mint',
            'Bean',
            'Beet',
            'Carrot',
            'Maize',
            'Marigold',
            'Onions',
            'Pea',
            'Radish',
            'Strawberry'
        ],
        antagonists: [
            'Parsley'
        ],
        tips: 'Mint repels slugs, which feed on lettuce.',

    },
    {
        id: 2,
        name: 'Spinach',
        family: 'Greens',
        companions: [
            'Bean',
            'Lettuce',
            'Pea',
            'Strawberry'
        ],
        antagonists: [
            'Potato'
        ],
        tips: 'Beans & peas provide shade for spinach.'
    },
    {
        id: 3,
        name: 'Kale',
        family: 'Greens',
        companions: [
            'Beet',
            'Carrot',
            'Marigold',
            'Radish',
            'Turnips'
        ],
        antagonists: [
            'none'
        ],
        tips: 'none'
    },
    {
        id: 4,
        name: 'Swiss Chard',
        family: 'Greens',
        companions: [
            'Beet',
            'Carrot',
            'Marigold',
            'Radish',
            'Turnips'
        ],
        antagonists: [
            'none'
        ],
        tips: 'none'
    },
    {
        id: 5,
        name: 'Collard',
        family: 'Greens',
        companions: [
            'Beet',
            'Carrot',
            'Marigold',
            'Radish',
            'Turnips'
        ],
        antagonists: [
            'none'
        ],
        tips: 'none'
    },
    {
        id: 6,
        name: 'Cabbage',
        family: 'Greens',
        companions: [
            'Beet',
            'Bush Bean',
            'Celery',
            'Mint',
            'Onion',
            'Potato',
            'Oregano',
            'Rosemary',
            'Dill',
            'Sage'
        ],
        antagonists: [
            'Pole Bean',
            'Runner Bean',
            'Pepper',
            'Strawberry',
            'Tomato'
        ],
        tips: 'Celery, onion and herbs keep pests away. Rosemary repels cabbage fly.'
    },
    {
        id: 7,
        name: 'Broccoli',
        family: 'Mustards',
        companions: [
            'Basil',
            'Bush Bean',
            'Cucumber',
            'Garlic',
            'Lettuce',
            'Marigold',
            'Mint',
            'Onion',
            'Potato',
            'Radish',
            'Rosemary',
            'Dill',
            'Sage',
            'Thyme'
        ],
        antagonists: [
            'Mustard',
            'Oregano',
            'Strawberry',
            'Tomato'
        ],
        tips: 'Rosemary repels cabbage fly. Dill attracts wasps for pest control.'
    },
    {
        id: 8,
        name: 'Cauliflower',
        family: 'Mustards',
        companions: [
            'Basil',
            'Bush Bean',
            'Cucumber',
            'Garlic',
            'Lettuce',
            'Marigold',
            'Mint',
            'Onion',
            'Potato',
            'Radish',
            'Rosemary',
            'Dill',
            'Sage',
            'Thyme'
        ],
        antagonists: [
            'Mustard',
            'Oregano',
            'Strawberry',
            'Tomato'
        ],
        tips: 'Rosemary repels cabbage fly. Dill attracts wasps for pest control.'
    },
    {
        id: 9,
        name: 'Tomato',
        family: 'Nightshades',
        companions: [
            'Bean',
            'Basil',
            'Carrot',
            'Spinach',
            'Broccoli',
            'Cauliflower',
            'Celery',
            'Marigold',
            'Pepper',
            'Melons'
        ],
        antagonists: [
            'Cabbage',
            'Kale',
            'Maize',
            'Pea',
            'Potato',
            'Rosemary',
            'Broccoli',
            'Cauliflower',
            'Dill'
        ],
        tips: 'Growing basil 25cm from tomatoes increases tomato yeilds. Marigolds repel hornworms and nematodes.'
    },
    {
        id: 10,
        name: 'Eggplant',
        family: 'Nightshades',
        companions: [
            'Bean',
            'Pepper',
            'Potato'
        ],
        antagonists: ['none'],
        tips: 'none'
    },
    {
        id: 11,
        name: 'Sweet Pepper',
        family: 'Nightshades',
        companions: [
            'Basil',
            'Onions',
            'Spinach',
            'Tomato'
        ],
        antagonists: [
            'Bean',
            'Cabbage',
            'Kale'
        ],
        tips: 'none'
    },
    {
        id: 12,
        name: 'Hot Pepper',
        family: 'Nightshades',
        companions: [
            'Basil',
            'Onions',
            'Spinach',
            'Tomato'
        ],
        antagonists: [
            'Bean',
            'Cabbage',
            'Kale'
        ],
        tips: 'none'
    },
    {
        id: 13,
        name: 'Beet',
        family: 'Roots',
        companions: [
            'Broccoli',
            'Cabbage',
            'Cauliflower',
            'Collard',
            'Garlic',
            'Onion',
            'Lettuce',
            'Sage'
        ],
        antagonists: [
            'Pole Bean',
            'Runner Bean'
        ],
        tips: 'Bean and Beet compete with each other. Beet leaves add magnesium when composted.'
    },
    {
        id: 14,
        name: 'Carrot',
        family: 'Roots',
        companions: [
            'Bean',
            'Garlic',
            'Lettuce',
            'Onion',
            'Parsley',
            'Pea',
            'Rosemary',
            'Dill',
            'Tomato'
        ],
        antagonists: [
            'Dill',
            'Parsnip'
        ],
        tips: 'none'
    },
    {
        id: 15,
        name: 'Radish',
        family: 'Roots',
        companions: [
            'Cabbage',
            'Corn',
            'Cucumber',
            'Eggplant',
            'Letuce'
        ],
        antagonists: ['none'],
        tips: 'Radish can be used as a trap crop against stone beetles and aphids.'
    },
    {
        id: 16,
        name: 'Turnip',
        family: 'Roots',
        companions: [
            'Pea'
        ],
        antagonists: ['none'],
        tips: 'none'
    },
    {
        id: 17,
        name: 'Onion',
        family: 'Lily',
        companions: [
            'Beet',
            'Cabbage',
            'Carrot',
            'Lettuce',
            'Rosemary',
            'Strawberry',
            'Tomato'
        ],
        antagonists: [
            'Bean',
            'Pea'
        ],
        tips: 'Onions, leeks, and garlic repel arphids, carrot fly, and other pests.'
    },
    {
        id: 18,
        name: 'Leek',
        family: 'Lily',
        companions: [
            'Beet',
            'Cabbage',
            'Carrot',
            'Lettuce',
            'Rosemary',
            'Strawberry',
            'Tomato'
        ],
        antagonists: [
            'Bean',
            'Pea'
        ],
        tips: 'Onions, leeks, and garlic repel arphids, carrot fly, and other pests.'
    },
    {
        id: 19,
        name: 'Garlic',
        family: 'Lily',
        companions: [
            'Beet',
            'Cabbage',
            'Carrot',
            'Lettuce',
            'Rosemary',
            'Strawberry',
            'Tomato'
        ],
        antagonists: [
            'Bean',
            'Pea'
        ],
        tips: 'Onions, leeks, and garlic repel arphids, carrot fly, and other pests.'
    },
    {
        id: 20,
        name: 'Celery',
        family: 'Umbellifers',
        companions: [
            'Bush Bean',
            'Cabbage',
            'Dill',
            'Leeks',
            'Tomato'
        ],
        antagonists: [
            'Potato',
            'Parsnip'
        ],
        tips: 'none'
    },
    {
        id: 21,
        name: 'Squash',
        family: 'Gourds',
        companions: [
            'Flowering plants',
        ],
        antagonists: [
            'Sweet Potato',
        ],
        tips: 'Flowering plants assist in pollination.'
    },
    {
        id: 22,
        name: 'Zucchini',
        family: 'Gourds',
        companions: [
            'Flowering plants',
        ],
        antagonists: [
            'Sweet Potato',
        ],
        tips: 'Flowering plants assist in pollination.'
    },
    {
        id: 23,
        name: 'Watermelon',
        family: 'Gourds',
        companions: [
            'Flowering plants',
        ],
        antagonists: [
            'Sweet Potato',
        ],
        tips: 'Flowering plants assist in pollination.'
    },
    {
        id: 24,
        name: 'Pumpkin',
        family: 'Gourds',
        companions: [
            'Bean',
            'Corn',
            'Radish'
        ],
        antagonists: [
            'Potato'
        ],
        tips: 'Corn, Bean, and pumpkin are an age old companion group. The 3 sisters.'
    },
    {
        id: 25,
        name: 'Corn',
        family: 'Grasses',
        companions: [
            'Bean',
            'Cucumbers',
            'Pea',
            'Potato',
            'Pumpkin',
            'Squash',
            'Zucchini'
        ],
        antagonists: [
            'Potato'
        ],
        tips: 'Corn attracts tomato worm and tomato attracts corn worm.'
    },
    {
        id: 26,
        name: 'Cassava',
        family: 'Roots',
        companions: [
            'none'
        ],
        antagonists: ['none'],
        tips: 'none'
    },
    {
        id: 27,
        name: 'Groundnut',
        family: 'Legumes',
        companions: [
            'Beet',
            'Cabbage',
            'Carrot',
            'Celery',
            'Maize',
            'Cucumber',
            'Eggplant',
            'Lettuce',
            'Marigold',
            'Pea',
            'Potato',
            'Radish',
            'Rosemary',
            'Strawberry'
        ],
        antagonists: [
            'Basil',
            'Onion'
        ],
        tips: 'none'
    },
    {
        id: 28,
        name: 'Pea',
        family: 'Legumes',
        companions: [
            'Bean',
            'Cabbage',
            'Carrot',
            'Celery',
            'Corn',
            'Cucumber',
            'Lettuce',
            'Potato',
            'Sage'
        ],
        antagonists: ['none'],
        tips: 'none'
    },
    {
        id: 29,
        name: 'Bean',
        family: 'Legumes',
        companions: [
            'Beet',
            'Cabbage',
            'Cauliflower',
            'Kale',
            'Cucumber',
            'Celery',
            'Swiss Chard',
            'Spinach',
            'Maize',
            'Eggplant',
            'Pea',
            'Potato'
        ],
        antagonists: [
            'Onion',
            'Leek',
            'Garlic',
            'Pepper'
        ],
        tips: 'Maize is a natural trellis and/or shelter for beans and beans provide nitrogen for maize.'
    },
    {
        id: 30,
        name: 'Yam',
        family: 'Roots',
        companions: [
            'Bean',
            'Oregano',
            'Basil',
            'Dill',
            'Marigold'
        ],
        antagonists: ['none'],
        tips: 'none'
    },
    {
        id: 31,
        name: 'Potato',
        family: 'Roots',
        companions: [
            'Beans',
            'Cabbage',
            'Corn',
            'Eggplant'
        ],
        antagonists: [
            'Celery',
            'Cucumber',
            'Pumpkin',
            'Rosemary',
            'Strawberry',
            'Tomato'
        ],
        tips: 'Cucumber and tomato attract pests that can attack potatos.'
    },
    {
        id: 32,
        name: 'Sweet Potato',
        family: 'Roots',
        companions: [
            'Beet',
            'Okra',
            'Dill',
            'Thyme'
        ],
        antagonists: [
            'Squash',
            'Zucchini',
            'Watermelon'
        ],
        tips: 'none'
    },
]

export default vegeData;
