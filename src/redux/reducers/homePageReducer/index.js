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
  OurServices: {
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
    default:
      return state;
  }
};

export default homePageReducer;
