const getBooks = (page, limit, query) => {
  return {
    data: [
      {
        id: '1',
        title: 'The catcher in the Rye',
        pages: 234,
      },

      {
        id: '2',
        title: 'Authors legend sword',
        pages: 567,
      },

      {
        id: '3',
        title: 'The dog of solomon',
        pages: 321,
      },
      {
        id: '4',
        title: 'Players till the end',
        pages: 213,
      },

      {
        id: '5',
        title: 'Leading the victory worriors',
        pages: 242,
      },
    ],
    meta: { page, limit, query },
  };
};

const getSomething = (page, limit) => {
  return {
    data: { name: 'something', pages: '760' },
    meta: { page, limit },
  };
};
module.exports = { getBooks, getSomething };
