const initialState = {
  categories: ["Sport", "News", "Movies"],
  posts: [
    {
      id: "1",
      title: "Why React is so popular?",
      shortDescription:
        "React is one of the most popular JavaScript libraries...",
      content:
        "React makes building user interfaces easier thanks to reusable components and efficient rendering.",
      publishedDate: new Date("2022-02-02"),
      author: "John Doe",
      category: "News",
    },
    {
      id: "2",
      title: "Redux basics",
      shortDescription: "Redux helps manage global application state...",
      content:
        "Redux stores the entire application state in one place and makes it predictable.",
      publishedDate: new Date("2022-02-02"),
      author: "Jane Smith",
      category: "Sport",
    },
    {
      id: "3",
      title: "React Router",
      shortDescription:
        "React Router enables navigation in React applications...",
      content:
        "Using React Router we can build single page applications with multiple routes.",
      publishedDate: new Date("2022-02-02"),
      author: "Mike Brown",
      category: "Movies",
    },
  ],
};

export default initialState;
