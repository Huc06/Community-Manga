import Header from "../components/Header";
import Footer from "../components/Footer";

const CurrentPlan = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Header />
      <section className="py-16 bg-gray-50 flex-grow">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-extrabold mb-8 text-gray-900">Kế hoạch Gây Quỹ cho Community Manga</h2>
          <p className="text-lg mb-6 text-gray-700">
            Chúng tôi đang nỗ lực để phát triển và mở rộng cộng đồng manga của mình thông qua các hoạt động gây quỹ. Dưới đây là những kế hoạch hiện tại mà chúng tôi đang thực hiện:
          </p>
          <ul className="list-disc list-inside mb-8 text-left mx-auto max-w-2xl">
            <li className="mb-4 p-4 bg-white shadow-md rounded-lg transition-transform transform hover:scale-105 hover:shadow-lg">
              Tổ chức sự kiện gây quỹ trực tuyến: Chúng tôi sẽ tổ chức các sự kiện trực tuyến như livestream, đấu giá, và các buổi trò chuyện với tác giả để thu hút sự quan tâm và ủng hộ từ cộng đồng.
            </li>
            <li className="mb-4 p-4 bg-white shadow-md rounded-lg transition-transform transform hover:scale-105 hover:shadow-lg">
              Phát hành các bản in giới hạn: Chúng tôi sẽ phát hành các bản in giới hạn của manga và merchandise để gây quỹ, với một phần doanh thu sẽ được sử dụng để phát triển cộng đồng.
            </li>
            <li className="mb-4 p-4 bg-white shadow-md rounded-lg transition-transform transform hover:scale-105 hover:shadow-lg">
              Hợp tác với các nhóm dịch khác: Chúng tôi sẽ hợp tác với các nhóm dịch khác để mở rộng danh sách manga và tổ chức các hoạt động gây quỹ chung.
            </li>
            <li className="mb-4 p-4 bg-white shadow-md rounded-lg transition-transform transform hover:scale-105 hover:shadow-lg">
              Khuyến khích sự tham gia của cộng đồng: Chúng tôi sẽ tổ chức các cuộc thi và hoạt động tương tác để khuyến khích sự tham gia của cộng đồng, từ đó thu hút sự ủng hộ và gây quỹ.
            </li>
            <li className="mb-4 p-4 bg-white shadow-md rounded-lg transition-transform transform hover:scale-105 hover:shadow-lg">
              Xây dựng nền tảng trực tuyến: Chúng tôi sẽ phát triển một nền tảng trực tuyến để người dùng có thể dễ dàng truy cập và theo dõi các dự án, đồng thời hỗ trợ việc gây quỹ.
            </li>
          </ul>
          <p className="text-lg mb-4 text-gray-700">
            Chúng tôi rất mong nhận được sự ủng hộ từ các bạn để có thể thực hiện những kế hoạch này và phát triển cộng đồng manga ngày càng lớn mạnh.
          </p>
          <p className="text-lg font-bold text-gray-900">
            Cảm ơn bạn đã đồng hành cùng chúng tôi trong hành trình này!
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default CurrentPlan;