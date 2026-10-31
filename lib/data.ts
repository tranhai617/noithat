// ============================================================
// lib/data.ts
// Central data store — structured for easy Sanity/Payload CMS migration
// ============================================================

// ---- Projects -----------------------------------------------
export interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  area: string;
  location: string;
  year: string;
  image: string;
  gallery: string[];
  description: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "1",
    slug: "penthouse-vinhomes-central-park",
    title: "Penthouse Vinhomes Central Park",
    subtitle: "Không gian sống đỉnh cao trên tầng 40",
    category: "Căn hộ Penthouse",
    area: "350m²",
    location: "Hồ Chí Minh",
    year: "2024",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=90",
    gallery: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=90",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&q=90",
    ],
    description:
      "Không gian penthouse sang trọng với tầm nhìn panorama thành phố, kết hợp vật liệu marble cao cấp và ánh sáng tự nhiên tràn ngập.",
    featured: true,
  },
  {
    id: "2",
    slug: "biet-thu-phu-my-hung",
    title: "Biệt thự Phú Mỹ Hưng",
    subtitle: "Kiến trúc Địa Trung Hải gặp gỡ hiện đại",
    category: "Biệt thự",
    area: "520m²",
    location: "Hồ Chí Minh",
    year: "2024",
    image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200&q=90",
    gallery: [
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200&q=90",
    ],
    description:
      "Biệt thự 4 phòng ngủ với vườn nhiệt đới, hồ bơi vô cực và phòng khách 8m trần cao, mang đậm phong cách Mediterranean hiện đại.",
    featured: true,
  },
  {
    id: "3",
    slug: "can-ho-masteri-thao-dien",
    title: "Căn hộ Masteri Thảo Điền",
    subtitle: "Minimalism tinh tế, sống xanh trong phố",
    category: "Căn hộ",
    area: "110m²",
    location: "Hà Nội",
    year: "2023",
    image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=1200&q=90",
    gallery: [
      "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=1200&q=90",
    ],
    description:
      "Căn hộ 3 phòng ngủ phong cách Japandi tối giản, sử dụng gỗ sồi tự nhiên, vải linen cao cấp và cây xanh nội thất tạo cảm giác bình yên.",
    featured: true,
  },
];

// ---- Services -----------------------------------------------
export interface Service {
  id: string;
  slug: string;
  icon: string;
  title: string;
  description: string;
  features: string[];
  priceFrom: string;
}

export const services: Service[] = [
  {
    id: "1",
    slug: "thiet-ke-noi-that",
    icon: "PencilRuler",
    title: "Thiết kế nội thất",
    description:
      "Quy trình thiết kế 3D chuyên sâu, từ concept board đến bản vẽ kỹ thuật hoàn chỉnh, đảm bảo mỗi không gian phản ánh cá tính và lối sống của gia chủ.",
    features: [
      "Tư vấn phong cách & concept",
      "Bản vẽ 3D photorealistic",
      "Bản vẽ kỹ thuật thi công",
      "Bảng vật liệu & màu sắc",
      "Giám sát thiết kế",
    ],
    priceFrom: "50.000.000",
  },
  {
    id: "2",
    slug: "thi-cong-noi-that",
    icon: "Hammer",
    title: "Thi công nội thất",
    description:
      "Đội ngũ thi công lành nghề, cam kết tiến độ và chất lượng. Sử dụng vật liệu cao cấp nhập khẩu từ Ý, Đức, và Đan Mạch.",
    features: [
      "Thi công trọn gói turnkey",
      "Đồ nội thất custom-made",
      "Hệ thống chiếu sáng thông minh",
      "Vật liệu cao cấp nhập khẩu",
      "Bảo hành 5 năm",
    ],
    priceFrom: "150.000.000",
  },
  {
    id: "3",
    slug: "cai-tao-can-ho",
    icon: "Wrench",
    title: "Cải tạo căn hộ",
    description:
      "Biến đổi hoàn toàn không gian cũ thành tổ ấm mới với ngân sách hợp lý, giữ lại kết cấu và tối ưu từng mét vuông.",
    features: [
      "Khảo sát & đánh giá hiện trạng",
      "Tối ưu không gian & công năng",
      "Cải tạo điện nước âm tường",
      "Ốp lát & sơn bả mới",
      "Nội thất mới hoàn toàn",
    ],
    priceFrom: "80.000.000",
  },
  {
    id: "4",
    slug: "thiet-ke-biet-thu",
    icon: "Building2",
    title: "Thiết kế biệt thự",
    description:
      "Dịch vụ thiết kế biệt thự cao cấp toàn diện — từ kiến trúc ngoại thất, cảnh quan, hồ bơi đến từng góc phòng nội thất.",
    features: [
      "Thiết kế kiến trúc & nội thất",
      "Cảnh quan & sân vườn",
      "Hồ bơi & spa ngoài trời",
      "Hệ thống smarthome",
      "Phòng rượu & wine cellar",
    ],
    priceFrom: "500.000.000",
  },
];

