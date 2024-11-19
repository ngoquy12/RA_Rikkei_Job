import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer className="w-full bg-[url('/images/bg-footer.jpg')] bg-no-repeat bg-cover px-[48px] lg:px-[120px] pt-[72px]">
        <div>
          <img className="h-10" src="/images/logo-rikkei-footer.png" alt="" />
          <h3 className="uppercase text-[20px] text-white leading-[30px] mt-3">
            KHƠI DẬY TIỀM LỰC - MỞ LỐI THÀNH CÔNG
          </h3>
        </div>
        <div className="border-b w-full border-white my-6"></div>

        <section className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <h3 className="text-white uppercase text-[16px] leading-6  mb-4">
              Thông tin liên hệ
            </h3>

            <ul className="flex flex-col gap-6">
              <li className="flex gap-3">
                <div className="size-8 min-w-[32px] border bg-white rounded-full flex items-center justify-center">
                  <img src="/images/footer-building.png" alt="" />
                </div>
                <div className="">
                  <b className="font-semibold text-[16px] text-white">
                    Trụ sở Hà Nội:{" "}
                  </b>
                  <span className="text-white text-[14px]">
                    Tầng 7, Tháp A, Tòa Sông Đà, Đường Phạm Hùng, Mỹ Đình, Nam
                    Từ Liêm, Hà Nội
                  </span>
                </div>
              </li>
              <li className="flex gap-3 items-center">
                <div className="size-8 min-w-[32px] border bg-white rounded-full flex items-center justify-center">
                  <img src="/images/footer-call.png" alt="" />
                </div>
                <div className="">
                  <b className="font-semibold text-[16px] text-white">
                    Hotline:{" "}
                  </b>
                  <span className="text-white text-[14px]">0862 069 233</span>
                </div>
              </li>
              <li className="flex gap-3 items-center">
                <div className="size-8 min-w-[32px] border bg-white rounded-full flex items-center justify-center">
                  <img src="/images/footer-email.png" alt="" />
                </div>
                <div className="">
                  <b className="font-semibold text-[16px] text-white">
                    Email::{" "}
                  </b>
                  <span className="text-white text-[14px]">
                    academy@rikkeisoft.com
                  </span>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white uppercase text-[16px] leading-6 mb-4">
              Khóa học
            </h3>
            <ul className="flex flex-col gap-2 text-white">
              <li>
                <Link className="hover:underline transition-all" to="/">
                  Cho người mới bắt đầu
                </Link>
              </li>
              <li>
                <Link className="hover:underline transition-all" to="/">
                  Lập trình viên Nhật Bản
                </Link>
              </li>
              <li>
                <Link className="hover:underline transition-all" to="/">
                  Kỹ sư CNTT - PTIT
                </Link>
              </li>
              <li>
                <Link className="hover:underline transition-all" to="/">
                  Data Analysis - HUST
                </Link>
              </li>
              <li>
                <Link className="hover:underline transition-all" to="/">
                  IT Fresher - Rikkei Certificate
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white uppercase text-[16px] leading-6 mb-4">
              Liên hệ chúng tôi tại
            </h3>
            <ul className="flex  items-center gap-4">
              <li>
                <img src="/images/footer-facebook.png" alt="" />
              </li>
              <li>
                <img src="/images/footer-youtube.png" alt="" />
              </li>
            </ul>
          </div>
        </section>

        <div className="border-b w-full border-white my-6"></div>

        <section className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <h3 className="text-white text-[16px] leading-6  mb-4">Cơ sở 1</h3>
            <ul className="flex flex-col gap-6">
              <li className="flex gap-3 items-center">
                <div className="size-8 min-w-[32px] border bg-white rounded-full flex items-center justify-center">
                  <img src="/images/location.png" alt="" />
                </div>
                <div className="">
                  <b className="font-semibold text-[16px] text-white">
                    Địa chỉ:{" "}
                  </b>
                  <span className="text-white text-[14px]">
                    Tầng 7, Tháp A, Tòa Sông Đà, Đường Phạm Hùng, Mỹ Đình, Quận
                    Nam Từ Liêm, Hà Nội
                  </span>
                </div>
              </li>
              <li className="flex gap-3 items-center">
                <div className="size-8 min-w-[32px] border bg-white rounded-full flex items-center justify-center">
                  <img src="/images/footer-call.png" alt="" />
                </div>
                <div className="">
                  <b className="font-semibold text-[16px] text-white">
                    Hotline:{" "}
                  </b>
                  <span className="text-white text-[14px]">0862 069 233</span>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-[16px] leading-6  mb-4">Cơ sở 2</h3>
            <ul className="flex flex-col gap-6">
              <li className="flex gap-3 items-center">
                <div className="size-8 min-w-[32px] border bg-white rounded-full flex items-center justify-center">
                  <img src="/images/location.png" alt="" />
                </div>
                <div className="">
                  <b className="font-semibold text-[16px] text-white">
                    Địa chỉ:{" "}
                  </b>
                  <span className="text-white text-[14px]">
                    Tầng 22, Tháp A, Tòa Sông Đà, Đường Phạm Hùng, Mỹ Đình, Quận
                    Nam Từ Liêm, Hà Nội
                  </span>
                </div>
              </li>
              <li className="flex gap-3 items-center">
                <div className="size-8 min-w-[32px] border bg-white rounded-full flex items-center justify-center">
                  <img src="/images/footer-call.png" alt="" />
                </div>
                <div className="">
                  <b className="font-semibold text-[16px] text-white">
                    Hotline:{" "}
                  </b>
                  <span className="text-white text-[14px]">0862 069 233</span>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-[16px] leading-6  mb-4">Cơ sở 3</h3>
            <ul className="flex flex-col gap-6">
              <li className="flex gap-3 items-center">
                <div className="size-8 min-w-[32px] border bg-white rounded-full flex items-center justify-center">
                  <img src="/images/footer-call.png" alt="" />
                </div>
                <div className="">
                  <b className="font-semibold text-[16px] text-white">
                    Địa chỉ:{" "}
                  </b>
                  <span className="text-white text-[14px]">
                    Tầng 3, tòa TSA Building, số 77 Lê Trung Nghĩa, Phường 12,
                    Tân Bình, TP Hồ Chí Minh
                  </span>
                </div>
              </li>
              <li className="flex gap-3 items-center">
                <div className="size-8 min-w-[32px] border bg-white rounded-full flex items-center justify-center">
                  <img src="/images/location.png" alt="" />
                </div>
                <div className="">
                  <b className="font-semibold text-[16px] text-white">
                    Hotline:{" "}
                  </b>
                  <span className="text-white text-[14px]">0862 069 233</span>
                </div>
              </li>
            </ul>
          </div>
        </section>

        <section className="pt-[46px] text-white font-medium pb-3 text-[14px] leading-5">
          2024 By Rikkei Academy - Rikkei Education - All rights reserved.
        </section>
      </footer>
    </>
  );
}
