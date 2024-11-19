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
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import { Heart, Search } from "lucide-react";

export default function JobDetail() {
  return (
    <>
      <section className="px-[24px] lg:px-[120px] py-[12px] lg:py-[24px]">
        <header className="grid grid-cols-1 lg:grid-cols-2 gap-3 my-6">
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

        {/* Breadcrumb */}
        <div className="my-6">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Trang chủ</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/components">Việc làm</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Chi tiết việc làm</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="col-span-2">
            {/* Card ứng tuyển ngay */}
            <div className="border rounded-lg p-5 shadow-sm flex items-center justify-between">
              <div className="flex gap-4">
                <img
                  className="rounded-md size-[88px] object-cover"
                  src="https://mocshop.com.vn/library/module_new/bao-gia-thiet-ke---thi-cong-noi-that_s2030.jpg"
                  alt=""
                />
                <div>
                  <h3 className="text-[18px] mb-1 leading-7 font-semibold">
                    Software Engineer
                  </h3>
                  <ul className="flex items-center gap-2">
                    <li className="text-[12px] w-fit px-3 py-[2px] bg-[#ECFDF3] text-[#027A48] rounded-[16px] font-semibold]">
                      Fresher
                    </li>
                    <li className="text-[12px] w-fit px-3 py-[2px] bg-[#EEF4FF] text-[#3538CD] rounded-[16px] font-semibold]">
                      Fresher
                    </li>
                    <li className="text-[12px] w-fit px-3 py-[2px] bg-[#FFF6ED] text-[#C4320A] rounded-[16px] font-semibold]">
                      Fresher
                    </li>
                    <li className="h-[26px] w-[26px] border text-[12px] font-semibold leading-5 flex items-center justify-center p-[6px] rounded-full cursor-pointer hover:opacity-85 bg-[#DDDDDD] text-[#676767]">
                      +12
                    </li>
                  </ul>
                  <div className="flex items-center gap-2 mt-3">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.00016 1.33334C4.32683 1.33334 1.3335 4.32668 1.3335 8.00001C1.3335 11.6733 4.32683 14.6667 8.00016 14.6667C11.6735 14.6667 14.6668 11.6733 14.6668 8.00001C14.6668 4.32668 11.6735 1.33334 8.00016 1.33334ZM10.9002 10.38C10.8068 10.54 10.6402 10.6267 10.4668 10.6267C10.3802 10.6267 10.2935 10.6067 10.2135 10.5533L8.14683 9.32001C7.6335 9.01334 7.2535 8.34001 7.2535 7.74668V5.01334C7.2535 4.74001 7.48016 4.51334 7.7535 4.51334C8.02683 4.51334 8.2535 4.74001 8.2535 5.01334V7.74668C8.2535 7.98668 8.4535 8.34001 8.66016 8.46001L10.7268 9.69334C10.9668 9.83334 11.0468 10.14 10.9002 10.38Z"
                        fill="#848484"
                      />
                    </svg>
                    <span className="text-[12px] leading-5 text-[#848484] font-normal">
                      Hạn nộp hồ sơ: 31/12/2024
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-3 justify-between">
                <Button variant={"destructive"}>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.16689 5.26667L13.2419 2.90834C16.4169 1.85001 18.1419 3.58334 17.0919 6.75834L14.7336 13.8333C13.1502 18.5917 10.5502 18.5917 8.96689 13.8333L8.26689 11.7333L6.16689 11.0333C1.40856 9.45001 1.40856 6.85834 6.16689 5.26667Z"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M8.4248 11.375L11.4081 8.38333"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Ứng tuyển ngay
                </Button>
                <Button variant={"outline"}>
                  <Heart />
                  <span>Lưu tin</span>
                </Button>
              </div>
            </div>

            {/* Chi tiết tuyển dụng */}
            <header className="text-[22px] font-semibold leading-7 mt-[32px] mb-[20px] pl-4 border-l-4 border-[#BC2228]">
              Chi tiết tuyển dụng
            </header>

            {/* Thông tin chung */}
            <div className="border p-6 rounded-lg shadow-sm bg-[#FFF6F7]">
              <h4 className="text-[16px] font-semibold leading-6 mb-5">
                Thông tin chung
              </h4>

              <ul className="grid grid-cols-2 gap-6">
                <li className="flex gap-3 items-center">
                  <div className="size-12 bg-[#F8E9EA] flex items-center justify-center rounded-full">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17 3.5H7C4 3.5 2 5 2 8.5V15.5C2 19 4 20.5 7 20.5H17C20 20.5 22 19 22 15.5V8.5C22 5 20 3.5 17 3.5ZM6.25 14.5C6.25 14.91 5.91 15.25 5.5 15.25C5.09 15.25 4.75 14.91 4.75 14.5V9.5C4.75 9.09 5.09 8.75 5.5 8.75C5.91 8.75 6.25 9.09 6.25 9.5V14.5ZM12 15C10.34 15 9 13.66 9 12C9 10.34 10.34 9 12 9C13.66 9 15 10.34 15 12C15 13.66 13.66 15 12 15ZM19.25 14.5C19.25 14.91 18.91 15.25 18.5 15.25C18.09 15.25 17.75 14.91 17.75 14.5V9.5C17.75 9.09 18.09 8.75 18.5 8.75C18.91 8.75 19.25 9.09 19.25 9.5V14.5Z"
                        fill="#BC2228"
                      />
                    </svg>
                  </div>
                  <div className="flex flex-col justify-between">
                    <p className="text-[14px] text-[#3D3D3D] leading-5">
                      Mức lương
                    </p>
                    <b className="text-[16px] font-semibold leading-6">
                      400 - 600 man
                    </b>
                  </div>
                </li>
                <li className="flex gap-3 items-center">
                  <div className="size-12 bg-[#F8E9EA] flex items-center justify-center rounded-full">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 2C6.38 2 4.25 4.13 4.25 6.75C4.25 9.32 6.26 11.4 8.88 11.49C8.96 11.48 9.04 11.48 9.1 11.49C9.12 11.49 9.13 11.49 9.15 11.49C9.16 11.49 9.16 11.49 9.17 11.49C11.73 11.4 13.74 9.32 13.75 6.75C13.75 4.13 11.62 2 9 2Z"
                        fill="#BC2228"
                      />
                      <path
                        d="M14.08 14.15C11.29 12.29 6.73996 12.29 3.92996 14.15C2.65996 15 1.95996 16.15 1.95996 17.38C1.95996 18.61 2.65996 19.75 3.91996 20.59C5.31996 21.53 7.15996 22 8.99996 22C10.84 22 12.68 21.53 14.08 20.59C15.34 19.74 16.04 18.6 16.04 17.36C16.03 16.13 15.34 14.99 14.08 14.15Z"
                        fill="#BC2228"
                      />
                      <path
                        d="M19.9899 7.34C20.1499 9.28 18.7699 10.98 16.8599 11.21C16.8499 11.21 16.8499 11.21 16.8399 11.21H16.8099C16.7499 11.21 16.6899 11.21 16.6399 11.23C15.6699 11.28 14.7799 10.97 14.1099 10.4C15.1399 9.48 15.7299 8.1 15.6099 6.6C15.5399 5.79 15.2599 5.05 14.8399 4.42C15.2199 4.23 15.6599 4.11 16.1099 4.07C18.0699 3.9 19.8199 5.36 19.9899 7.34Z"
                        fill="#BC2228"
                      />
                      <path
                        d="M21.9902 16.59C21.9102 17.56 21.2902 18.4 20.2502 18.97C19.2502 19.52 17.9902 19.78 16.7402 19.75C17.4602 19.1 17.8802 18.29 17.9602 17.43C18.0602 16.19 17.4702 15 16.2902 14.05C15.6202 13.52 14.8402 13.1 13.9902 12.79C16.2002 12.15 18.9802 12.58 20.6902 13.96C21.6102 14.7 22.0802 15.63 21.9902 16.59Z"
                        fill="#BC2228"
                      />
                    </svg>
                  </div>
                  <div className="flex flex-col justify-between">
                    <p className="text-[14px] text-[#3D3D3D] leading-5">
                      Số lượng tuyển
                    </p>
                    <b className="text-[16px] font-semibold leading-6">
                      2 người
                    </b>
                  </div>
                </li>
                <li className="flex gap-3 items-center">
                  <div className="size-12 bg-[#F8E9EA] flex items-center justify-center rounded-full">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21.09 6.98C20.24 6.04 18.82 5.57 16.76 5.57H16.52V5.53C16.52 3.85 16.52 1.77 12.76 1.77H11.24C7.48004 1.77 7.48004 3.86 7.48004 5.53V5.58H7.24004C5.17004 5.58 3.76004 6.05 2.91004 6.99C1.92004 8.09 1.95004 9.57 2.05004 10.58L2.06004 10.65L2.13749 11.4633C2.15176 11.6131 2.23242 11.7483 2.35831 11.8307C2.59812 11.9877 2.99946 12.2463 3.24004 12.38C3.38004 12.47 3.53004 12.55 3.68004 12.63C5.39004 13.57 7.27004 14.2 9.18004 14.51C9.27004 15.45 9.68004 16.55 11.87 16.55C14.06 16.55 14.49 15.46 14.56 14.49C16.6 14.16 18.57 13.45 20.35 12.41C20.41 12.38 20.45 12.35 20.5 12.32C20.8968 12.0958 21.3083 11.8195 21.6835 11.5488C21.7965 11.4673 21.8688 11.3413 21.8842 11.2027L21.9 11.06L21.95 10.59C21.96 10.53 21.96 10.48 21.97 10.41C22.05 9.4 22.03 8.02 21.09 6.98ZM13.09 13.83C13.09 14.89 13.09 15.05 11.86 15.05C10.63 15.05 10.63 14.86 10.63 13.84V12.58H13.09V13.83ZM8.91004 5.57V5.53C8.91004 3.83 8.91004 3.2 11.24 3.2H12.76C15.09 3.2 15.09 3.84 15.09 5.53V5.58H8.91004V5.57Z"
                        fill="#BC2228"
                      />
                      <path
                        d="M20.8733 13.7342C21.2269 13.5659 21.6342 13.8462 21.5988 14.2362L21.2398 18.19C21.0298 20.19 20.2098 22.23 15.8098 22.23H8.18984C3.78984 22.23 2.96984 20.19 2.75984 18.2L2.41913 14.4522C2.38409 14.0667 2.78205 13.7867 3.13468 13.9463C4.2741 14.4618 6.37724 15.3764 7.67641 15.7167C7.84072 15.7597 7.97361 15.8773 8.04556 16.0312C8.65253 17.3293 9.96896 18.02 11.8698 18.02C13.752 18.02 15.085 17.3027 15.694 16.0014C15.766 15.8474 15.8991 15.7298 16.0635 15.6866C17.443 15.3236 19.6816 14.3012 20.8733 13.7342Z"
                        fill="#BC2228"
                      />
                    </svg>
                  </div>
                  <div className="flex flex-col justify-between">
                    <p className="text-[14px] text-[#3D3D3D] leading-5">
                      Hình thức làm việc
                    </p>
                    <b className="text-[16px] font-semibold leading-6">
                      Toàn thời gian
                    </b>
                  </div>
                </li>
                <li className="flex gap-3 items-center">
                  <div className="size-12 bg-[#F8E9EA] flex items-center justify-center rounded-full">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21.2502 18.47L19.6002 18.86C19.2302 18.95 18.9402 19.23 18.8602 19.6L18.5102 21.07C18.3202 21.87 17.3002 22.12 16.7702 21.49L13.7802 18.05C13.5402 17.77 13.6702 17.33 14.0302 17.24C15.8002 16.81 17.3902 15.82 18.5602 14.41C18.7502 14.18 19.0902 14.15 19.3002 14.36L21.5202 16.58C22.2802 17.34 22.0102 18.29 21.2502 18.47Z"
                        fill="#BC2228"
                      />
                      <path
                        d="M2.70016 18.47L4.35016 18.86C4.72016 18.95 5.01016 19.23 5.09016 19.6L5.44016 21.07C5.63016 21.87 6.65016 22.12 7.18016 21.49L10.1702 18.05C10.4102 17.77 10.2802 17.33 9.92016 17.24C8.15016 16.81 6.56016 15.82 5.39016 14.41C5.20016 14.18 4.86016 14.15 4.65016 14.36L2.43016 16.58C1.67016 17.34 1.94016 18.29 2.70016 18.47Z"
                        fill="#BC2228"
                      />
                      <path
                        d="M12 2C8.13 2 5 5.13 5 9C5 10.45 5.43 11.78 6.17 12.89C7.25 14.49 8.96 15.62 10.95 15.91C11.29 15.97 11.64 16 12 16C12.36 16 12.71 15.97 13.05 15.91C15.04 15.62 16.75 14.49 17.83 12.89C18.57 11.78 19 10.45 19 9C19 5.13 15.87 2 12 2ZM15.06 8.78L14.23 9.61C14.09 9.75 14.01 10.02 14.06 10.22L14.3 11.25C14.49 12.06 14.06 12.38 13.34 11.95L12.34 11.36C12.16 11.25 11.86 11.25 11.68 11.36L10.68 11.95C9.96 12.37 9.53 12.06 9.72 11.25L9.96 10.22C10 10.03 9.93 9.75 9.79 9.61L8.94 8.78C8.45 8.29 8.61 7.8 9.29 7.69L10.36 7.51C10.54 7.48 10.75 7.32 10.83 7.16L11.42 5.98C11.74 5.34 12.26 5.34 12.58 5.98L13.17 7.16C13.25 7.32 13.46 7.48 13.65 7.51L14.72 7.69C15.39 7.8 15.55 8.29 15.06 8.78Z"
                        fill="#BC2228"
                      />
                    </svg>
                  </div>
                  <div className="flex flex-col justify-between">
                    <p className="text-[14px] text-[#3D3D3D] leading-5">
                      Cấp bậc
                    </p>
                    <b className="text-[16px] font-semibold leading-6">
                      Nhân viên
                    </b>
                  </div>
                </li>
                <li className="flex gap-3 items-center">
                  <div className="size-12 bg-[#F8E9EA] flex items-center justify-center rounded-full">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17 3.5H7C4 3.5 2 5 2 8.5V15.5C2 19 4 20.5 7 20.5H17C20 20.5 22 19 22 15.5V8.5C22 5 20 3.5 17 3.5ZM6.25 14.5C6.25 14.91 5.91 15.25 5.5 15.25C5.09 15.25 4.75 14.91 4.75 14.5V9.5C4.75 9.09 5.09 8.75 5.5 8.75C5.91 8.75 6.25 9.09 6.25 9.5V14.5ZM12 15C10.34 15 9 13.66 9 12C9 10.34 10.34 9 12 9C13.66 9 15 10.34 15 12C15 13.66 13.66 15 12 15ZM19.25 14.5C19.25 14.91 18.91 15.25 18.5 15.25C18.09 15.25 17.75 14.91 17.75 14.5V9.5C17.75 9.09 18.09 8.75 18.5 8.75C18.91 8.75 19.25 9.09 19.25 9.5V14.5Z"
                        fill="#BC2228"
                      />
                    </svg>
                  </div>
                  <div className="flex flex-col justify-between">
                    <p className="text-[14px] text-[#3D3D3D] leading-5">
                      Giới tính
                    </p>
                    <b className="text-[16px] font-semibold leading-6">
                      Không yêu cầu
                    </b>
                  </div>
                </li>
                <li className="flex gap-3 items-center">
                  <div className="size-12 bg-[#F8E9EA] flex items-center justify-center rounded-full">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17.8099 5.49V6.23L14.2699 4.18C12.9299 3.41 11.0599 3.41 9.72994 4.18L6.18994 6.24V5.49C6.18994 3.24 7.41994 2 9.66994 2H14.3299C16.5799 2 17.8099 3.24 17.8099 5.49Z"
                        fill="#BC2228"
                      />
                      <path
                        d="M17.84 7.97L17.7 7.9L16.34 7.12L13.52 5.49C12.66 4.99 11.34 4.99 10.48 5.49L7.66 7.11L6.3 7.91L6.12 8C4.37 9.18 4.25 9.4 4.25 11.29V15.81C4.25 17.7 4.37 17.92 6.16 19.13L10.48 21.62C10.91 21.88 11.45 21.99 12 21.99C12.54 21.99 13.09 21.87 13.52 21.62L17.88 19.1C19.64 17.92 19.75 17.71 19.75 15.81V11.29C19.75 9.4 19.63 9.18 17.84 7.97ZM14.79 13.5L14.18 14.25C14.08 14.36 14.01 14.57 14.02 14.72L14.08 15.68C14.12 16.27 13.7 16.57 13.15 16.36L12.26 16C12.12 15.95 11.89 15.95 11.75 16L10.86 16.35C10.31 16.57 9.89 16.26 9.93 15.67L9.99 14.71C10 14.56 9.93 14.35 9.83 14.24L9.21 13.5C8.83 13.05 9 12.55 9.57 12.4L10.5 12.16C10.65 12.12 10.82 11.98 10.9 11.86L11.42 11.06C11.74 10.56 12.25 10.56 12.58 11.06L13.1 11.86C13.18 11.99 13.36 12.12 13.5 12.16L14.43 12.4C15 12.55 15.17 13.05 14.79 13.5Z"
                        fill="#BC2228"
                      />
                    </svg>
                  </div>
                  <div className="flex flex-col justify-between">
                    <p className="text-[14px] text-[#3D3D3D] leading-5">
                      Kinh nghiệm
                    </p>
                    <b className="text-[16px] font-semibold leading-6">
                      1 - 3 năm
                    </b>
                  </div>
                </li>
              </ul>
            </div>

            {/* Thông tin chi tiết */}
            <h3 className="text-[16px] font-semibold leading-6 mt-6 mb-3">
              Mô tả công việc
            </h3>
            <ul className="ml-6">
              <li className="list-disc">
                Tham gia phát triển dự án Back-end và Front-end
              </li>
              <li className="list-disc text-[#2D2C2C] text-[16px]">
                Thực hiện thiết kế, coding và unit test cho dự án
              </li>
              <li className="list-disc text-[#2D2C2C] text-[16px]">
                Tham gia việc review code, hỗ trợ các thành viên trong nhóm.
              </li>
              <li className="list-disc text-[#2D2C2C] text-[16px]">
                Thực hiện các công việc theo sự phân công của Trưởng nhóm/Quản
                lý dự án, phối hợp giữa các nhóm để phát triển dự án.
              </li>
            </ul>
            {/* Yêu cầu ứng viên */}
            <h3 className="text-[16px] font-semibold leading-6 mt-6 mb-3">
              Yêu cầu ứng viên
            </h3>
            <ul className="ml-6">
              <li className="list-disc">
                Có kinh nghiệm làm việc với Java tối thiểu 3 năm.
              </li>
              <li className="list-disc text-[#2D2C2C] text-[16px]">
                Thành thạo trong việc sử dụng các framework web Java như Spring
                MVC, Spring Boot hoặc Hibernate.
              </li>
              <li className="list-disc text-[#2D2C2C] text-[16px]">
                Hiểu biết về thiết kế ứng dụng, công nghệ microservice.
              </li>
              <li className="list-disc text-[#2D2C2C] text-[16px]">
                Có kiến thức vững về HTML, CSS và JavaScript.
              </li>
              <li className="list-disc text-[#2D2C2C] text-[16px]">
                Có kinh nghiệm làm việc với hệ thống message queue (ActiveMQ,
                Kafka..) để xử lý các thư hàng đợi.
              </li>
              <li className="list-disc text-[#2D2C2C] text-[16px]">
                Có kinh nghiệm làm việc với hệ quản trị cơ sở dữ liệu quan hệ
                RDBMS(SQL server, PostgreSQL) và NoSQL(Cassandra, mongodb..)
              </li>
              <li className="list-disc text-[#2D2C2C] text-[16px]">
                Có kiến thức và kinh nghiệm với Linux.
              </li>
              <li className="list-disc text-[#2D2C2C] text-[16px]">
                Có khả năng làm việc độc lập và làm việc nhóm tốt.
              </li>
            </ul>

            {/* Quyền lợi */}
            <h3 className="text-[16px] font-semibold leading-6 mt-6 mb-3">
              Quyền lợi
            </h3>

            <ul className="ml-6">
              <li className="list-disc text-[#2D2C2C] text-[16px]">
                Lương: UPTO 40.000.000 VNĐ/tháng
              </li>
              <li className="list-disc text-[#2D2C2C] text-[16px]">
                Tối thiểu 13 tháng lương/năm.
              </li>
              <li className="list-disc text-[#2D2C2C] text-[16px]">
                Xét tăng lương 1- 2 lần/năm.
              </li>
              <li className="list-disc text-[#2D2C2C] text-[16px]">
                Thưởng: Thưởng Tết, thưởng ngày lễ, thưởng giới thiệu nhân sự...
              </li>
              <li className="list-disc text-[#2D2C2C] text-[16px]">
                Văn phòng làm việc chuyên nghiệp hạng A.
              </li>
              <li className="list-disc text-[#2D2C2C] text-[16px]">
                Môi trường làm việc thân thiện và có tính tương hỗ cao, ổn định
                lâu dài.
              </li>
              <li className="list-disc text-[#2D2C2C] text-[16px]">
                Có nhiều cơ hội được đào tạo, làm việc nâng cao trình độ và cơ
                hội thăng tiến.
              </li>
              <li className="list-disc text-[#2D2C2C] text-[16px]">
                Có nhiều hoạt động bổ trợ tinh thần, du lịch...
              </li>
              <li className="list-disc text-[#2D2C2C] text-[16px]">
                Có cơ hội làm việc tại nước ngoài.
              </li>
            </ul>

            {/* Địa điểm làm việc */}
            <h3 className="text-[16px] font-semibold leading-6 mt-6 mb-3">
              Địa điểm làm việc
            </h3>
            <ul className="ml-6">
              <li className="list-disc text-[#2D2C2C] text-[16px]">
                Có nhiều hoạt động bổ trợ tinh thần, du lịch...
              </li>
            </ul>

            {/* Thời gian làm việc */}
            <h3 className="text-[16px] font-semibold leading-6 mt-6 mb-3">
              Thời gian làm việc
            </h3>
            <ul className="ml-6">
              <li className="list-disc text-[#2D2C2C] text-[16px]">
                Thứ 2 - Thứ 6 (từ 08:00 đến 17:30)
              </li>
            </ul>

            {/* Cách thức ứng tuyển */}
            <h3 className="text-[16px] font-semibold leading-6 mt-6 mb-3">
              Cách thức ứng tuyển
            </h3>
            <ul className="ml-6">
              <li className="list-disc text-[#2D2C2C] text-[16px]">
                Ứng viên nộp hồ sơ trực tuyến bằng cách bấm Ứng tuyển ngay dưới
                đây.
              </li>
              <li className="list-disc text-[#2D2C2C] text-[16px]">
                Hạn nộp hồ sơ: 05/10/2024
              </li>
            </ul>

            <div className="mt-8 flex gap-4 mb-20">
              <Button variant={"destructive"}>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.16689 5.26667L13.2419 2.90834C16.4169 1.85001 18.1419 3.58334 17.0919 6.75834L14.7336 13.8333C13.1502 18.5917 10.5502 18.5917 8.96689 13.8333L8.26689 11.7333L6.16689 11.0333C1.40856 9.45001 1.40856 6.85834 6.16689 5.26667Z"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M8.4248 11.375L11.4081 8.3833"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <span> Ứng tuyển ngay</span>
              </Button>
              <Button variant={"outline"}>
                <Heart />
                <span>Lưu tin</span>
              </Button>
            </div>
          </div>

          <div className="text-white">
            <h3 className="text-[20px] font-semibold leading-[30px] mb-4 text-[#000000]">
              Việc làm liên quan
            </h3>
            <ul className="grid grid-cols-1 gap-6">
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
                      className="text-[#111111] text-[16px] font-semibold leading-[24px] mb-2 line-clamp-2 max-w-fit"
                    >
                      SE/BrSE (Outsystem) làm việc tại Thành Phố Hồ Chí Minh với
                      đãi ngộ cao
                    </h3>
                    <ul className="flex items-center gap-2">
                      <li className="w-fit px-3 py-[2px] bg-[#ECFDF3] text-[#027A48] rounded-[16px] font-semibold]">
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
                    <li className="flex gap-2 items-center text-[12px] text-[#3D3D3D]">
                      <img
                        className="size-[16px]"
                        src="/images/clock.png"
                        alt=""
                      />
                      <p>Cập nhật 3 giờ trước</p>
                    </li>
                    <li className="flex gap-2 items-center text-[12px] text-[#3D3D3D]">
                      <img
                        className="size-[16px]"
                        src="/images/flag-jp.png"
                        alt=""
                      />
                      <p>Nhật Bản</p>
                    </li>
                    <li className="flex gap-2 items-center text-[12px] text-[#3D3D3D]">
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
                  <Button
                    className="text-[#3D3D3D]"
                    size={"icon"}
                    variant={"outline"}
                  >
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
                      className="text-[#111111] text-[16px] font-semibold leading-[24px] mb-2 line-clamp-2 max-w-fit"
                    >
                      SE/BrSE (Outsystem) làm việc tại Thành Phố Hồ Chí Minh với
                      đãi ngộ cao
                    </h3>
                    <ul className="flex items-center gap-2">
                      <li className="w-fit px-3 py-[2px] bg-[#ECFDF3] text-[#027A48] rounded-[16px] font-semibold]">
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
                    <li className="flex gap-2 items-center text-[12px] text-[#3D3D3D]">
                      <img
                        className="size-[16px]"
                        src="/images/clock.png"
                        alt=""
                      />
                      <p>Cập nhật 3 giờ trước</p>
                    </li>
                    <li className="flex gap-2 items-center text-[12px] text-[#3D3D3D]">
                      <img
                        className="size-[16px]"
                        src="/images/flag-jp.png"
                        alt=""
                      />
                      <p>Nhật Bản</p>
                    </li>
                    <li className="flex gap-2 items-center text-[12px] text-[#3D3D3D]">
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
                  <Button
                    className="text-[#3D3D3D]"
                    size={"icon"}
                    variant={"outline"}
                  >
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
                      className="text-[#111111] text-[16px] font-semibold leading-[24px] mb-2 line-clamp-2 max-w-fit"
                    >
                      SE/BrSE (Outsystem) làm việc tại Thành Phố Hồ Chí Minh với
                      đãi ngộ cao
                    </h3>
                    <ul className="flex items-center gap-2">
                      <li className="w-fit px-3 py-[2px] bg-[#ECFDF3] text-[#027A48] rounded-[16px] font-semibold]">
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
                    <li className="flex gap-2 items-center text-[12px] text-[#3D3D3D]">
                      <img
                        className="size-[16px]"
                        src="/images/clock.png"
                        alt=""
                      />
                      <p>Cập nhật 3 giờ trước</p>
                    </li>
                    <li className="flex gap-2 items-center text-[12px] text-[#3D3D3D]">
                      <img
                        className="size-[16px]"
                        src="/images/flag-jp.png"
                        alt=""
                      />
                      <p>Nhật Bản</p>
                    </li>
                    <li className="flex gap-2 items-center text-[12px] text-[#3D3D3D]">
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
                  <Button
                    className="text-[#3D3D3D]"
                    size={"icon"}
                    variant={"outline"}
                  >
                    <Heart />
                  </Button>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </section>
    </>
  );
}