// ---- Stats --------------------------------------------------
export interface Stat {
  id: string;
  value: string;
  suffix: string;
  label: string;
}

export const stats: Stat[] = [
  { id: "1", value: "350", suffix: "+", label: "Dự án hoàn thành" },
  { id: "2", value: "12", suffix: "+", label: "Năm kinh nghiệm" },
  { id: "3", value: "98", suffix: "%", label: "Khách hàng hài lòng" },
  { id: "4", value: "45", suffix: "+", label: "Giải thưởng thiết kế" },
];

// ---- Before/After -------------------------------------------
export interface BeforeAfter {
  id: string;
  title: string;
  location: string;
  before: string;
  after: string;
}

export const beforeAfters: BeforeAfter[] = [
  {
    id: "1",
    title: "Phòng khách căn hộ Q.7",
    location: "Hồ Chí Minh",
    before: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80",
    after: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900&q=80",
  },
  {
    id: "2",
    title: "Phòng ngủ master Vinhomes",
    location: "Hà Nội",
    before: "https://images.unsplash.com/photo-1484101403633-562f891dc89a?w=900&q=80",
    after: "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=900&q=80",
  },
];

// ---- Testimonials -------------------------------------------
export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  content: string;
  project: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Nguyễn Minh Tuấn",
    role: "CEO, TechViet Group",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
    rating: 5,
    content:
      "Elite Interior Studio đã biến căn penthouse của tôi thành một tác phẩm nghệ thuật sống. Từng chi tiết đều được chăm chút tỉ mỉ, vượt xa mọi kỳ vọng. Đây là khoản đầu tư xứng đáng nhất trong cuộc đời tôi.",
    project: "Penthouse Vinhomes Central Park",
  },
  {
    id: "2",
    name: "Trần Thị Lan Anh",
    role: "Giám đốc Marketing",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b77c?w=200&q=80",
    rating: 5,
    content:
      "Tôi đặc biệt ấn tượng với cách team Elite lắng nghe và hiểu gu thẩm mỹ của mình. Căn hộ sau cải tạo không chỉ đẹp mà còn rất tiện dụng, phù hợp hoàn hảo với lifestyle của gia đình.",
    project: "Căn hộ Masteri Thảo Điền",
  },
  {
    id: "3",
    name: "Phạm Hoàng Sơn",
    role: "Kiến trúc sư & Doanh nhân",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80",
    rating: 5,
    content:
      "Là người trong nghề, tôi hiểu được sự khác biệt giữa thiết kế tốt và thiết kế xuất sắc. Elite Interior Studio thuộc về nhóm thứ hai — họ làm việc với tầm nhìn của nghệ sĩ và kỷ luật của kỹ sư.",
    project: "Biệt thự Phú Mỹ Hưng",
  },
  {
    id: "4",
    name: "Vũ Thanh Hà",
    role: "Bác sĩ chuyên khoa",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
    rating: 5,
    content:
      "Sau 6 tháng sống trong căn nhà do Elite thiết kế, tôi nhận ra rằng không gian sống thực sự ảnh hưởng đến chất lượng cuộc sống. Mỗi buổi sáng thức dậy nhìn phòng ngủ là một niềm vui.",
    project: "Villa D'Or Thảo Điền",
  },
];

// ---- Gallery ------------------------------------------------
export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: string;
  size: "small" | "medium" | "large";
}

