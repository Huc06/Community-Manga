const Tips = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-500 to-purple-500">
      <div className="container mx-auto text-center">
        <h2 className="text-5xl font-extrabold mb-8 text-white">Tips for Backers</h2>
        <ul className="list-disc text-left mx-auto max-w-3xl space-y-4">
          <li className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">Kiểm tra cập nhật dự án thường xuyên.</li>
          <li className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">Tương tác với các nhà sáng tạo qua bình luận và phản hồi.</li>
          <li className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">Chú ý đến thời hạn và mục tiêu gây quỹ của chiến dịch.</li>
        </ul>
      </div>
    </section>
  );
};

export default Tips;