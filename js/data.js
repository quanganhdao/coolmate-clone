/* =========================================================
   DỮ LIỆU MẪU — thay ảnh bằng cách điền đường dẫn vào `img`
   (vd: "assets/images/products/bondtech.jpg"). Để trống -> placeholder.
   ========================================================= */

const C = {
  black: "#1a1a1a", navy: "#1f2a44", gray: "#9ca3af", white: "#f5f5f5",
  blue: "#2563eb", sky: "#38bdf8", green: "#6b8f71", beige: "#d6c7a8",
  brown: "#6b4f3a", olive: "#6b6b47", red: "#b91c1c", sage: "#8fa89a",
};

window.NEW_ARRIVALS = {
  nam: [
    { name: "Áo khoác 2 lớp BondTech", price: "799.000đ", badge: "NEW", colors: [C.black, C.navy, C.gray], img: "" },
    { name: "Pack 3 Quần Lót Trunk Cotton Co Giãn Comfort", price: "329.000đ", badge: "NEW", colors: [C.navy, C.blue, C.gray], img: "" },
    { name: "Quần dài Nam Double Knit", price: "529.000đ", old: "549.000đ", disc: "-4%", badge: "NEW", colors: [C.black, C.gray], img: "" },
    { name: "Quần Lót Nam Trunk Pokémon (Pack 3)", price: "509.000đ", badge: "NEW", colors: [C.blue, C.red, C.black], img: "" },
    { name: "Áo khoác thể thao nam Flexline Active", price: "529.000đ", old: "549.000đ", disc: "-4%", badge: "NEW", colors: [C.black, C.navy], img: "" },
    { name: "Áo polo dài tay thể thao nam Active Motion", price: "379.000đ", badge: "NEW", colors: [C.black, C.white, C.navy], img: "" },
    { name: "Áo phao dày Ultrawarm Puffer có mũ II", price: "849.000đ", old: "899.000đ", disc: "-6%", badge: "NEW", colors: [C.black, C.beige, C.olive], img: "" },
    { name: "Áo phao nhẹ Ultrawarm", price: "799.000đ", badge: "NEW", colors: [C.black, C.navy, C.brown], img: "" },
    { name: "Áo khoác thể thao nam 2 lớp Flexline Motion", price: "590.000đ", badge: "NEW", colors: [C.black, C.gray], img: "" },
    { name: "Áo phao nhẹ Ultrawarm có mũ", price: "809.000đ", old: "899.000đ", disc: "-10%", badge: "NEW", colors: [C.black, C.sage], img: "" },
    { name: "Áo dài tay thể thao nam Regular Fit Flex Move", price: "319.000đ", old: "349.000đ", disc: "-9%", colors: [C.black, C.white, C.navy], img: "" },
    { name: "Áo dài tay thể thao nam Relax Flex Move", price: "349.000đ", colors: [C.black, C.gray], img: "" },
  ],
  nu: [
    { name: "Áo khoác nữ 2 lớp BondTech", price: "799.000đ", badge: "NEW", colors: [C.black, C.beige], img: "" },
    { name: "Áo phao nhẹ nữ Ultrawarm", price: "799.000đ", badge: "NEW", colors: [C.black, C.white, C.sage], img: "" },
    { name: "Quần legging nữ Seamless Motion", price: "349.000đ", badge: "NEW", colors: [C.black, C.brown], img: "" },
    { name: "Áo bra thể thao nữ Seamless Motion", price: "299.000đ", badge: "NEW", colors: [C.black, C.sage, C.beige], img: "" },
    { name: "Áo dài tay thể thao nữ Flex Move", price: "319.000đ", old: "349.000đ", disc: "-9%", badge: "NEW", colors: [C.black, C.white], img: "" },
    { name: "Quần jogger nữ Double Knit", price: "499.000đ", badge: "NEW", colors: [C.gray, C.black], img: "" },
    { name: "Áo hoodie nữ Daily Wear", price: "449.000đ", old: "499.000đ", disc: "-10%", badge: "NEW", colors: [C.beige, C.black], img: "" },
    { name: "Áo thun nữ Cotton Compact", price: "259.000đ", badge: "NEW", colors: [C.white, C.black, C.sage], img: "" },
  ],
};

