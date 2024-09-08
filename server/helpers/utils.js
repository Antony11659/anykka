const createWords = (text) => {
  return [
    ...new Set(
      text
        .split(/[^a-zA-Z]/)
        .filter((item) => item !== "")
        .map((item) => {
          return {
            name: item.toLowerCase(),
          };
        })
    ),
  ];
};

export default createWords;
