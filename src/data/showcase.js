const base = import.meta.env.BASE_URL;

const showcaseItems = [
  {
    id: 1,
    subtitle: "New-Tik",
    year: "AD",
    video: `${base}media/tik.mp4`,
  },

  {
    id: 2,
    subtitle: "Al-Hag",
    year: "Documentary",
    video: `${base}media/dara60.mp4`,
  },

  {
    id: 3,
    subtitle: "Product",
    year: "Branding",
    video: `${base}media/manadeel.mp4`,
  },
];

export default showcaseItems;
