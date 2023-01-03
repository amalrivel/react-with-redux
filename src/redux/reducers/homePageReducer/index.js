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
  CTABanner: {
    title: "Sewa Mobil di (Lokasimu) Sekarang",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  FAQ: {
    title: "Frequently Asked Question",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    content: [
      {
        no: 1,
        summary: "Apa saja syarat yang dibutuhkan?",
      },
      {
        no: 2,
        summary: "Berapa hari minimal sewa mobil lepas kunci?",
      },
      {
        no: 3,
        summary: "Berapa hari sebelumnya sabaiknya booking sewa mobil?",
      },
      {
        no: 4,
        summary: "Apakah Ada biaya antar-jemput?",
      },
      {
        no: 5,
        summary: "Bagaimana jika terjadi kecelakaan",
      },
    ],
    expanded: false,
  },
  searchCar: {
    // React.useEffect(() => {
    //   axios
    //     .get("https://bootcamp-rent-car.herokuapp.com/admin/car")
    //     .then((res) => setData(res.data))
    //     .catch((err) => console.log(err));
    // }, []),

    // const handleChange = (event) => {
    //   const target = event.target;
    //   const value = target.type === "checkbox" ? target.checked : target.value;
    //   const name = target.name;
    //   setState({
    //     ...state,
    //     [name]: value,
    //   })
    // },

    // const handleSubmit = (event) => {
    //   handleResult();
    //   event.preventDefault();
    // };
    data: [],

    searchItem: [
      {
        label: "Nama Mobil",
        name: "namaMobil",
        value: "",
      },
      {
        label: "Kategori",
        name: "kategori",
        value: "",
        option: [
          {
            value: "",
            content: "Masukan Kapasitas Mobil",
          },
          {
            value: "2 - 4 orang",
            content: "2 - 4 orang",
          },
          {
            value: "4 - 6 orang",
            content: "4 - 6 orang",
          },
          {
            value: "6 - 8 orang",
            content: "6 - 8 orang",
          },
        ],
      },
      {
        label: "Harga",
        name: "harga",
        value: "",
        option: [
          {
            value: "",
            content: "Masukan Harga Sewa per Hari",
          },
          {
            value: "< Rp. 400.000",
            content: "< Rp. 400.000",
          },
          {
            value: "Rp. 400.000 - Rp. 600.000",
            content: "Rp. 400.000 - Rp. 600.000",
          },
          {
            value: "> Rp. 600.000",
            content: "> Rp. 600.000",
          },
        ],
      },
      {
        label: "Status",
        name: "status",
        value: "",
        option: [
          {
            value: "",
            content: "Status Mobil",
          },
          {
            value: "Siap untuk disewa",
            content: "Siap untuk disewa",
          },
          {
            value: "Sedang disewa",
            content: "Sedang disewa",
          },
        ],
      },
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
    case "handleOnClick":
      return {
        ...state,
        testimony: {
          ...state.testimony,
          currentIndex: action.payload,
        },
      };
    case "handleChange":
      return {
        ...state,
        FAQ: {
          ...state.FAQ,
          expanded: action.payload,
        },
      };
      case "callAPI":
      return {
        ...state,
        searchCar: {
          ...state.searchCar,
          data: action.payload,
        },
      };
    default:
      return state;
  }
};

export default homePageReducer;
