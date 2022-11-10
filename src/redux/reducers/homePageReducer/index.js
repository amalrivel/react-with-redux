import { imageReducer } from "../imageReducer";

const initialState = {
  navbar: {
    logo: imageReducer.Logo,
    navList: ["Our Services", "Why Us", "Testimonial", "FAQ", "Register"],
    toggleDrawer: false,
  },
  footer: {
    logo: imageReducer.Logo,
    navList: ["Our Services", "Why Us", "Testimonial", "FAQ", "Register"],
    icon: [
      imageReducer.Facebook,
      imageReducer.Instagram,
      imageReducer.Mail,
      imageReducer.Twitter,
      imageReducer.Twitch,
    ],
    address: [
      "Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000",
      "binarcarrental@gmail.com",
      "081-233-334-808",
    ],
  },
  hero: {
    car: imageReducer.Car,
    title: "Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)",
    content:
      "Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.",
  },
  ourServices: {
    service: imageReducer.Service,
    check: imageReducer.Check,
    title: "Best Car Rental for any kind of trip in (Lokasimu)!",
    content:
      "Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.",
    ourService: [
      "Sewa Mobil Dengan Supir di Bali 12 Jam",
      "Sewa Mobil Lepas Kunci di Bali 24 Jam",
      "Sewa Mobil Jangka Panjang Bulanan",
      "Gratis Antar - Jemput Mobil di Bandara",
      "Layanan Airport Transfer / Drop In Out",
    ],
  },
  whyUs: {
    title: "Why Us?",
    desc: "Mengapa harus pilih Binar Car Rental?",
    content: [
      {
        img: imageReducer.Complete,
        name: "Mobil Lengkap",
        desc: "Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat",
      },
      {
        img: imageReducer.Price,
        name: "Harga Murah",
        desc: "Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain",
      },
      {
        img: imageReducer.Hrs,
        name: "Layanan 24 Jam",
        desc: "Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu",
      },
      {
        img: imageReducer.Professional,
        name: "Sopir Profesional",
        desc: "Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu",
      },
    ],
  },
  testimony: {
    title: "Testimonial",
    desc: "Berbagai review positif dari para pelanggan kami",
    currentIndex: 0,
    photo: imageReducer.Photo,
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    reviewName: "John Dee 32, Bromo",
  },
};

const homePageReducer = (state = initialState, action) => {
  switch (action.type) {
    case "toggleDrawerHandler":
      return {
        ...state,
        navbar: {
          ...state.navbar,
          toggleDrawer: action.payload,
        },
      };
    case "handleOnClick":
      return {
        ...state,
        testimony: {
          ...state.testimony,
          currentIndex: action.payload,
        },
      };
    default:
      return state;
  }
};

export default homePageReducer;
