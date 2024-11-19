import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  ChevronLeft,
  ChevronRight,
  Ellipsis,
  Heart,
  LayoutGrid,
  Search,
  StretchHorizontal,
} from "lucide-react";
import { useState } from "react";

export default function ListJob() {
  const [typeView, setTypeView] = useState<"column" | "row">("column");

  // Thay đổi kiểu hiển thị danh sách công việc
  const handleChangeTypeView = (type: "column" | "row") => {
    setTypeView(type);
  };
  return (
    <>
      {/* Banner list job */}
      <section className="relative bg-[url('/images/listJobs/bg-banner-list-job.png')] h-[320px] bg-no-repeat bg-cover w-full">
        <div className="bg-[url('/images/listJobs/low-angle-businessmen-shaking-hands.png')] bg-right absolute h-full w-full bg-no-repeat">
          <div className="bg-[url('/images/listJobs/bg-banner-list-job-cover.png')] w-full h-full bg-cover bg-no-repeat flex items-center justify-center flex-col">
            <h3 className="text-white leading-[48px] text-[20px] md:text-[36px] lg:text-[40px] font-semibold mb-1">
              Khơi dậy tiềm lực - Mở lối thành công!
            </h3>
            <p className="text-[12px] md:text-[16px] lg:text-[16px] leading-6 font-normal text-white mb-4">
              Rikkei Jobs - đồng hành trên phát triển con đường sự nghiệp của
              bạn.
            </p>
            <ul className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2">
              <li className="flex items-center bg-white gap-2 px-2 rounded-[14px] text-[12px] font-semibold leading-5 py-1">
                <img src="/images/tick-circle.png" alt="" />
                <p>Lương cao</p>
              </li>
              <li className="flex items-center bg-white gap-2 px-2 rounded-[14px] text-[12px] font-semibold leading-5 py-1">
                <img src="/images/tick-circle.png" alt="" />
                <p>Phúc lợi hấp dẫn</p>
              </li>
              <li className="flex items-center bg-white gap-2 px-2 rounded-[14px] text-[12px] font-semibold leading-5 py-1">
                <img src="/images/tick-circle.png" alt="" />
                <p>Môi trường phát triển</p>
              </li>
              <li className="flex items-center bg-white gap-2 px-2 rounded-[14px] text-[12px] font-semibold leading-5 py-1">
                <img src="/images/tick-circle.png" alt="" />
                <p>Cơ hội thăng tiến</p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Tất cả việc làm */}
      <section className="px-[24px] lg:px-[120px] py-[40px] lg:py-[80px] mb-12">
        <header className="grid grid-cols-1 lg:grid-cols-2 gap-3 mb-12">
          <div className="relative flex items-center h-[40px]">
            <Search size={18} className="text-[#BC2228] absolute left-4" />
            <Input
              placeholder="Vị trí ứng tuyển"
              className="pl-[40px] h-full"
            />
          </div>

          <div className="flex gap-3">
            <div className="w-full relative flex items-center">
              <img
                className="absolute left-4"
                src="/images/briefcase.png"
                alt=""
              />
              <Select>
                <SelectTrigger className="w-full pl-[40px]">
                  <SelectValue placeholder="Tất cả ngành nghề" />
                </SelectTrigger>
                <SelectContent className="">
                  <SelectItem
                    className="cursor-pointer transition-all"
                    value="light"
                  >
                    Lập trình viên
                  </SelectItem>
                  <SelectItem
                    className="cursor-pointer transition-all"
                    value="dark"
                  >
                    Quản lý
                  </SelectItem>
                  <SelectItem
                    className="cursor-pointer transition-all"
                    value="system"
                  >
                    Trợ lý giám đốc
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="w-full relative flex items-center">
              <img
                className="absolute left-4"
                src="/images/location.png"
                alt=""
              />
              <Select>
                <SelectTrigger className="w-full pl-[40px]">
                  <SelectValue placeholder="Tất cả ngành nghề" />
                </SelectTrigger>
                <SelectContent className="">
                  <SelectItem
                    className="cursor-pointer transition-all"
                    value="light"
                  >
                    Lập trình viên
                  </SelectItem>
                  <SelectItem
                    className="cursor-pointer transition-all"
                    value="dark"
                  >
                    Quản lý
                  </SelectItem>
                  <SelectItem
                    className="cursor-pointer transition-all"
                    value="system"
                  >
                    Trợ lý giám đốc
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button className="ml-3" variant={"destructive"}>
              Tìm kiếm
            </Button>
          </div>
        </header>

        {/* Chọn cách thức hiển thị cột / hàng */}
        <div className="flex justify-between items-center mb-6">
          <h3 className="font-semibold text-[24px] leading-8">
            Tất cả việc làm
          </h3>
          <div className="flex items-center gap-4">
            <Select>
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Sắp xếp theo: Mới nhất" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Sắp xếp mới nhất</SelectItem>
                <SelectItem value="dark">Sắp xếp cũ nhất</SelectItem>
              </SelectContent>
            </Select>
            <div className="flex gap-2">
              <Button
                onClick={() => handleChangeTypeView("row")}
                className={`${
                  typeView === "row" && "text-red-700 border-red-700"
                } hover:bg-red-50 hover:text-red-600`}
                variant={"outline"}
                size={"icon"}
              >
                <StretchHorizontal />
              </Button>
              <Button
                onClick={() => handleChangeTypeView("column")}
                variant={"outline"}
                size={"icon"}
                className={`${
                  typeView === "column" && "text-red-700 border-red-700"
                } hover:bg-red-50 hover:text-red-600`}
              >
                <LayoutGrid />
              </Button>
            </div>
          </div>
        </div>

        {/* Danh sách công việc */}
        {typeView === "row" ? (
          <ul className="mt-6 grid grid-cols-1 gap-3 mb-[48px]">
            <li className="border rounded-lg p-5 shadow-sm bg-[#FAFAFA] flex justify-between">
              {/* Cart job left */}
              <div className="flex gap-5 items-center">
                <img
                  className="w-[120px] h-[120px] object-cover rounded-md"
                  src="https://homehome.vn/wp-content/uploads/6-mau-hinh-anh-noi-that-nha-dep-theo-phong-cach-hien-dai-6.jpg"
                  alt=""
                />
                <div>
                  <div>
                    <h3 className="text-[18px] font-semibold leading-[28px] mb-2">
                      SE/BrSE (Outsystem) làm việc tại Tokyo/Nagoya
                    </h3>
                    <ul className="flex items-center gap-2">
                      <li className="w-fit text-[12px] px-3 py-[2px] bg-[#ECFDF3] text-[#027A48] rounded-[16px] font-semibold]">
                        Fresher
                      </li>
                      <li className="w-fit text-[12px] px-3 py-[2px] bg-[#EEF4FF] text-[#3538CD] rounded-[16px] font-semibold]">
                        Fresher
                      </li>
                      <li className="w-fit text-[12px] px-3 py-[2px] bg-[#FFF6ED] text-[#C4320A] rounded-[16px] font-semibold]">
                        Fresher
                      </li>
                      <li className="h-[26px] w-[26px] border text-[12px] font-semibold leading-5 flex items-center justify-center p-[6px] rounded-full cursor-pointer hover:opacity-85 bg-[#DDDDDD] text-[#676767]">
                        +12
                      </li>
                    </ul>
                  </div>
                  <div className="mt-3">
                    <ul className="flex items-center gap-3">
                      <li className="flex gap-2 items-center text-[12px]">
                        <img
                          className="size-[16px]"
                          src="/images/clock.png"
                          alt=""
                        />
                        <p>Cập nhật 3 giờ trước</p>
                      </li>
                      <li className="flex gap-2 items-center text-[12px]">
                        <img
                          className="size-[16px]"
                          src="/images/flag-jp.png"
                          alt=""
                        />
                        <p>Nhật Bản</p>
                      </li>
                      <li className="flex gap-2 items-center text-[12px]">
                        <img
                          className="size-[16px]"
                          src="/images/briefcase.png"
                          alt=""
                        />
                        <p>Toàn thời gian</p>
                      </li>
                    </ul>
                    <p className="text-[12px] text-[#848484] mt-2">
                      Còn <b className="font-semibold">10</b> ngày để ứng tuyển
                    </p>
                  </div>
                </div>
              </div>

              {/* Cart job right */}
              <div className="flex flex-col justify-between">
                <div className="text-[16px] text-[#BC2228] font-semibold leading-6 text-end">
                  500-700 man
                </div>
                <div className="flex gap-3">
                  <Button variant={"destructive"}>Ứng tuyển</Button>
                  <Button size={"icon"} variant={"outline"}>
                    <Heart />
                  </Button>
                </div>
              </div>
            </li>
            <li className="border rounded-lg p-5 shadow-sm bg-[#FAFAFA] flex justify-between">
              {/* Cart job left */}
              <div className="flex gap-5 items-center">
                <img
                  className="w-[120px] h-[120px] object-cover rounded-md"
                  src="https://homehome.vn/wp-content/uploads/6-mau-hinh-anh-noi-that-nha-dep-theo-phong-cach-hien-dai-6.jpg"
                  alt=""
                />
                <div>
                  <div>
                    <h3 className="text-[18px] font-semibold leading-[28px] mb-2">
                      SE/BrSE (Outsystem) làm việc tại Tokyo/Nagoya
                    </h3>
                    <ul className="flex items-center gap-2">
                      <li className="w-fit px-3 py-[2px] bg-[#ECFDF3] text-[#027A48] rounded-[16px] font-semibold]">
                        Fresher
                      </li>
                      <li className="w-fit px-3 py-[2px] bg-[#EEF4FF] text-[#3538CD] rounded-[16px] font-semibold]">
                        Fresher
                      </li>
                      <li className="w-fit px-3 py-[2px] bg-[#FFF6ED] text-[#C4320A] rounded-[16px] font-semibold]">
                        Fresher
                      </li>
                      <li className="h-[26px] w-[26px] border text-[12px] font-semibold leading-5 flex items-center justify-center p-[6px] rounded-full cursor-pointer hover:opacity-85 bg-[#DDDDDD] text-[#676767]">
                        +12
                      </li>
                    </ul>
                  </div>
                  <div className="mt-3">
                    <ul className="flex items-center gap-3">
                      <li className="flex gap-2 items-center text-[12px]">
                        <img
                          className="size-[16px]"
                          src="/images/clock.png"
                          alt=""
                        />
                        <p>Cập nhật 3 giờ trước</p>
                      </li>
                      <li className="flex gap-2 items-center text-[12px]">
                        <img
                          className="size-[16px]"
                          src="/images/flag-jp.png"
                          alt=""
                        />
                        <p>Nhật Bản</p>
                      </li>
                      <li className="flex gap-2 items-center text-[12px]">
                        <img
                          className="size-[16px]"
                          src="/images/briefcase.png"
                          alt=""
                        />
                        <p>Toàn thời gian</p>
                      </li>
                    </ul>
                    <p className="text-[12px] text-[#848484] mt-2">
                      Còn <b className="font-semibold">10</b> ngày để ứng tuyển
                    </p>
                  </div>
                </div>
              </div>

              {/* Cart job right */}
              <div className="flex flex-col justify-between">
                <div className="text-[16px] text-[#BC2228] font-semibold leading-6 text-end">
                  500-700 man
                </div>
                <div className="flex gap-3">
                  <Button variant={"destructive"}>Ứng tuyển</Button>
                  <Button size={"icon"} variant={"outline"}>
                    <Heart />
                  </Button>
                </div>
              </div>
            </li>
          </ul>
        ) : (
          <ul className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-[48px]">
            <li className="border rounded-lg p-5 shadow-sm bg-[#FAFAFA]">
              {/* Cart job left */}
              <div className="flex gap-5 items-center">
                <img
                  className="w-[80px] h-[80px] object-cover rounded-md"
                  src="https://homehome.vn/wp-content/uploads/6-mau-hinh-anh-noi-that-nha-dep-theo-phong-cach-hien-dai-6.jpg"
                  alt=""
                />
                <div>
                  <h3
                    title="SE/BrSE (Outsystem) làm việc tại Tokyo/Nagoya với đãi ngộ cao"
                    className="text-[16px] font-semibold leading-[24px] mb-2 line-clamp-2 max-w-fit"
                  >
                    SE/BrSE (Outsystem) làm việc tại Thành Phố Hồ Chí Minh với
                    đãi ngộ cao
                  </h3>
                  <ul className="flex items-center gap-2">
                    <li className="w-fit px-3 py-[2px] bg-[#ECFDF3] text-[#027A48] rounded-[16px] font-semibold]">
                      Fresher
                    </li>
                    <li className="w-fit px-3 py-[2px] bg-[#EEF4FF] text-[#3538CD] rounded-[16px] font-semibold]">
                      Fresher
                    </li>
                    <li className="w-fit px-3 py-[2px] bg-[#FFF6ED] text-[#C4320A] rounded-[16px] font-semibold]">
                      Fresher
                    </li>
                    <li className="h-[26px] w-[26px] border text-[12px] font-semibold leading-5 flex items-center justify-center p-[6px] rounded-full cursor-pointer hover:opacity-85 bg-[#DDDDDD] text-[#676767]">
                      +12
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-4">
                <ul className="flex items-center gap-3">
                  <li className="flex gap-2 items-center text-[12px]">
                    <img
                      className="size-[16px]"
                      src="/images/clock.png"
                      alt=""
                    />
                    <p>Cập nhật 3 giờ trước</p>
                  </li>
                  <li className="flex gap-2 items-center text-[12px]">
                    <img
                      className="size-[16px]"
                      src="/images/flag-jp.png"
                      alt=""
                    />
                    <p>Nhật Bản</p>
                  </li>
                  <li className="flex gap-2 items-center text-[12px]">
                    <img
                      className="size-[16px]"
                      src="/images/briefcase.png"
                      alt=""
                    />
                    <p>Toàn thời gian</p>
                  </li>
                </ul>
              </div>

              {/* Cart job right */}
              <div className="flex items-center justify-between mt-4">
                <p className="text-[12px] text-[#848484] mt-2">
                  Cập nhật <b className="font-semibold">3</b> giờ trước - Còn{" "}
                  <b className="font-semibold">10</b> ngày để ứng tuyển
                </p>
                <Button size={"icon"} variant={"outline"}>
                  <Heart />
                </Button>
              </div>
            </li>
            <li className="border rounded-lg p-5 shadow-sm bg-[#FAFAFA]">
              {/* Cart job left */}
              <div className="flex gap-5 items-center">
                <img
                  className="w-[80px] h-[80px] object-cover rounded-md"
                  src="https://homehome.vn/wp-content/uploads/6-mau-hinh-anh-noi-that-nha-dep-theo-phong-cach-hien-dai-6.jpg"
                  alt=""
                />
                <div>
                  <h3
                    title="SE/BrSE (Outsystem) làm việc tại Tokyo/Nagoya với đãi ngộ cao"
                    className="text-[16px] font-semibold leading-[24px] mb-2 line-clamp-2 max-w-fit"
                  >
                    SE/BrSE (Outsystem) làm việc tại Thành Phố Hồ Chí Minh với
                    đãi ngộ cao
                  </h3>
                  <ul className="flex items-center gap-2">
                    <li className="w-fit px-3 py-[2px] bg-[#ECFDF3] text-[#027A48] rounded-[16px] font-semibold]">
                      Fresher
                    </li>
                    <li className="w-fit px-3 py-[2px] bg-[#EEF4FF] text-[#3538CD] rounded-[16px] font-semibold]">
                      Fresher
                    </li>
                    <li className="w-fit px-3 py-[2px] bg-[#FFF6ED] text-[#C4320A] rounded-[16px] font-semibold]">
                      Fresher
                    </li>
                    <li className="h-[26px] w-[26px] border text-[12px] font-semibold leading-5 flex items-center justify-center p-[6px] rounded-full cursor-pointer hover:opacity-85 bg-[#DDDDDD] text-[#676767]">
                      +12
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-4">
                <ul className="flex items-center gap-3">
                  <li className="flex gap-2 items-center text-[12px]">
                    <img
                      className="size-[16px]"
                      src="/images/clock.png"
                      alt=""
                    />
                    <p>Cập nhật 3 giờ trước</p>
                  </li>
                  <li className="flex gap-2 items-center text-[12px]">
                    <img
                      className="size-[16px]"
                      src="/images/flag-jp.png"
                      alt=""
                    />
                    <p>Nhật Bản</p>
                  </li>
                  <li className="flex gap-2 items-center text-[12px]">
                    <img
                      className="size-[16px]"
                      src="/images/briefcase.png"
                      alt=""
                    />
                    <p>Toàn thời gian</p>
                  </li>
                </ul>
              </div>

              {/* Cart job right */}
              <div className="flex items-center justify-between mt-4">
                <p className="text-[12px] text-[#848484] mt-2">
                  Cập nhật <b className="font-semibold">3</b> giờ trước - Còn{" "}
                  <b className="font-semibold">10</b> ngày để ứng tuyển
                </p>
                <Button size={"icon"} variant={"outline"}>
                  <Heart />
                </Button>
              </div>
            </li>
            <li className="border rounded-lg p-5 shadow-sm bg-[#FAFAFA]">
              {/* Cart job left */}
              <div className="flex gap-5 items-center">
                <img
                  className="w-[80px] h-[80px] object-cover rounded-md"
                  src="https://homehome.vn/wp-content/uploads/6-mau-hinh-anh-noi-that-nha-dep-theo-phong-cach-hien-dai-6.jpg"
                  alt=""
                />
                <div>
                  <h3
                    title="SE/BrSE (Outsystem) làm việc tại Tokyo/Nagoya với đãi ngộ cao"
                    className="text-[16px] font-semibold leading-[24px] mb-2 line-clamp-2 max-w-fit"
                  >
                    SE/BrSE (Outsystem) làm việc tại Thành Phố Hồ Chí Minh với
                    đãi ngộ cao
                  </h3>
                  <ul className="flex items-center gap-2">
                    <li className="w-fit px-3 py-[2px] bg-[#ECFDF3] text-[#027A48] rounded-[16px] font-semibold]">
                      Fresher
                    </li>
                    <li className="w-fit px-3 py-[2px] bg-[#EEF4FF] text-[#3538CD] rounded-[16px] font-semibold]">
                      Fresher
                    </li>
                    <li className="w-fit px-3 py-[2px] bg-[#FFF6ED] text-[#C4320A] rounded-[16px] font-semibold]">
                      Fresher
                    </li>
                    <li className="h-[26px] w-[26px] border text-[12px] font-semibold leading-5 flex items-center justify-center p-[6px] rounded-full cursor-pointer hover:opacity-85 bg-[#DDDDDD] text-[#676767]">
                      +12
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-4">
                <ul className="flex items-center gap-3">
                  <li className="flex gap-2 items-center text-[12px]">
                    <img
                      className="size-[16px]"
                      src="/images/clock.png"
                      alt=""
                    />
                    <p>Cập nhật 3 giờ trước</p>
                  </li>
                  <li className="flex gap-2 items-center text-[12px]">
                    <img
                      className="size-[16px]"
                      src="/images/flag-jp.png"
                      alt=""
                    />
                    <p>Nhật Bản</p>
                  </li>
                  <li className="flex gap-2 items-center text-[12px]">
                    <img
                      className="size-[16px]"
                      src="/images/briefcase.png"
                      alt=""
                    />
                    <p>Toàn thời gian</p>
                  </li>
                </ul>
              </div>

              {/* Cart job right */}
              <div className="flex items-center justify-between mt-4">
                <p className="text-[12px] text-[#848484] mt-2">
                  Cập nhật <b className="font-semibold">3</b> giờ trước - Còn{" "}
                  <b className="font-semibold">10</b> ngày để ứng tuyển
                </p>
                <Button size={"icon"} variant={"outline"}>
                  <Heart />
                </Button>
              </div>
            </li>
            <li className="border rounded-lg p-5 shadow-sm bg-[#FAFAFA]">
              {/* Cart job left */}
              <div className="flex gap-5 items-center">
                <img
                  className="w-[80px] h-[80px] object-cover rounded-md"
                  src="https://homehome.vn/wp-content/uploads/6-mau-hinh-anh-noi-that-nha-dep-theo-phong-cach-hien-dai-6.jpg"
                  alt=""
                />
                <div>
                  <h3
                    title="SE/BrSE (Outsystem) làm việc tại Tokyo/Nagoya với đãi ngộ cao"
                    className="text-[16px] font-semibold leading-[24px] mb-2 line-clamp-2 max-w-fit"
                  >
                    SE/BrSE (Outsystem) làm việc tại Thành Phố Hồ Chí Minh với
                    đãi ngộ cao
                  </h3>
                  <ul className="flex items-center gap-2">
                    <li className="w-fit px-3 py-[2px] bg-[#ECFDF3] text-[#027A48] rounded-[16px] font-semibold]">
                      Fresher
                    </li>
                    <li className="w-fit px-3 py-[2px] bg-[#EEF4FF] text-[#3538CD] rounded-[16px] font-semibold]">
                      Fresher
                    </li>
                    <li className="w-fit px-3 py-[2px] bg-[#FFF6ED] text-[#C4320A] rounded-[16px] font-semibold]">
                      Fresher
                    </li>
                    <li className="h-[26px] w-[26px] border text-[12px] font-semibold leading-5 flex items-center justify-center p-[6px] rounded-full cursor-pointer hover:opacity-85 bg-[#DDDDDD] text-[#676767]">
                      +12
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-4">
                <ul className="flex items-center gap-3">
                  <li className="flex gap-2 items-center text-[12px]">
                    <img
                      className="size-[16px]"
                      src="/images/clock.png"
                      alt=""
                    />
                    <p>Cập nhật 3 giờ trước</p>
                  </li>
                  <li className="flex gap-2 items-center text-[12px]">
                    <img
                      className="size-[16px]"
                      src="/images/flag-jp.png"
                      alt=""
                    />
                    <p>Nhật Bản</p>
                  </li>
                  <li className="flex gap-2 items-center text-[12px]">
                    <img
                      className="size-[16px]"
                      src="/images/briefcase.png"
                      alt=""
                    />
                    <p>Toàn thời gian</p>
                  </li>
                </ul>
              </div>

              {/* Cart job right */}
              <div className="flex items-center justify-between mt-4">
                <p className="text-[12px] text-[#848484] mt-2">
                  Cập nhật <b className="font-semibold">3</b> giờ trước - Còn{" "}
                  <b className="font-semibold">10</b> ngày để ứng tuyển
                </p>
                <Button size={"icon"} variant={"outline"}>
                  <Heart />
                </Button>
              </div>
            </li>
            <li className="border rounded-lg p-5 shadow-sm bg-[#FAFAFA]">
              {/* Cart job left */}
              <div className="flex gap-5 items-center">
                <img
                  className="w-[80px] h-[80px] object-cover rounded-md"
                  src="https://homehome.vn/wp-content/uploads/6-mau-hinh-anh-noi-that-nha-dep-theo-phong-cach-hien-dai-6.jpg"
                  alt=""
                />
                <div>
                  <h3
                    title="SE/BrSE (Outsystem) làm việc tại Tokyo/Nagoya với đãi ngộ cao"
                    className="text-[16px] font-semibold leading-[24px] mb-2 line-clamp-2 max-w-fit"
                  >
                    SE/BrSE (Outsystem) làm việc tại Thành Phố Hồ Chí Minh với
                    đãi ngộ cao
                  </h3>
                  <ul className="flex items-center gap-2">
                    <li className="w-fit px-3 py-[2px] bg-[#ECFDF3] text-[#027A48] rounded-[16px] font-semibold]">
                      Fresher
                    </li>
                    <li className="w-fit px-3 py-[2px] bg-[#EEF4FF] text-[#3538CD] rounded-[16px] font-semibold]">
                      Fresher
                    </li>
                    <li className="w-fit px-3 py-[2px] bg-[#FFF6ED] text-[#C4320A] rounded-[16px] font-semibold]">
                      Fresher
                    </li>
                    <li className="h-[26px] w-[26px] border text-[12px] font-semibold leading-5 flex items-center justify-center p-[6px] rounded-full cursor-pointer hover:opacity-85 bg-[#DDDDDD] text-[#676767]">
                      +12
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-4">
                <ul className="flex items-center gap-3">
                  <li className="flex gap-2 items-center text-[12px]">
                    <img
                      className="size-[16px]"
                      src="/images/clock.png"
                      alt=""
                    />
                    <p>Cập nhật 3 giờ trước</p>
                  </li>
                  <li className="flex gap-2 items-center text-[12px]">
                    <img
                      className="size-[16px]"
                      src="/images/flag-jp.png"
                      alt=""
                    />
                    <p>Nhật Bản</p>
                  </li>
                  <li className="flex gap-2 items-center text-[12px]">
                    <img
                      className="size-[16px]"
                      src="/images/briefcase.png"
                      alt=""
                    />
                    <p>Toàn thời gian</p>
                  </li>
                </ul>
              </div>

              {/* Cart job right */}
              <div className="flex items-center justify-between mt-4">
                <p className="text-[12px] text-[#848484] mt-2">
                  Cập nhật <b className="font-semibold">3</b> giờ trước - Còn{" "}
                  <b className="font-semibold">10</b> ngày để ứng tuyển
                </p>
                <Button size={"icon"} variant={"outline"}>
                  <Heart />
                </Button>
              </div>
            </li>
            <li className="border rounded-lg p-5 shadow-sm bg-[#FAFAFA]">
              {/* Cart job left */}
              <div className="flex gap-5 items-center">
                <img
                  className="w-[80px] h-[80px] object-cover rounded-md"
                  src="https://homehome.vn/wp-content/uploads/6-mau-hinh-anh-noi-that-nha-dep-theo-phong-cach-hien-dai-6.jpg"
                  alt=""
                />
                <div>
                  <h3
                    title="SE/BrSE (Outsystem) làm việc tại Tokyo/Nagoya với đãi ngộ cao"
                    className="text-[16px] font-semibold leading-[24px] mb-2 line-clamp-2 max-w-fit"
                  >
                    SE/BrSE (Outsystem) làm việc tại Thành Phố Hồ Chí Minh với
                    đãi ngộ cao
                  </h3>
                  <ul className="flex items-center gap-2">
                    <li className="w-fit px-3 py-[2px] bg-[#ECFDF3] text-[#027A48] rounded-[16px] font-semibold]">
                      Fresher
                    </li>
                    <li className="w-fit px-3 py-[2px] bg-[#EEF4FF] text-[#3538CD] rounded-[16px] font-semibold]">
                      Fresher
                    </li>
                    <li className="w-fit px-3 py-[2px] bg-[#FFF6ED] text-[#C4320A] rounded-[16px] font-semibold]">
                      Fresher
                    </li>
                    <li className="h-[26px] w-[26px] border text-[12px] font-semibold leading-5 flex items-center justify-center p-[6px] rounded-full cursor-pointer hover:opacity-85 bg-[#DDDDDD] text-[#676767]">
                      +12
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-4">
                <ul className="flex items-center gap-3">
                  <li className="flex gap-2 items-center text-[12px]">
                    <img
                      className="size-[16px]"
                      src="/images/clock.png"
                      alt=""
                    />
                    <p>Cập nhật 3 giờ trước</p>
                  </li>
                  <li className="flex gap-2 items-center text-[12px]">
                    <img
                      className="size-[16px]"
                      src="/images/flag-jp.png"
                      alt=""
                    />
                    <p>Nhật Bản</p>
                  </li>
                  <li className="flex gap-2 items-center text-[12px]">
                    <img
                      className="size-[16px]"
                      src="/images/briefcase.png"
                      alt=""
                    />
                    <p>Toàn thời gian</p>
                  </li>
                </ul>
              </div>

              {/* Cart job right */}
              <div className="flex items-center justify-between mt-4">
                <p className="text-[12px] text-[#848484] mt-2">
                  Cập nhật <b className="font-semibold">3</b> giờ trước - Còn{" "}
                  <b className="font-semibold">10</b> ngày để ứng tuyển
                </p>
                <Button size={"icon"} variant={"outline"}>
                  <Heart />
                </Button>
              </div>
            </li>
            <li className="border rounded-lg p-5 shadow-sm bg-[#FAFAFA]">
              {/* Cart job left */}
              <div className="flex gap-5 items-center">
                <img
                  className="w-[80px] h-[80px] object-cover rounded-md"
                  src="https://homehome.vn/wp-content/uploads/6-mau-hinh-anh-noi-that-nha-dep-theo-phong-cach-hien-dai-6.jpg"
                  alt=""
                />
                <div>
                  <h3
                    title="SE/BrSE (Outsystem) làm việc tại Tokyo/Nagoya với đãi ngộ cao"
                    className="text-[16px] font-semibold leading-[24px] mb-2 line-clamp-2 max-w-fit"
                  >
                    SE/BrSE (Outsystem) làm việc tại Thành Phố Hồ Chí Minh với
                    đãi ngộ cao
                  </h3>
                  <ul className="flex items-center gap-2">
                    <li className="w-fit px-3 py-[2px] bg-[#ECFDF3] text-[#027A48] rounded-[16px] font-semibold]">
                      Fresher
                    </li>
                    <li className="w-fit px-3 py-[2px] bg-[#EEF4FF] text-[#3538CD] rounded-[16px] font-semibold]">
                      Fresher
                    </li>
                    <li className="w-fit px-3 py-[2px] bg-[#FFF6ED] text-[#C4320A] rounded-[16px] font-semibold]">
                      Fresher
                    </li>
                    <li className="h-[26px] w-[26px] border text-[12px] font-semibold leading-5 flex items-center justify-center p-[6px] rounded-full cursor-pointer hover:opacity-85 bg-[#DDDDDD] text-[#676767]">
                      +12
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-4">
                <ul className="flex items-center gap-3">
                  <li className="flex gap-2 items-center text-[12px]">
                    <img
                      className="size-[16px]"
                      src="/images/clock.png"
                      alt=""
                    />
                    <p>Cập nhật 3 giờ trước</p>
                  </li>
                  <li className="flex gap-2 items-center text-[12px]">
                    <img
                      className="size-[16px]"
                      src="/images/flag-jp.png"
                      alt=""
                    />
                    <p>Nhật Bản</p>
                  </li>
                  <li className="flex gap-2 items-center text-[12px]">
                    <img
                      className="size-[16px]"
                      src="/images/briefcase.png"
                      alt=""
                    />
                    <p>Toàn thời gian</p>
                  </li>
                </ul>
              </div>

              {/* Cart job right */}
              <div className="flex items-center justify-between mt-4">
                <p className="text-[12px] text-[#848484] mt-2">
                  Cập nhật <b className="font-semibold">3</b> giờ trước - Còn{" "}
                  <b className="font-semibold">10</b> ngày để ứng tuyển
                </p>
                <Button size={"icon"} variant={"outline"}>
                  <Heart />
                </Button>
              </div>
            </li>
            <li className="border rounded-lg p-5 shadow-sm bg-[#FAFAFA]">
              {/* Cart job left */}
              <div className="flex gap-5 items-center">
                <img
                  className="w-[80px] h-[80px] object-cover rounded-md"
                  src="https://homehome.vn/wp-content/uploads/6-mau-hinh-anh-noi-that-nha-dep-theo-phong-cach-hien-dai-6.jpg"
                  alt=""
                />
                <div>
                  <h3
                    title="SE/BrSE (Outsystem) làm việc tại Tokyo/Nagoya với đãi ngộ cao"
                    className="text-[16px] font-semibold leading-[24px] mb-2 line-clamp-2 max-w-fit"
                  >
                    SE/BrSE (Outsystem) làm việc tại Thành Phố Hồ Chí Minh với
                    đãi ngộ cao
                  </h3>
                  <ul className="flex items-center gap-2">
                    <li className="w-fit px-3 py-[2px] bg-[#ECFDF3] text-[#027A48] rounded-[16px] font-semibold]">
                      Fresher
                    </li>
                    <li className="w-fit px-3 py-[2px] bg-[#EEF4FF] text-[#3538CD] rounded-[16px] font-semibold]">
                      Fresher
                    </li>
                    <li className="w-fit px-3 py-[2px] bg-[#FFF6ED] text-[#C4320A] rounded-[16px] font-semibold]">
                      Fresher
                    </li>
                    <li className="h-[26px] w-[26px] border text-[12px] font-semibold leading-5 flex items-center justify-center p-[6px] rounded-full cursor-pointer hover:opacity-85 bg-[#DDDDDD] text-[#676767]">
                      +12
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-4">
                <ul className="flex items-center gap-3">
                  <li className="flex gap-2 items-center text-[12px]">
                    <img
                      className="size-[16px]"
                      src="/images/clock.png"
                      alt=""
                    />
                    <p>Cập nhật 3 giờ trước</p>
                  </li>
                  <li className="flex gap-2 items-center text-[12px]">
                    <img
                      className="size-[16px]"
                      src="/images/flag-jp.png"
                      alt=""
                    />
                    <p>Nhật Bản</p>
                  </li>
                  <li className="flex gap-2 items-center text-[12px]">
                    <img
                      className="size-[16px]"
                      src="/images/briefcase.png"
                      alt=""
                    />
                    <p>Toàn thời gian</p>
                  </li>
                </ul>
              </div>

              {/* Cart job right */}
              <div className="flex items-center justify-between mt-4">
                <p className="text-[12px] text-[#848484] mt-2">
                  Cập nhật <b className="font-semibold">3</b> giờ trước - Còn{" "}
                  <b className="font-semibold">10</b> ngày để ứng tuyển
                </p>
                <Button size={"icon"} variant={"outline"}>
                  <Heart />
                </Button>
              </div>
            </li>
            <li className="border rounded-lg p-5 shadow-sm bg-[#FAFAFA]">
              {/* Cart job left */}
              <div className="flex gap-5 items-center">
                <img
                  className="w-[80px] h-[80px] object-cover rounded-md"
                  src="https://homehome.vn/wp-content/uploads/6-mau-hinh-anh-noi-that-nha-dep-theo-phong-cach-hien-dai-6.jpg"
                  alt=""
                />
                <div>
                  <h3
                    title="SE/BrSE (Outsystem) làm việc tại Tokyo/Nagoya với đãi ngộ cao"
                    className="text-[16px] font-semibold leading-[24px] mb-2 line-clamp-2 max-w-fit"
                  >
                    SE/BrSE (Outsystem) làm việc tại Thành Phố Hồ Chí Minh với
                    đãi ngộ cao
                  </h3>
                  <ul className="flex items-center gap-2">
                    <li className="w-fit px-3 py-[2px] bg-[#ECFDF3] text-[#027A48] rounded-[16px] font-semibold]">
                      Fresher
                    </li>
                    <li className="w-fit px-3 py-[2px] bg-[#EEF4FF] text-[#3538CD] rounded-[16px] font-semibold]">
                      Fresher
                    </li>
                    <li className="w-fit px-3 py-[2px] bg-[#FFF6ED] text-[#C4320A] rounded-[16px] font-semibold]">
                      Fresher
                    </li>
                    <li className="h-[26px] w-[26px] border text-[12px] font-semibold leading-5 flex items-center justify-center p-[6px] rounded-full cursor-pointer hover:opacity-85 bg-[#DDDDDD] text-[#676767]">
                      +12
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-4">
                <ul className="flex items-center gap-3">
                  <li className="flex gap-2 items-center text-[12px]">
                    <img
                      className="size-[16px]"
                      src="/images/clock.png"
                      alt=""
                    />
                    <p>Cập nhật 3 giờ trước</p>
                  </li>
                  <li className="flex gap-2 items-center text-[12px]">
                    <img
                      className="size-[16px]"
                      src="/images/flag-jp.png"
                      alt=""
                    />
                    <p>Nhật Bản</p>
                  </li>
                  <li className="flex gap-2 items-center text-[12px]">
                    <img
                      className="size-[16px]"
                      src="/images/briefcase.png"
                      alt=""
                    />
                    <p>Toàn thời gian</p>
                  </li>
                </ul>
              </div>

              {/* Cart job right */}
              <div className="flex items-center justify-between mt-4">
                <p className="text-[12px] text-[#848484] mt-2">
                  Cập nhật <b className="font-semibold">3</b> giờ trước - Còn{" "}
                  <b className="font-semibold">10</b> ngày để ứng tuyển
                </p>
                <Button size={"icon"} variant={"outline"}>
                  <Heart />
                </Button>
              </div>
            </li>
            <li className="border rounded-lg p-5 shadow-sm bg-[#FAFAFA]">
              {/* Cart job left */}
              <div className="flex gap-5 items-center">
                <img
                  className="w-[80px] h-[80px] object-cover rounded-md"
                  src="https://homehome.vn/wp-content/uploads/6-mau-hinh-anh-noi-that-nha-dep-theo-phong-cach-hien-dai-6.jpg"
                  alt=""
                />
                <div>
                  <h3
                    title="SE/BrSE (Outsystem) làm việc tại Tokyo/Nagoya với đãi ngộ cao"
                    className="text-[16px] font-semibold leading-[24px] mb-2 line-clamp-2 max-w-fit"
                  >
                    SE/BrSE (Outsystem) làm việc tại Thành Phố Hồ Chí Minh với
                    đãi ngộ cao
                  </h3>
                  <ul className="flex items-center gap-2">
                    <li className="w-fit px-3 py-[2px] bg-[#ECFDF3] text-[#027A48] rounded-[16px] font-semibold]">
                      Fresher
                    </li>
                    <li className="w-fit px-3 py-[2px] bg-[#EEF4FF] text-[#3538CD] rounded-[16px] font-semibold]">
                      Fresher
                    </li>
                    <li className="w-fit px-3 py-[2px] bg-[#FFF6ED] text-[#C4320A] rounded-[16px] font-semibold]">
                      Fresher
                    </li>
                    <li className="h-[26px] w-[26px] border text-[12px] font-semibold leading-5 flex items-center justify-center p-[6px] rounded-full cursor-pointer hover:opacity-85 bg-[#DDDDDD] text-[#676767]">
                      +12
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-4">
                <ul className="flex items-center gap-3">
                  <li className="flex gap-2 items-center text-[12px]">
                    <img
                      className="size-[16px]"
                      src="/images/clock.png"
                      alt=""
                    />
                    <p>Cập nhật 3 giờ trước</p>
                  </li>
                  <li className="flex gap-2 items-center text-[12px]">
                    <img
                      className="size-[16px]"
                      src="/images/flag-jp.png"
                      alt=""
                    />
                    <p>Nhật Bản</p>
                  </li>
                  <li className="flex gap-2 items-center text-[12px]">
                    <img
                      className="size-[16px]"
                      src="/images/briefcase.png"
                      alt=""
                    />
                    <p>Toàn thời gian</p>
                  </li>
                </ul>
              </div>

              {/* Cart job right */}
              <div className="flex items-center justify-between mt-4">
                <p className="text-[12px] text-[#848484] mt-2">
                  Cập nhật <b className="font-semibold">3</b> giờ trước - Còn{" "}
                  <b className="font-semibold">10</b> ngày để ứng tuyển
                </p>
                <Button size={"icon"} variant={"outline"}>
                  <Heart />
                </Button>
              </div>
            </li>
            <li className="border rounded-lg p-5 shadow-sm bg-[#FAFAFA]">
              {/* Cart job left */}
              <div className="flex gap-5 items-center">
                <img
                  className="w-[80px] h-[80px] object-cover rounded-md"
                  src="https://homehome.vn/wp-content/uploads/6-mau-hinh-anh-noi-that-nha-dep-theo-phong-cach-hien-dai-6.jpg"
                  alt=""
                />
                <div>
                  <h3
                    title="SE/BrSE (Outsystem) làm việc tại Tokyo/Nagoya với đãi ngộ cao"
                    className="text-[16px] font-semibold leading-[24px] mb-2 line-clamp-2 max-w-fit"
                  >
                    SE/BrSE (Outsystem) làm việc tại Thành Phố Hồ Chí Minh với
                    đãi ngộ cao
                  </h3>
                  <ul className="flex items-center gap-2">
                    <li className="w-fit px-3 py-[2px] bg-[#ECFDF3] text-[#027A48] rounded-[16px] font-semibold]">
                      Fresher
                    </li>
                    <li className="w-fit px-3 py-[2px] bg-[#EEF4FF] text-[#3538CD] rounded-[16px] font-semibold]">
                      Fresher
                    </li>
                    <li className="w-fit px-3 py-[2px] bg-[#FFF6ED] text-[#C4320A] rounded-[16px] font-semibold]">
                      Fresher
                    </li>
                    <li className="h-[26px] w-[26px] border text-[12px] font-semibold leading-5 flex items-center justify-center p-[6px] rounded-full cursor-pointer hover:opacity-85 bg-[#DDDDDD] text-[#676767]">
                      +12
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-4">
                <ul className="flex items-center gap-3">
                  <li className="flex gap-2 items-center text-[12px]">
                    <img
                      className="size-[16px]"
                      src="/images/clock.png"
                      alt=""
                    />
                    <p>Cập nhật 3 giờ trước</p>
                  </li>
                  <li className="flex gap-2 items-center text-[12px]">
                    <img
                      className="size-[16px]"
                      src="/images/flag-jp.png"
                      alt=""
                    />
                    <p>Nhật Bản</p>
                  </li>
                  <li className="flex gap-2 items-center text-[12px]">
                    <img
                      className="size-[16px]"
                      src="/images/briefcase.png"
                      alt=""
                    />
                    <p>Toàn thời gian</p>
                  </li>
                </ul>
              </div>

              {/* Cart job right */}
              <div className="flex items-center justify-between mt-4">
                <p className="text-[12px] text-[#848484] mt-2">
                  Cập nhật <b className="font-semibold">3</b> giờ trước - Còn{" "}
                  <b className="font-semibold">10</b> ngày để ứng tuyển
                </p>
                <Button size={"icon"} variant={"outline"}>
                  <Heart />
                </Button>
              </div>
            </li>
            <li className="border rounded-lg p-5 shadow-sm bg-[#FAFAFA]">
              {/* Cart job left */}
              <div className="flex gap-5 items-center">
                <img
                  className="w-[80px] h-[80px] object-cover rounded-md"
                  src="https://homehome.vn/wp-content/uploads/6-mau-hinh-anh-noi-that-nha-dep-theo-phong-cach-hien-dai-6.jpg"
                  alt=""
                />
                <div>
                  <h3
                    title="SE/BrSE (Outsystem) làm việc tại Tokyo/Nagoya với đãi ngộ cao"
                    className="text-[16px] font-semibold leading-[24px] mb-2 line-clamp-2 max-w-fit"
                  >
                    SE/BrSE (Outsystem) làm việc tại Thành Phố Hồ Chí Minh với
                    đãi ngộ cao
                  </h3>
                  <ul className="flex items-center gap-2">
                    <li className="w-fit px-3 py-[2px] bg-[#ECFDF3] text-[#027A48] rounded-[16px] font-semibold]">
                      Fresher
                    </li>
                    <li className="w-fit px-3 py-[2px] bg-[#EEF4FF] text-[#3538CD] rounded-[16px] font-semibold]">
                      Fresher
                    </li>
                    <li className="w-fit px-3 py-[2px] bg-[#FFF6ED] text-[#C4320A] rounded-[16px] font-semibold]">
                      Fresher
                    </li>
                    <li className="h-[26px] w-[26px] border text-[12px] font-semibold leading-5 flex items-center justify-center p-[6px] rounded-full cursor-pointer hover:opacity-85 bg-[#DDDDDD] text-[#676767]">
                      +12
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-4">
                <ul className="flex items-center gap-3">
                  <li className="flex gap-2 items-center text-[12px]">
                    <img
                      className="size-[16px]"
                      src="/images/clock.png"
                      alt=""
                    />
                    <p>Cập nhật 3 giờ trước</p>
                  </li>
                  <li className="flex gap-2 items-center text-[12px]">
                    <img
                      className="size-[16px]"
                      src="/images/flag-jp.png"
                      alt=""
                    />
                    <p>Nhật Bản</p>
                  </li>
                  <li className="flex gap-2 items-center text-[12px]">
                    <img
                      className="size-[16px]"
                      src="/images/briefcase.png"
                      alt=""
                    />
                    <p>Toàn thời gian</p>
                  </li>
                </ul>
              </div>

              {/* Cart job right */}
              <div className="flex items-center justify-between mt-4">
                <p className="text-[12px] text-[#848484] mt-2">
                  Cập nhật <b className="font-semibold">3</b> giờ trước - Còn{" "}
                  <b className="font-semibold">10</b> ngày để ứng tuyển
                </p>
                <Button size={"icon"} variant={"outline"}>
                  <Heart />
                </Button>
              </div>
            </li>
            <li className="border rounded-lg p-5 shadow-sm bg-[#FAFAFA]">
              {/* Cart job left */}
              <div className="flex gap-5 items-center">
                <img
                  className="w-[80px] h-[80px] object-cover rounded-md"
                  src="https://homehome.vn/wp-content/uploads/6-mau-hinh-anh-noi-that-nha-dep-theo-phong-cach-hien-dai-6.jpg"
                  alt=""
                />
                <div>
                  <h3
                    title="SE/BrSE (Outsystem) làm việc tại Tokyo/Nagoya với đãi ngộ cao"
                    className="text-[16px] font-semibold leading-[24px] mb-2 line-clamp-2 max-w-fit"
                  >
                    SE/BrSE (Outsystem) làm việc tại Thành Phố Hồ Chí Minh với
                    đãi ngộ cao
                  </h3>
                  <ul className="flex items-center gap-2">
                    <li className="w-fit px-3 py-[2px] bg-[#ECFDF3] text-[#027A48] rounded-[16px] font-semibold]">
                      Fresher
                    </li>
                    <li className="w-fit px-3 py-[2px] bg-[#EEF4FF] text-[#3538CD] rounded-[16px] font-semibold]">
                      Fresher
                    </li>
                    <li className="w-fit px-3 py-[2px] bg-[#FFF6ED] text-[#C4320A] rounded-[16px] font-semibold]">
                      Fresher
                    </li>
                    <li className="h-[26px] w-[26px] border text-[12px] font-semibold leading-5 flex items-center justify-center p-[6px] rounded-full cursor-pointer hover:opacity-85 bg-[#DDDDDD] text-[#676767]">
                      +12
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-4">
                <ul className="flex items-center gap-3">
                  <li className="flex gap-2 items-center text-[12px]">
                    <img
                      className="size-[16px]"
                      src="/images/clock.png"
                      alt=""
                    />
                    <p>Cập nhật 3 giờ trước</p>
                  </li>
                  <li className="flex gap-2 items-center text-[12px]">
                    <img
                      className="size-[16px]"
                      src="/images/flag-jp.png"
                      alt=""
                    />
                    <p>Nhật Bản</p>
                  </li>
                  <li className="flex gap-2 items-center text-[12px]">
                    <img
                      className="size-[16px]"
                      src="/images/briefcase.png"
                      alt=""
                    />
                    <p>Toàn thời gian</p>
                  </li>
                </ul>
              </div>

              {/* Cart job right */}
              <div className="flex items-center justify-between mt-4">
                <p className="text-[12px] text-[#848484] mt-2">
                  Cập nhật <b className="font-semibold">3</b> giờ trước - Còn{" "}
                  <b className="font-semibold">10</b> ngày để ứng tuyển
                </p>
                <Button size={"icon"} variant={"outline"}>
                  <Heart />
                </Button>
              </div>
            </li>
            <li className="border rounded-lg p-5 shadow-sm bg-[#FAFAFA]">
              {/* Cart job left */}
              <div className="flex gap-5 items-center">
                <img
                  className="w-[80px] h-[80px] object-cover rounded-md"
                  src="https://homehome.vn/wp-content/uploads/6-mau-hinh-anh-noi-that-nha-dep-theo-phong-cach-hien-dai-6.jpg"
                  alt=""
                />
                <div>
                  <h3
                    title="SE/BrSE (Outsystem) làm việc tại Tokyo/Nagoya với đãi ngộ cao"
                    className="text-[16px] font-semibold leading-[24px] mb-2 line-clamp-2 max-w-fit"
                  >
                    SE/BrSE (Outsystem) làm việc tại Thành Phố Hồ Chí Minh với
                    đãi ngộ cao
                  </h3>
                  <ul className="flex items-center gap-2">
                    <li className="w-fit px-3 py-[2px] bg-[#ECFDF3] text-[#027A48] rounded-[16px] font-semibold]">
                      Fresher
                    </li>
                    <li className="w-fit px-3 py-[2px] bg-[#EEF4FF] text-[#3538CD] rounded-[16px] font-semibold]">
                      Fresher
                    </li>
                    <li className="w-fit px-3 py-[2px] bg-[#FFF6ED] text-[#C4320A] rounded-[16px] font-semibold]">
                      Fresher
                    </li>
                    <li className="h-[26px] w-[26px] border text-[12px] font-semibold leading-5 flex items-center justify-center p-[6px] rounded-full cursor-pointer hover:opacity-85 bg-[#DDDDDD] text-[#676767]">
                      +12
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-4">
                <ul className="flex items-center gap-3">
                  <li className="flex gap-2 items-center text-[12px]">
                    <img
                      className="size-[16px]"
                      src="/images/clock.png"
                      alt=""
                    />
                    <p>Cập nhật 3 giờ trước</p>
                  </li>
                  <li className="flex gap-2 items-center text-[12px]">
                    <img
                      className="size-[16px]"
                      src="/images/flag-jp.png"
                      alt=""
                    />
                    <p>Nhật Bản</p>
                  </li>
                  <li className="flex gap-2 items-center text-[12px]">
                    <img
                      className="size-[16px]"
                      src="/images/briefcase.png"
                      alt=""
                    />
                    <p>Toàn thời gian</p>
                  </li>
                </ul>
              </div>

              {/* Cart job right */}
              <div className="flex items-center justify-between mt-4">
                <p className="text-[12px] text-[#848484] mt-2">
                  Cập nhật <b className="font-semibold">3</b> giờ trước - Còn{" "}
                  <b className="font-semibold">10</b> ngày để ứng tuyển
                </p>
                <Button size={"icon"} variant={"outline"}>
                  <Heart />
                </Button>
              </div>
            </li>
            <li className="border rounded-lg p-5 shadow-sm bg-[#FAFAFA]">
              {/* Cart job left */}
              <div className="flex gap-5 items-center">
                <img
                  className="w-[80px] h-[80px] object-cover rounded-md"
                  src="https://homehome.vn/wp-content/uploads/6-mau-hinh-anh-noi-that-nha-dep-theo-phong-cach-hien-dai-6.jpg"
                  alt=""
                />
                <div>
                  <h3
                    title="SE/BrSE (Outsystem) làm việc tại Tokyo/Nagoya với đãi ngộ cao"
                    className="text-[16px] font-semibold leading-[24px] mb-2 line-clamp-2 max-w-fit"
                  >
                    SE/BrSE (Outsystem) làm việc tại Thành Phố Hồ Chí Minh với
                    đãi ngộ cao
                  </h3>
                  <ul className="flex items-center gap-2">
                    <li className="w-fit px-3 py-[2px] bg-[#ECFDF3] text-[#027A48] rounded-[16px] font-semibold]">
                      Fresher
                    </li>
                    <li className="w-fit px-3 py-[2px] bg-[#EEF4FF] text-[#3538CD] rounded-[16px] font-semibold]">
                      Fresher
                    </li>
                    <li className="w-fit px-3 py-[2px] bg-[#FFF6ED] text-[#C4320A] rounded-[16px] font-semibold]">
                      Fresher
                    </li>
                    <li className="h-[26px] w-[26px] border text-[12px] font-semibold leading-5 flex items-center justify-center p-[6px] rounded-full cursor-pointer hover:opacity-85 bg-[#DDDDDD] text-[#676767]">
                      +12
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-4">
                <ul className="flex items-center gap-3">
                  <li className="flex gap-2 items-center text-[12px]">
                    <img
                      className="size-[16px]"
                      src="/images/clock.png"
                      alt=""
                    />
                    <p>Cập nhật 3 giờ trước</p>
                  </li>
                  <li className="flex gap-2 items-center text-[12px]">
                    <img
                      className="size-[16px]"
                      src="/images/flag-jp.png"
                      alt=""
                    />
                    <p>Nhật Bản</p>
                  </li>
                  <li className="flex gap-2 items-center text-[12px]">
                    <img
                      className="size-[16px]"
                      src="/images/briefcase.png"
                      alt=""
                    />
                    <p>Toàn thời gian</p>
                  </li>
                </ul>
              </div>

              {/* Cart job right */}
              <div className="flex items-center justify-between mt-4">
                <p className="text-[12px] text-[#848484] mt-2">
                  Cập nhật <b className="font-semibold">3</b> giờ trước - Còn{" "}
                  <b className="font-semibold">10</b> ngày để ứng tuyển
                </p>
                <Button size={"icon"} variant={"outline"}>
                  <Heart />
                </Button>
              </div>
            </li>
          </ul>
        )}

        {/* Phân trang danh sách công việc */}

        <ul className="flex justify-end gap-1 items-center">
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
