import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ChevronLeft, ChevronRight, Heart, MapPin, Search } from "lucide-react";

export default function Home() {
  return (
    <>
      {/* Banner tìm kiếm việc làm */}
      <section className="z-20   relative bg-[url('/images/banner-home.png')] bg-cover h-[435px] w-full object-cover bg-no-repeat">
        <div className="absolute inset-0 bg-[url('/images/banner-cover.png')] bg-no-repeat bg-cover">
          <div className="flex w-full h-full items-center justify-center flex-col">
            <h3 className="font-semibold text-[24px] lg:text-[48px] md:text-[36px] leading-[60px] text-white mb-6">
              Tìm kiếm việc làm cùng Rikkei Jobs!
            </h3>
            <div className="flex flex-col lg:flex-row items-center gap-3">
              <div className="relative flex items-center">
                {/* <MapPin className="absolute" /> */}
                <Search className="absolute text-slate-700 ml-4 z-20" />
                <Input
                  placeholder="Vị trí ứng tuyển"
                  className="w-[400px] h-12 pl-12"
                />
              </div>
              <div className="flex items-center w-full ">
                <MapPin className="absolute ml-4 z-20 text-red-700" />
                <Select>
                  <SelectTrigger className="w-full lg:w-[200px] h-12 pl-12">
                    <SelectValue placeholder="Tất cả địa điểm" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="system">System</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button variant={"destructive"} className="h-12 w-full">
                Tìm kiếm
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Việc làm nổi bật */}

      <section className="px-[36px] lg:px-[120px] pt-[80px]">
        <div className="flex items-center justify-between mb-5">
          <h3 className="text-[24px] lg:text-[30px] font-semibold leading-10">
            Việc làm nổi bật
          </h3>
          <div className="flex items-center gap-1 cursor-pointer hover:opacity-90">
            <span className="text-[16px] text-[#BC2228] font-semibold">
              Xem chi tiết
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M5.83325 14.1667L14.1666 5.83333M14.1666 5.83333H5.83325M14.1666 5.83333V14.1667"
                stroke="#BC2228"
                stroke-width="1.67"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>

        {/* Thanh chức năng lọc bản ghi */}
        <div className="flex-col w-full lg:flex-row md:flex-row items-center justify-between mb-7">
          <div className="flex gap-3 flex-wrap">
            <Button variant={"destructive"}>Tất cả</Button>
            <Button variant={"outline"}>Hà Nội</Button>
            <Button variant={"outline"}>TP Hồ Chí Minh</Button>
            <Button variant={"outline"}>Miền Bắc</Button>
            <Button variant={"outline"}>Miền Nam</Button>
          </div>
          <div className="flex items-center w-full ">
            <MapPin className="absolute ml-4 z-20 text-red-700" />
            <Select>
              <SelectTrigger className="w-full lg:w-[250px] h-12 pl-12">
                <SelectValue placeholder="Tất cả địa điểm" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Danh sách việc làm */}
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-[32px]">
          <li className="border rounded-[8px] shadow-sm p-4">
            <div className="flex gap-4 mb-4">
              <img
                className="size-[80px] object-cover rounded-lg"
                src="https://s3.cloud.cmctelecom.vn/tinhte1/2016/10/3893837_1_1.jpg"
                alt=""
              />
              <div>
                <h3 className="text-[#AB1F24] text-[16px] leading-6 font-semibold mb-2">
                  Sales IT làm việc tại Tokyo - Nagoya - Osaka
                </h3>
                <div className="bg-[#ECFDF3] w-fit px-3 py-[2px] rounded-md text-[#027A48] font-semibold">
                  Fresher
                </div>
              </div>
            </div>
            <ul className="flex items-center gap-3 mb-4">
              <li className="flex items-center gap-2 text-[12px] lg:text-[14px]">
                <img src="/images/money.png" alt="" />
                <span>100 - 200 man</span>
              </li>
              <li className="flex items-center gap-2 text-[12px] lg:text-[14px]">
                <img src="/images/flag-jp.png" alt="" />
                <span>Nhật Bản</span>
              </li>
              <li className="flex items-center gap-2 text-[12px] lg:text-[14px]">
                <img src="/images/briefcase.png" alt="" />
                <span>Toàn thời gian</span>
              </li>
            </ul>
            <footer className="flex items-center justify-between">
              <p className="text-[12px] text-[#848484]">
                Cập nhật 3 giờ trước - Còn 10 ngày để ứng tuyển
              </p>
              <div className="size-8 p-2 border rounded-md flex items-center justify-between cursor-pointer hover:bg-gray-100 transition-all">
                <Heart size={20} className="text-slate-600" />
              </div>
            </footer>
          </li>
          <li className="border rounded-[8px] shadow-sm p-4">
            <div className="flex gap-4 mb-4">
              <img
                className="size-[80px] object-cover rounded-lg"
                src="https://s3.cloud.cmctelecom.vn/tinhte1/2016/10/3893837_1_1.jpg"
                alt=""
              />
              <div>
                <h3 className="text-[#AB1F24] text-[16px] leading-6 font-semibold mb-2">
                  Sales IT làm việc tại Tokyo - Nagoya - Osaka
                </h3>
                <div className="bg-[#ECFDF3] w-fit px-3 py-[2px] rounded-md text-[#027A48] font-semibold">
                  Fresher
                </div>
              </div>
            </div>
            <ul className="flex items-center gap-3 mb-4">
              <li className="flex items-center gap-2 text-[12px] lg:text-[14px]">
                <img src="/images/money.png" alt="" />
                <span>100 - 200 man</span>
              </li>
              <li className="flex items-center gap-2 text-[12px] lg:text-[14px]">
                <img src="/images/flag-jp.png" alt="" />
                <span>Nhật Bản</span>
              </li>
              <li className="flex items-center gap-2 text-[12px] lg:text-[14px]">
                <img src="/images/briefcase.png" alt="" />
                <span>Toàn thời gian</span>
              </li>
            </ul>
            <footer className="flex items-center justify-between">
              <p className="text-[12px] text-[#848484]">
                Cập nhật 3 giờ trước - Còn 10 ngày để ứng tuyển
              </p>
              <div className="size-8 p-2 border rounded-md flex items-center justify-between cursor-pointer hover:bg-gray-100 transition-all">
                <Heart size={20} className="text-slate-600" />
              </div>
            </footer>
          </li>
          <li className="border rounded-[8px] shadow-sm p-4">
            <div className="flex gap-4 mb-4">
              <img
                className="size-[80px] object-cover rounded-lg"
                src="https://s3.cloud.cmctelecom.vn/tinhte1/2016/10/3893837_1_1.jpg"
                alt=""
              />
              <div>
                <h3 className="text-[#AB1F24] text-[16px] leading-6 font-semibold mb-2">
                  Sales IT làm việc tại Tokyo - Nagoya - Osaka
                </h3>
                <div className="bg-[#ECFDF3] w-fit px-3 py-[2px] rounded-md text-[#027A48] font-semibold">
                  Fresher
                </div>
              </div>
            </div>
            <ul className="flex items-center gap-3 mb-4">
              <li className="flex items-center gap-2 text-[12px] lg:text-[14px]">
                <img src="/images/money.png" alt="" />
                <span>100 - 200 man</span>
              </li>
              <li className="flex items-center gap-2 text-[12px] lg:text-[14px]">
                <img src="/images/flag-jp.png" alt="" />
                <span>Nhật Bản</span>
              </li>
              <li className="flex items-center gap-2 text-[12px] lg:text-[14px]">
                <img src="/images/briefcase.png" alt="" />
                <span>Toàn thời gian</span>
              </li>
            </ul>
            <footer className="flex items-center justify-between">
              <p className="text-[12px] text-[#848484]">
                Cập nhật 3 giờ trước - Còn 10 ngày để ứng tuyển
              </p>
              <div className="size-8 p-2 border rounded-md flex items-center justify-between cursor-pointer hover:bg-gray-100 transition-all">
                <Heart size={20} className="text-slate-600" />
              </div>
            </footer>
          </li>
        </ul>

        {/* Phân trang công việc */}
        <section className="flex justify-end items-center gap-2">
          <Button
            variant={"outline"}
            className="rounded-full bg-[#F8E9EA] text-[#AB1F24] font-medium"
            size={"icon"}
          >
            1
          </Button>
          <Button variant={"ghost"} className="rounded-full" size={"icon"}>
            2
          </Button>
          ...
          <Button variant={"ghost"} className="rounded-full" size={"icon"}>
            7
          </Button>
          <Button variant={"ghost"} className="rounded-full" size={"icon"}>
            8
          </Button>
          <Button variant={"ghost"} className="rounded-full" size={"icon"}>
            <ChevronLeft />
          </Button>
          <Button variant={"ghost"} className="rounded-full" size={"icon"}>
            <ChevronRight />
          </Button>
        </section>

        <div className="border-b my-[80px]"></div>

        {/* Ứng viên nổi bật */}
        <section className="w-full bg-[#faffafa] bg-[url('/images/candidate-decor.png')]  mb-[80px] bg-no-repeat">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-[24px] lg:text-[32px] font-semibold leading-10">
              Ứng viên nổi bật
            </h3>
            <div className="flex items-center gap-1 cursor-pointer hover:opacity-90">
              <span className="text-[16px] text-[#BC2228] font-semibold">
                Xem chi tiết
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M5.83325 14.1667L14.1666 5.83333M14.1666 5.83333H5.83325M14.1666 5.83333V14.1667"
                  stroke="#BC2228"
                  stroke-width="1.67"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>

          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <li className="border rounded-md shadow-sm p-5 bg-white z-10">
              <div className="flex justify-between mb-2">
                <img
                  src="/images/candidate-demo.png"
                  className=" rounded-md object-contain"
                  alt=""
                />
                <div className="text-[#027A48] bg-[#ECFDF3] h-fit text-[12px] leading-5 w-fit px-3 py-[2px] font-medium rounded-3xl">
                  Project Manager
                </div>
              </div>
              <h3 className="text-[16px] font-semibold leading-6 ">
                Ngọ Văn Quý
              </h3>
              <p className="text-[12px] leading-5 font-normal text-[#676767]">
                20 tuổi
              </p>
              <div className="border-b my-4"></div>

              <div className="flex mb-2">
                <div className="flex items-center gap-2 min-w-[100px]">
                  <img
                    className="size-4 object-cover"
                    src="/images/teacher.png"
                    alt=""
                  />
                  <span className="font-semibold leading-5">Trình độ:</span>
                </div>
                <p className="text-[#676767] text-[14px] leading-5">Middle</p>
              </div>
              <div className="flex">
                <div className="flex items-center gap-2 min-w-[100px]">
                  <img
                    className="size-4"
                    src="/images/archive-book.png"
                    alt=""
                  />
                  <span className="font-semibold text-[14px]">Ngoại ngữ:</span>
                </div>
                <p className="text-[#676767] text-[14px] leading-5">
                  IELTS 7.0
                </p>
              </div>
            </li>
            <li className="border rounded-md shadow-sm p-5 bg-white z-10">
              <div className="flex justify-between mb-2">
                <img
                  src="/images/candidate-demo.png"
                  className=" rounded-md object-contain"
                  alt=""
                />
                <div className="text-[#027A48] bg-[#ECFDF3] h-fit text-[12px] leading-5 w-fit px-3 py-[2px] font-medium rounded-3xl">
                  Project Manager
                </div>
              </div>
              <h3 className="text-[16px] font-semibold leading-6 ">
                Ngọ Văn Quý
              </h3>
              <p className="text-[12px] leading-5 font-normal text-[#676767]">
                20 tuổi
              </p>
              <div className="border-b my-4"></div>

              <div className="flex mb-2">
                <div className="flex items-center gap-2 min-w-[100px]">
                  <img
                    className="size-4 object-cover"
                    src="/images/teacher.png"
                    alt=""
                  />
                  <span className="font-semibold leading-5">Trình độ:</span>
                </div>
                <p className="text-[#676767] text-[14px] leading-5">Middle</p>
              </div>
              <div className="flex">
                <div className="flex items-center gap-2 min-w-[100px]">
                  <img
                    className="size-4"
                    src="/images/archive-book.png"
                    alt=""
                  />
                  <span className="font-semibold text-[14px]">Ngoại ngữ:</span>
                </div>
                <p className="text-[#676767] text-[14px] leading-5">
                  IELTS 7.0
                </p>
              </div>
            </li>
            <li className="border rounded-md shadow-sm p-5 bg-white z-10">
              <div className="flex justify-between mb-2">
                <img
                  src="/images/candidate-demo.png"
                  className=" rounded-md object-contain"
                  alt=""
                />
                <div className="text-[#027A48] bg-[#ECFDF3] h-fit text-[12px] leading-5 w-fit px-3 py-[2px] font-medium rounded-3xl">
                  Project Manager
                </div>
              </div>
              <h3 className="text-[16px] font-semibold leading-6 ">
                Ngọ Văn Quý
              </h3>
              <p className="text-[12px] leading-5 font-normal text-[#676767]">
                20 tuổi
              </p>
              <div className="border-b my-4"></div>

              <div className="flex mb-2">
                <div className="flex items-center gap-2 min-w-[100px]">
                  <img
                    className="size-4 object-cover"
                    src="/images/teacher.png"
                    alt=""
                  />
                  <span className="font-semibold leading-5">Trình độ:</span>
                </div>
                <p className="text-[#676767] text-[14px] leading-5">Middle</p>
              </div>
              <div className="flex">
                <div className="flex items-center gap-2 min-w-[100px]">
                  <img
                    className="size-4"
                    src="/images/archive-book.png"
                    alt=""
                  />
                  <span className="font-semibold text-[14px]">Ngoại ngữ:</span>
                </div>
                <p className="text-[#676767] text-[14px] leading-5">
                  IELTS 7.0
                </p>
              </div>
            </li>
            <li className="border rounded-md shadow-sm p-5 bg-white z-10">
              <div className="flex justify-between mb-2">
                <img
                  src="/images/candidate-demo.png"
                  className=" rounded-md object-contain"
                  alt=""
                />
                <div className="text-[#027A48] bg-[#ECFDF3] h-fit text-[12px] leading-5 w-fit px-3 py-[2px] font-medium rounded-3xl">
                  Project Manager
                </div>
              </div>
              <h3 className="text-[16px] font-semibold leading-6 ">
                Ngọ Văn Quý
              </h3>
              <p className="text-[12px] leading-5 font-normal text-[#676767]">
                20 tuổi
              </p>
              <div className="border-b my-4"></div>

              <div className="flex mb-2">
                <div className="flex items-center gap-2 min-w-[100px]">
                  <img
                    className="size-4 object-cover"
                    src="/images/teacher.png"
                    alt=""
                  />
                  <span className="font-semibold leading-5">Trình độ:</span>
                </div>
                <p className="text-[#676767] text-[14px] leading-5">Middle</p>
              </div>
              <div className="flex">
                <div className="flex items-center gap-2 min-w-[100px]">
                  <img
                    className="size-4"
                    src="/images/archive-book.png"
                    alt=""
                  />
                  <span className="font-semibold text-[14px]">Ngoại ngữ:</span>
                </div>
                <p className="text-[#676767] text-[14px] leading-5">
                  IELTS 7.0
                </p>
              </div>
            </li>
          </ul>
        </section>
      </section>
      {/* Tại sao chọn chúng tôi */}
      <section className="bg-[url('/images/bg-footer.jpg')] w-full bg-cover bg-no-repeat">
        <div className="px-[48px] lg:px-[120px] py-[87px]">
          <h3 className="text-[28px] lg:text-[40px] leading-[48px] font-semibold text-white mb-10">
            Tại sao chọn chúng tôi?
          </h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <li className="px-6 py-3 border bg-white rounded-md shadow-sm h-[96px]">
              <p className="text-[14px] leading-5 text-[#3D3D3D] font-medium">
                Số năm kinh nghiệm
              </p>
              <div className="text-[#BC2228] text-[40px] leading-[48px] font-semibold">
                10+
              </div>
            </li>
            <li className="px-6 py-3 border bg-white rounded-md shadow-sm h-[96px]">
              <p className="text-[14px] leading-5 text-[#3D3D3D] font-medium">
                Khách hàng quốc tế
              </p>
              <div className="text-[#BC2228] text-[40px] leading-[48px] font-semibold">
                500+
              </div>
            </li>
            <li className="px-6 py-3 border bg-white rounded-md shadow-sm h-[96px]">
              <p className="text-[14px] leading-5 text-[#3D3D3D] font-medium">
                Dự án thành công
              </p>
              <div className="text-[#BC2228] text-[40px] leading-[48px] font-semibold">
                1000+
              </div>
            </li>
            <li className="px-6 py-3 border bg-white rounded-md shadow-sm h-[96px]">
              <p className="text-[14px] leading-5 text-[#3D3D3D] font-medium">
                Văn phòng và chi nhánh
              </p>
              <div className="text-[#BC2228] text-[40px] leading-[48px] font-semibold">
                10
              </div>
            </li>
            <li className="px-6 py-3 border bg-white rounded-md shadow-sm h-[96px]">
              <p className="text-[14px] leading-5 text-[#3D3D3D] font-medium">
                Top công ty Công nghệ tại Việt Nam
              </p>
              <div className="text-[#BC2228] text-[40px] leading-[48px] font-semibold">
                Top 3
              </div>
            </li>
            <li className="px-6 py-3 border bg-white rounded-md shadow-sm h-[96px]">
              <p className="text-[14px] leading-5 text-[#3D3D3D] font-medium">
                Tỷ lệ khách hàng hài lòng
              </p>
              <div className="text-[#BC2228] text-[40px] leading-[48px] font-semibold">
                97%
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* Đối tác tuyển dụng */}
      <section className="px-12 lg:px-[120px] py-[80px]">
        <h3 className="text-center text-[24px] lg:text-[32px] font-semibold leading-[40px] mb-12">
          Đối tác tuyển dụng
        </h3>
        <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          <li>
            <img src="/images/usmh.png" alt="" />
          </li>
          <li>
            <img src="/images/studione.png" alt="" />
          </li>
          <li>
            <img src="/images/sunloft.png" alt="" />
          </li>
          <li>
            <img src="/images/systena.png" alt="" />
          </li>
          <li>
            <img src="/images/fujikin.png" alt="" />
          </li>
          <li>
            <img src="/images/clouds.png" alt="" />
          </li>
        </ul>
      </section>
    </>
  );
}
