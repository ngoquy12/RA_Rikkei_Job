import { Button } from "@/components/ui/button";
import {
  Calendar,
  ChevronLeft,
  ChevronRight,
  Clock4,
  Ellipsis,
  MapPin,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function InterviewBooking() {
  return (
    <>
      <section>
        <div className="mb-6">
          <h3 className="text-[#2D2C2C] text-[18px] font-semibold leading-7">
            Lịch phỏng vấn
          </h3>
          <p className="text-[#676767] text-[14px] leading-6">
            Theo dõi lịch phỏng vấn mới nhất của bạn
          </p>
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <li className="p-5 rounded-lg shadow-sm border">
            <div className="flex gap-3">
              <img
                className="object-cover"
                src="/images/logo-rikkei-job-round.png"
                alt=""
              />
              <div>
                <Link
                  className="text-[#000000] text-[16px] leading-6 font-semibold"
                  to="#"
                >
                  Front-end Developer
                </Link>
                <p className="text-[#676767] text-[12px] leading-5">
                  Công ty Cổ phần Rikkeisoft
                </p>
              </div>
            </div>
            <div className="border-b my-4"></div>
            <ul className="flex flex-col gap-3">
              <li>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-2 min-w-[90px]">
                    <Calendar className="text-red-700" size={18} />
                    <p className="text-[14px] font-semibold leading-5">Ngày:</p>
                  </div>
                  <p className="text-[14px] text-gray-700">15/09/2024</p>
                </div>
              </li>
              <li>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-2 min-w-[90px]">
                    <Clock4 className="text-red-700" size={18} />
                    <p className="text-[14px] font-semibold leading-5">
                      Thời gian:
                    </p>
                  </div>
                  <p className="text-[14px] text-gray-700">15/09/2024</p>
                </div>
              </li>
              <li>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-2 min-w-[90px]">
                    <MapPin className="text-red-700" size={18} />
                    <p className="text-[14px] font-semibold leading-5">
                      Địa điểm:
                    </p>
                  </div>
                  <p className="text-[14px] line-clamp-2 max-w-full transition-all underline hover:text-red-600 leading-5">
                    <Link className="w-full" to="#">
                      https://drive.googlhttps://drive.googhttps://drive.googlhttps://drive.goog
                    </Link>
                  </p>
                </div>
              </li>
            </ul>
          </li>
          <li className="p-5 rounded-lg shadow-sm border">
            <div className="flex gap-3">
              <img
                className="object-cover"
                src="/images/logo-rikkei-job-round.png"
                alt=""
              />
              <div>
                <Link
                  className="text-[#000000] text-[16px] leading-6 font-semibold"
                  to="#"
                >
                  Front-end Developer
                </Link>
                <p className="text-[#676767] text-[12px] leading-5">
                  Công ty Cổ phần Rikkeisoft
                </p>
              </div>
            </div>
            <div className="border-b my-4"></div>
            <ul className="flex flex-col gap-3">
              <li>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-2 min-w-[90px]">
                    <Calendar className="text-red-700" size={18} />
                    <p className="text-[14px] font-semibold leading-5">Ngày:</p>
                  </div>
                  <p className="text-[14px] text-gray-700">15/09/2024</p>
                </div>
              </li>
              <li>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-2 min-w-[90px]">
                    <Clock4 className="text-red-700" size={18} />
                    <p className="text-[14px] font-semibold leading-5">
                      Thời gian:
                    </p>
                  </div>
                  <p className="text-[14px] text-gray-700">15/09/2024</p>
                </div>
              </li>
              <li>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-2 min-w-[90px]">
                    <MapPin className="text-red-700" size={18} />
                    <p className="text-[14px] font-semibold leading-5">
                      Địa điểm:
                    </p>
                  </div>
                  <p className="text-[14px] line-clamp-2 max-w-full transition-all underline hover:text-red-600 leading-5">
                    <Link className="w-full" to="#">
                      https://drive.googlhttps://drive.googhttps://drive.googlhttps://drive.goog
                    </Link>
                  </p>
                </div>
              </li>
            </ul>
          </li>
          <li className="p-5 rounded-lg shadow-sm border">
            <div className="flex gap-3">
              <img
                className="object-cover"
                src="/images/logo-rikkei-job-round.png"
                alt=""
              />
              <div>
                <Link
                  className="text-[#000000] text-[16px] leading-6 font-semibold"
                  to="#"
                >
                  Front-end Developer
                </Link>
                <p className="text-[#676767] text-[12px] leading-5">
                  Công ty Cổ phần Rikkeisoft
                </p>
              </div>
            </div>
            <div className="border-b my-4"></div>
            <ul className="flex flex-col gap-3">
              <li>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-2 min-w-[90px]">
                    <Calendar className="text-red-700" size={18} />
                    <p className="text-[14px] font-semibold leading-5">Ngày:</p>
                  </div>
                  <p className="text-[14px] text-gray-700">15/09/2024</p>
                </div>
              </li>
              <li>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-2 min-w-[90px]">
                    <Clock4 className="text-red-700" size={18} />
                    <p className="text-[14px] font-semibold leading-5">
                      Thời gian:
                    </p>
                  </div>
                  <p className="text-[14px] text-gray-700">15/09/2024</p>
                </div>
              </li>
              <li>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-2 min-w-[90px]">
                    <MapPin className="text-red-700" size={18} />
                    <p className="text-[14px] font-semibold leading-5">
                      Địa điểm:
                    </p>
                  </div>
                  <p className="text-[14px] line-clamp-2 max-w-full transition-all underline hover:text-red-600 leading-5">
                    <Link className="w-full" to="#">
                      https://drive.googlhttps://drive.googhttps://drive.googlhttps://drive.goog
                    </Link>
                  </p>
                </div>
              </li>
            </ul>
          </li>
          <li className="p-5 rounded-lg shadow-sm border">
            <div className="flex gap-3">
              <img
                className="object-cover"
                src="/images/logo-rikkei-job-round.png"
                alt=""
              />
              <div>
                <Link
                  className="text-[#000000] text-[16px] leading-6 font-semibold"
                  to="#"
                >
                  Front-end Developer
                </Link>
                <p className="text-[#676767] text-[12px] leading-5">
                  Công ty Cổ phần Rikkeisoft
                </p>
              </div>
            </div>
            <div className="border-b my-4"></div>
            <ul className="flex flex-col gap-3">
              <li>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-2 min-w-[90px]">
                    <Calendar className="text-red-700" size={18} />
                    <p className="text-[14px] font-semibold leading-5">Ngày:</p>
                  </div>
                  <p className="text-[14px] text-gray-700">15/09/2024</p>
                </div>
              </li>
              <li>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-2 min-w-[90px]">
                    <Clock4 className="text-red-700" size={18} />
                    <p className="text-[14px] font-semibold leading-5">
                      Thời gian:
                    </p>
                  </div>
                  <p className="text-[14px] text-gray-700">15/09/2024</p>
                </div>
              </li>
              <li>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-2 min-w-[90px]">
                    <MapPin className="text-red-700" size={18} />
                    <p className="text-[14px] font-semibold leading-5">
                      Địa điểm:
                    </p>
                  </div>
                  <p className="text-[14px] line-clamp-2 max-w-full transition-all underline hover:text-red-600 leading-5">
                    <Link className="w-full" to="#">
                      https://drive.googlhttps://drive.googhttps://drive.googlhttps://drive.goog
                    </Link>
                  </p>
                </div>
              </li>
            </ul>
          </li>
          <li className="p-5 rounded-lg shadow-sm border">
            <div className="flex gap-3">
              <img
                className="object-cover"
                src="/images/logo-rikkei-job-round.png"
                alt=""
              />
              <div>
                <Link
                  className="text-[#000000] text-[16px] leading-6 font-semibold"
                  to="#"
                >
                  Front-end Developer
                </Link>
                <p className="text-[#676767] text-[12px] leading-5">
                  Công ty Cổ phần Rikkeisoft
                </p>
              </div>
            </div>
            <div className="border-b my-4"></div>
            <ul className="flex flex-col gap-3">
              <li>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-2 min-w-[90px]">
                    <Calendar className="text-red-700" size={18} />
                    <p className="text-[14px] font-semibold leading-5">Ngày:</p>
                  </div>
                  <p className="text-[14px] text-gray-700">15/09/2024</p>
                </div>
              </li>
              <li>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-2 min-w-[90px]">
                    <Clock4 className="text-red-700" size={18} />
                    <p className="text-[14px] font-semibold leading-5">
                      Thời gian:
                    </p>
                  </div>
                  <p className="text-[14px] text-gray-700">15/09/2024</p>
                </div>
              </li>
              <li>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-2 min-w-[90px]">
                    <MapPin className="text-red-700" size={18} />
                    <p className="text-[14px] font-semibold leading-5">
                      Địa điểm:
                    </p>
                  </div>
                  <p className="text-[14px] line-clamp-2 max-w-full transition-all underline hover:text-red-600 leading-5">
                    <Link className="w-full" to="#">
                      https://drive.googlhttps://drive.googhttps://drive.googlhttps://drive.goog
                    </Link>
                  </p>
                </div>
              </li>
            </ul>
          </li>
          <li className="p-5 rounded-lg shadow-sm border">
            <div className="flex gap-3">
              <img
                className="object-cover"
                src="/images/logo-rikkei-job-round.png"
                alt=""
              />
              <div>
                <Link
                  className="text-[#000000] text-[16px] leading-6 font-semibold"
                  to="#"
                >
                  Front-end Developer
                </Link>
                <p className="text-[#676767] text-[12px] leading-5">
                  Công ty Cổ phần Rikkeisoft
                </p>
              </div>
            </div>
            <div className="border-b my-4"></div>
            <ul className="flex flex-col gap-3">
              <li>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-2 min-w-[90px]">
                    <Calendar className="text-red-700" size={18} />
                    <p className="text-[14px] font-semibold leading-5">Ngày:</p>
                  </div>
                  <p className="text-[14px] text-gray-700">15/09/2024</p>
                </div>
              </li>
              <li>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-2 min-w-[90px]">
                    <Clock4 className="text-red-700" size={18} />
                    <p className="text-[14px] font-semibold leading-5">
                      Thời gian:
                    </p>
                  </div>
                  <p className="text-[14px] text-gray-700">15/09/2024</p>
                </div>
              </li>
              <li>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-2 min-w-[90px]">
                    <MapPin className="text-red-700" size={18} />
                    <p className="text-[14px] font-semibold leading-5">
                      Địa điểm:
                    </p>
                  </div>
                  <p className="text-[14px] line-clamp-2 max-w-full transition-all underline hover:text-red-600 leading-5">
                    <Link className="w-full" to="#">
                      https://drive.googlhttps://drive.googhttps://drive.googlhttps://drive.goog
                    </Link>
                  </p>
                </div>
              </li>
            </ul>
          </li>
          <li className="p-5 rounded-lg shadow-sm border">
            <div className="flex gap-3">
              <img
                className="object-cover"
                src="/images/logo-rikkei-job-round.png"
                alt=""
              />
              <div>
                <Link
                  className="text-[#000000] text-[16px] leading-6 font-semibold"
                  to="#"
                >
                  Front-end Developer
                </Link>
                <p className="text-[#676767] text-[12px] leading-5">
                  Công ty Cổ phần Rikkeisoft
                </p>
              </div>
            </div>
            <div className="border-b my-4"></div>
            <ul className="flex flex-col gap-3">
              <li>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-2 min-w-[90px]">
                    <Calendar className="text-red-700" size={18} />
                    <p className="text-[14px] font-semibold leading-5">Ngày:</p>
                  </div>
                  <p className="text-[14px] text-gray-700">15/09/2024</p>
                </div>
              </li>
              <li>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-2 min-w-[90px]">
                    <Clock4 className="text-red-700" size={18} />
                    <p className="text-[14px] font-semibold leading-5">
                      Thời gian:
                    </p>
                  </div>
                  <p className="text-[14px] text-gray-700">15/09/2024</p>
                </div>
              </li>
              <li>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-2 min-w-[90px]">
                    <MapPin className="text-red-700" size={18} />
                    <p className="text-[14px] font-semibold leading-5">
                      Địa điểm:
                    </p>
                  </div>
                  <p className="text-[14px] line-clamp-2 max-w-full transition-all underline hover:text-red-600 leading-5">
                    <Link className="w-full" to="#">
                      https://drive.googlhttps://drive.googhttps://drive.googlhttps://drive.goog
                    </Link>
                  </p>
                </div>
              </li>
            </ul>
          </li>
          <li className="p-5 rounded-lg shadow-sm border">
            <div className="flex gap-3">
              <img
                className="object-cover"
                src="/images/logo-rikkei-job-round.png"
                alt=""
              />
              <div>
                <Link
                  className="text-[#000000] text-[16px] leading-6 font-semibold"
                  to="#"
                >
                  Front-end Developer
                </Link>
                <p className="text-[#676767] text-[12px] leading-5">
                  Công ty Cổ phần Rikkeisoft
                </p>
              </div>
            </div>
            <div className="border-b my-4"></div>
            <ul className="flex flex-col gap-3">
              <li>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-2 min-w-[90px]">
                    <Calendar className="text-red-700" size={18} />
                    <p className="text-[14px] font-semibold leading-5">Ngày:</p>
                  </div>
                  <p className="text-[14px] text-gray-700">15/09/2024</p>
                </div>
              </li>
              <li>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-2 min-w-[90px]">
                    <Clock4 className="text-red-700" size={18} />
                    <p className="text-[14px] font-semibold leading-5">
                      Thời gian:
                    </p>
                  </div>
                  <p className="text-[14px] text-gray-700">15/09/2024</p>
                </div>
              </li>
              <li>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-2 min-w-[90px]">
                    <MapPin className="text-red-700" size={18} />
                    <p className="text-[14px] font-semibold leading-5">
                      Địa điểm:
                    </p>
                  </div>
                  <p className="text-[14px] line-clamp-2 max-w-full transition-all underline hover:text-red-600 leading-5">
                    <Link className="w-full" to="#">
                      https://drive.googlhttps://drive.googhttps://drive.googlhttps://drive.goog
                    </Link>
                  </p>
                </div>
              </li>
            </ul>
          </li>
          <li className="p-5 rounded-lg shadow-sm border">
            <div className="flex gap-3">
              <img
                className="object-cover"
                src="/images/logo-rikkei-job-round.png"
                alt=""
              />
              <div>
                <Link
                  className="text-[#000000] text-[16px] leading-6 font-semibold"
                  to="#"
                >
                  Front-end Developer
                </Link>
                <p className="text-[#676767] text-[12px] leading-5">
                  Công ty Cổ phần Rikkeisoft
                </p>
              </div>
            </div>
            <div className="border-b my-4"></div>
            <ul className="flex flex-col gap-3">
              <li>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-2 min-w-[90px]">
                    <Calendar className="text-red-700" size={18} />
                    <p className="text-[14px] font-semibold leading-5">Ngày:</p>
                  </div>
                  <p className="text-[14px] text-gray-700">15/09/2024</p>
                </div>
              </li>
              <li>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-2 min-w-[90px]">
                    <Clock4 className="text-red-700" size={18} />
                    <p className="text-[14px] font-semibold leading-5">
                      Thời gian:
                    </p>
                  </div>
                  <p className="text-[14px] text-gray-700">15/09/2024</p>
                </div>
              </li>
              <li>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-2 min-w-[90px]">
                    <MapPin className="text-red-700" size={18} />
                    <p className="text-[14px] font-semibold leading-5">
                      Địa điểm:
                    </p>
                  </div>
                  <p className="text-[14px] line-clamp-2 max-w-full transition-all underline hover:text-red-600 leading-5">
                    <Link className="w-full" to="#">
                      https://drive.googlhttps://drive.googhttps://drive.googlhttps://drive.goog
                    </Link>
                  </p>
                </div>
              </li>
            </ul>
          </li>
        </ul>

        {/* Phân trang danh sách công việc */}

        <ul className="flex justify-end gap-1 items-center mt-[40px] my-[80px]">
          <Button
            size={"icon"}
            variant={"ghost"}
            className="rounded-full bg-[#F8E9EA] text-[#AB1F24]"
          >
            1
          </Button>
          <Button
            size={"icon"}
            variant={"ghost"}
            className="rounded-full text-[#919191]"
          >
            2
          </Button>
          <Button
            size={"icon"}
            variant={"ghost"}
            className="rounded-full text-[#919191]"
          >
            <Ellipsis className="text-[#919191]" />
          </Button>

          <Button
            size={"icon"}
            variant={"ghost"}
            className="rounded-full text-[#919191]"
          >
            5
          </Button>
          <Button
            size={"icon"}
            variant={"ghost"}
            className="rounded-full text-[#919191]"
          >
            6
          </Button>
          <Button
            size={"icon"}
            variant={"ghost"}
            className="rounded-full text-[#919191]"
          >
            7
          </Button>
          <Button
            size={"icon"}
            variant={"ghost"}
            className="rounded-full text-[#919191]"
          >
            <ChevronLeft />
          </Button>
          <Button
            size={"icon"}
            variant={"ghost"}
            className="rounded-full text-[#919191]"
          >
            <ChevronRight />
          </Button>
        </ul>
      </section>
    </>
  );
}
