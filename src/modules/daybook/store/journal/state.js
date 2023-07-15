export default () => ({
  isLoading: true,
  entries: [
    {
      id: new Date().getTime(),
      date: new Date().toDateString(),
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      picture: null,
    },
    {
      id: new Date().getTime() + 1000,
      date: new Date().toDateString(),
      text: "Non dolor aliqua sit adipisicing veniam enim aliqua cillum.",
      picture: null,
    },
    {
      id: new Date().getTime() + 2000,
      date: new Date().toDateString(),
      text: "Labore nostrud ea et ad. Laboris reprehenderit non minim cillum laboris magna officia elit pariatur.",
      picture: null,
    },
  ],
});