export const galleryImages: GalleryImage[] = [
  {
    id: "1",
    src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=85",
    alt: "Phòng khách penthouse hiện đại",
    category: "Phòng khách",
    size: "large",
  },
  {
    id: "2",
    src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=85",
    alt: "Phòng ngủ master sang trọng",
    category: "Phòng ngủ",
    size: "medium",
  },
  {
    id: "3",
    src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=85",
    alt: "Bếp mở hiện đại",
    category: "Phòng bếp",
    size: "small",
  },
  {
    id: "4",
    src: "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=600&q=85",
    alt: "Phòng tắm spa cao cấp",
    category: "Phòng tắm",
    size: "small",
  },
  {
    id: "5",
    src: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=85",
    alt: "Biệt thự ngoại thất",
    category: "Biệt thự",
    size: "large",
  },
  {
    id: "6",
    src: "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600&q=85",
    alt: "Phòng làm việc tối giản",
    category: "Văn phòng",
    size: "medium",
  },
  {
    id: "7",
    src: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&q=85",
    alt: "Khu vực dining sang trọng",
    category: "Phòng ăn",
    size: "medium",
  },
  {
    id: "8",
    src: "https://images.unsplash.com/photo-1615873968403-89e068629265?w=600&q=85",
    alt: "Góc đọc sách yên tĩnh",
    category: "Không gian đọc",
    size: "small",
  },
  {
    id: "9",
    src: "https://images.unsplash.com/photo-1562438668-bcf0ca6578f0?w=800&q=85",
    alt: "Phòng ngủ trẻ em sáng tạo",
    category: "Phòng ngủ",
    size: "large",
  },
];

// ---- FAQ ----------------------------------------------------
export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export const faqs: FAQ[] = [
  {
    id: "1",
    question: "Chi phí thiết kế nội thất tại Elite Interior Studio là bao nhiêu?",
    answer:
      "Chi phí phụ thuộc vào diện tích, phong cách và mức độ hoàn thiện. Gói thiết kế khởi điểm từ 50 triệu đồng cho căn hộ dưới 80m². Chúng tôi cung cấp báo giá chi tiết miễn phí sau buổi tư vấn khảo sát. Liên hệ hotline để được tư vấn cụ thể nhất.",
  },
  {
    id: "2",
    question: "Thời gian hoàn thành một dự án nội thất mất bao lâu?",
    answer:
      "Thời gian thiết kế thường từ 3–6 tuần tùy độ phức tạp. Thi công hoàn thiện từ 45–90 ngày. Với dự án biệt thự lớn, tổng thời gian có thể từ 4–6 tháng. Chúng tôi cam kết tiến độ bằng hợp đồng và cập nhật tiến độ hàng tuần qua ứng dụng.",
  },
  {
    id: "3",
    question: "Elite Interior Studio có bảo hành công trình không?",
    answer:
      "Có. Chúng tôi bảo hành toàn bộ công trình thi công trong 5 năm, bảo hành vật liệu theo chính sách của nhà sản xuất (thường từ 3–10 năm). Đội ngũ bảo trì sẵn sàng hỗ trợ trong vòng 24 giờ sau khi nhận yêu cầu.",
  },
  {
    id: "4",
    question: "Phong cách thiết kế nào phù hợp với không gian của tôi?",
    answer:
      "Chúng tôi thực hiện đa dạng phong cách: Hiện đại tối giản, Scandinavian, Japandi, Indochine, Luxury Classic và Contemporary. Sau buổi tư vấn miễn phí, chuyên gia của chúng tôi sẽ phân tích lifestyle, sở thích và đặc điểm không gian để đề xuất phong cách phù hợp nhất.",
  },
  {
    id: "5",
    question: "Tôi có thể tham gia vào quá trình thiết kế không?",
    answer:
      "Hoàn toàn có. Chúng tôi khuyến khích sự tham gia của gia chủ ở mọi giai đoạn. Bạn sẽ được xem và phê duyệt concept board, bản vẽ 3D và bảng vật liệu trước khi thi công. Chúng tôi sử dụng phần mềm quản lý dự án để cả hai bên dễ dàng giao tiếp và theo dõi.",
  },
];

// ---- Contact ------------------------------------------------
export const contactInfo = {
  phone: "0901 234 567",
  phoneHref: "tel:+84901234567",
  facebook: "https://facebook.com/eliteinteriorstudio",
  zalo: "https://zalo.me/0901234567",
  address: "12 Nguyễn Đình Chiểu, Quận 1, TP. Hồ Chí Minh",
  email: "hello@eliteinterior.vn",
  workingHours: "Thứ 2 – Thứ 7: 8:00 – 18:00",
};

