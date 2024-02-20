const getAuthor = (page, limit) => {
  return {
    data: { name: 'JK rowling', age: 35 },
    meta: { page, limit },
  };
};

module.exports = { getAuthor };