window.BEST_SELLERS = [
  { g: "nam", name: "Quần Shorts Chạy Bộ 2 lớp Fast & Free III", price: "329.000đ", old: "399.000đ", disc: "-18%", rating: "5.0", colors: [C.sky, C.navy, C.black, C.gray], img: "" },
  { g: "nam", name: "Combo 3 Quần Lót Nam Trunk Bamboo", price: "269.000đ", old: "299.000đ", disc: "-10%", rating: "4.9", colors: [C.black, C.white, C.navy, C.gray, C.navy], more: 1, img: "" },
  { g: "nam", name: "Quần dài nam Daily Pants", price: "299.000đ", rating: "4.9", colors: [C.sage, C.navy, C.black, C.navy], img: "" },
  { g: "nam", name: "Combo 3 Quần Lót Nam trunk Lenzing Modal cạp logo Coolmate", price: "269.000đ", old: "299.000đ", disc: "-10%", rating: "5.0", colors: [C.black, C.gray, C.sage, C.navy, C.sage], more: 4, img: "" },
  { g: "nam", name: "Áo thun nam Cotton Compact", price: "259.000đ", rating: "4.9", colors: [C.white, C.black, C.navy, C.beige], img: "" },
  { g: "nam", name: "Áo Khoác Nam có mũ Daily Wear", price: "449.000đ", old: "499.000đ", disc: "-10%", rating: "4.9", colors: [C.black, C.navy, C.gray, C.beige], more: 1, img: "" },
  { g: "nam", name: "Combo 3 Quần Lót Nam Brief Bamboo", price: "229.000đ", rating: "4.9", colors: [C.black, C.navy, C.gray], img: "" },
  { g: "nam", name: "Combo 3 Quần Lót Nam Trunk Ice Cooling II", price: "269.000đ", old: "299.000đ", disc: "-10%", rating: "5.0", colors: [C.black, C.blue, C.gray], img: "" },
  { g: "nam", name: "Combo 3 Quần Lót Nam Trunk Excool", price: "299.000đ", old: "329.000đ", disc: "-9%", rating: "4.9", colors: [C.black, C.navy, C.gray], img: "" },
  { g: "nam", name: "Polo thể thao nam Quick Dry Active", price: "224.000đ", old: "299.000đ", disc: "-25%", rating: "5.0", colors: [C.black, C.white, C.navy, C.green], img: "" },
  { g: "nam", name: "Áo Polo Nam Thể Thao Promax-S1", price: "239.000đ", rating: "4.9", colors: [C.black, C.white, C.navy, C.gray, C.blue], more: 11, img: "" },
  { g: "nam", name: "Pack 3 Shorts mặc nhà Coolmate Basics", price: "199.000đ", old: "249.000đ", disc: "-20%", rating: "5.0", colors: [C.black, C.gray, C.navy], img: "" },
  { g: "nam", name: "Áo Polo Nam Pique Cotton", price: "299.000đ", rating: "4.9", colors: [C.white, C.black, C.navy, C.beige, C.sage], more: 3, img: "" },
  { g: "nam", name: "Quần shorts chạy bộ nam 2 lớp 3IN 360Reflect™ \"Run Safe In The Dark\"", price: "270.000đ", old: "299.000đ", disc: "-10%", colors: [C.black, C.navy], img: "" },
  { g: "nam", name: "3 Áo Thun Nam Thể Thao Coolmate Basics", price: "319.000đ", old: "357.000đ", disc: "-11%", rating: "5.0", colors: [C.black, C.white, C.gray], img: "" },
  { g: "nam", name: "Áo Polo nam Premium Pique", price: "399.000đ", rating: "4.9", colors: [C.navy, C.white, C.black], img: "" },
  { g: "nam", name: "Quần dài nam ECC Ripstop Pants", price: "314.000đ", old: "349.000đ", disc: "-10%", rating: "4.9", colors: [C.black, C.olive, C.beige], img: "" },
  { g: "nam", name: "Áo tshirt regular chạy bộ nam 360Reflect™ \"Run Safe In The Dark\"", price: "279.000đ", colors: [C.black, C.white], img: "" },
  { g: "nam", name: "Áo Polo nam Excool", price: "399.000đ", rating: "4.8", colors: [C.black, C.navy, C.white], img: "" },
  { g: "nu", name: "Quần shorts chạy bộ nữ 2 lớp 3IN 360Reflect™ \"Run Safe In The Dark\"", price: "269.000đ", old: "299.000đ", disc: "-10%", colors: [C.black, C.sage], img: "" },
  { g: "nu", name: "Áo bra thể thao nữ Seamless Motion", price: "299.000đ", rating: "4.9", colors: [C.black, C.beige], img: "" },
  { g: "nu", name: "Quần legging nữ Seamless Motion", price: "349.000đ", rating: "5.0", colors: [C.black, C.brown, C.sage], img: "" },
];

window.COLLECTIONS = [
  { title: "BST Thu Đông 2026", img: "" },
  { title: "DƯƠNG QUỐC HOÀNG X COOLMATE", img: "" },
  { title: "AN TRƯƠNG X COOLMATE", img: "" },
  { title: "BST POKÉMON - ON THE DAY", img: "" },
  { title: "SEAMLESS MOTION", img: "" },
  { title: "BST HELLO KITTY", img: "" },
  { title: "RUN SAFE IN THE DARK", img: "" },
];

window.ACTIVITIES = [
  ["Nguyễn Trần Trúc Duy", "vừa được cộng", "15.000 CoolCash", "từ ĐH #0xxx558"],
  ["Trần Long Hải", "vừa được cộng", "45.000 CoolCash", "từ ĐH #7xxx886"],
  ["Chào mừng Đỗ Văn Oánh", "vừa gia nhập", "CoolClub!", ""],
  ["Chào mừng Hang Nguyen Thi", "vừa gia nhập", "CoolClub!", ""],
  ["Phan Hoàng Long", "vừa được cộng", "21.000 CoolCash", "từ ĐH #3xxx857"],
  ["Trần Tuyền", "vừa được cộng", "65.000 CoolCash", "từ ĐH #0xxx369"],
  ["Hưởng Nguyễn", "vừa được cộng", "8.000 CoolCash", "từ ĐH #0xxx850"],
  ["Tấn Phát", "vừa được cộng", "38.000 CoolCash", "từ ĐH #3xxx866"],
  ["Thảo Hoàng", "vừa được nhận", "1 phần quà sinh nhật", "đặc biệt."],
  ["Hiếu Nguyễn", "vừa được nhận", "1 phần quà sinh nhật", "đặc biệt."],
  ["Lê Thiên Hải", "vừa được cộng", "24.000 CoolCash", "từ ĐH #5xxx883"],
  ["Chào mừng Le Hoang Yen", "vừa gia nhập", "CoolClub!", ""],
];
