import { Button } from "@/components/ui/button";

import {
  ArrowRight,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Ellipsis,
  Heart,
  Trash2,
} from "lucide-react";

export default function JobSaved() {
  return (
    <>
      <section className="px-[24px] lg:px-[120px] py-[12px] lg:py-[24px] mb-[84px]">
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="col-span-2">
            <header className="flex items-center justify-between">
              <div>
                <h3 className="text-[24px] font-semibold leading-8 mb-1">
                  Việc làm đã lưu
                </h3>
                <p className="text-[14px] leading-6 font-normal text-[#505050]">
                  Danh sách{" "}
                  <span className="text-[#AB1F24] font-semibold">4</span> việc
                  làm đã lưu
                </p>
              </div>

              <div className="flex items-center gap-2">
                <p className="text-[14px] text-[#595959] leading-5">
                  Sắp xếp theo:
                </p>
                <div className="flex items-center gap-2 font-semibold text-[#BC2228]">
                  <span>Mới nhất</span>
                  <ChevronDown />
                </div>
              </div>
            </header>

            <div className="border-b my-6"></div>

            {true ? (
              <div className="flex flex-col items-center">
                <svg
                  width="240"
                  height="211"
                  viewBox="0 0 240 211"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_32_20331)">
                    <path
                      d="M120.006 166.058C121.109 166.058 122.001 165.166 122.001 164.063C122.001 162.961 121.109 162.069 120.006 162.069C118.904 162.069 118.012 162.961 118.012 164.063C118.016 165.166 118.908 166.058 120.006 166.058Z"
                      fill="#CCCCCC"
                    />
                    <path
                      d="M62.0713 15.9147V24.6665"
                      stroke="#A7A7A7"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M57.6758 20.2906H66.4467"
                      stroke="#A7A7A7"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M161.687 71.1053C144.654 71.1053 127.315 70.4123 111.098 65.8948C95.1832 61.4806 80.5739 52.9126 67.5497 43.0008C59.0238 36.5499 51.2712 31.4007 40.1994 32.1741C29.3688 32.7598 19.0129 36.8026 10.6516 43.7129C-3.42931 56.0443 -1.31602 78.9 4.32325 94.8951C12.7879 119.052 38.5532 135.882 60.4479 146.766C85.7423 159.404 113.54 166.751 141.4 170.962C165.821 174.687 197.199 177.371 218.363 161.437C237.796 146.763 243.129 113.31 238.366 90.7183C237.21 84.0454 233.657 78.0232 228.374 73.7852C214.718 63.793 194.347 70.4698 179.003 70.7952C173.306 70.9215 167.506 71.0632 161.687 71.1053Z"
                      fill="#F4F4F4"
                    />
                    <path
                      d="M134.13 3.98919C135.233 3.98919 136.125 3.09716 136.125 1.99458C136.125 0.891992 135.233 -3.05176e-05 134.13 -3.05176e-05C133.028 -3.05176e-05 132.136 0.891992 132.136 1.99458C132.14 3.09716 133.032 3.98919 134.13 3.98919Z"
                      fill="#CCCCCC"
                    />
                    <path
                      opacity="0.2"
                      d="M30.5098 159.281V168.033"
                      stroke="#A7A7A7"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      opacity="0.2"
                      d="M26.1348 163.657H34.8865"
                      stroke="#A7A7A7"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M120.821 211.318C162.08 211.318 195.525 209.232 195.525 206.659C195.525 204.087 162.076 202 120.821 202C79.5623 202 46.1172 204.087 46.1172 206.659C46.1172 209.232 79.5623 211.318 120.821 211.318Z"
                      fill="#F4F4F4"
                    />
                    <path
                      d="M180.875 155.985H51.8338C50.9685 155.985 50.1186 155.798 49.3338 155.434C48.549 155.07 47.856 154.542 47.2971 153.883C46.7381 153.225 46.3285 152.452 46.095 151.621C45.8614 150.79 45.8155 149.917 45.9533 149.063L62.4576 48.9808C62.6797 47.5873 63.3918 46.32 64.4676 45.4051C65.5433 44.4901 66.9063 43.9924 68.3189 43.9924H197.36C198.221 43.9924 199.075 44.18 199.86 44.5437C200.641 44.9074 201.337 45.4357 201.896 46.0942C202.455 46.7527 202.861 47.526 203.091 48.3568C203.321 49.1875 203.367 50.0604 203.225 50.9103L186.801 150.993C186.571 152.394 185.852 153.665 184.764 154.584C183.673 155.503 182.295 155.997 180.875 155.985Z"
                      fill="#CCCCCC"
                    />
                    <path
                      d="M182.464 41.3814L105.869 7.18209C103.61 6.17521 100.965 7.18592 99.9539 9.44469L75.6778 63.816C74.671 66.0747 75.6817 68.7202 77.9404 69.7309L154.536 103.93C156.794 104.937 159.444 103.926 160.451 101.668L184.727 47.2963C185.737 45.0337 184.723 42.3883 182.464 41.3814Z"
                      fill="white"
                      stroke="#A7A7A7"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M117.097 51.9134C119.114 49.0842 122.047 47.0398 125.397 46.1248C128.747 45.2098 132.311 45.4816 135.485 46.8943C138.658 48.307 141.246 50.7725 142.808 53.8774C144.37 56.9784 144.814 60.5273 144.06 63.9193"
                      stroke="#A7A7A7"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M153.728 48.8392C154.884 48.8392 155.826 47.9012 155.826 46.7412C155.826 45.585 154.888 44.6432 153.728 44.6432C152.572 44.6432 151.63 45.5812 151.63 46.7412C151.634 47.9012 152.572 48.8392 153.728 48.8392Z"
                      fill="#A7A7A7"
                    />
                    <path
                      d="M123.367 35.2865C124.524 35.2865 125.465 34.3486 125.465 33.1886C125.465 32.0324 124.528 31.0906 123.367 31.0906C122.211 31.0906 121.27 32.0285 121.27 33.1886C121.27 34.3486 122.207 35.2865 123.367 35.2865Z"
                      fill="#A7A7A7"
                    />
                    <path
                      d="M180.305 155.943H50.6358C49.0585 155.935 47.5463 155.308 46.4322 154.19C45.3181 153.072 44.6941 151.56 44.6941 149.982V58.548C44.675 57.7555 44.8166 56.9669 45.1037 56.228C45.3947 55.4891 45.8273 54.8153 46.3824 54.2487C46.9376 53.6821 47.596 53.2265 48.3273 52.9164C49.0585 52.6063 49.8433 52.4455 50.6358 52.4417H97.8671C98.962 52.4455 100.038 52.7518 100.972 53.326C101.906 53.9003 102.664 54.7196 103.158 55.6958L109.892 68.8809C110.386 69.8572 111.144 70.6803 112.078 71.2546C113.012 71.8288 114.088 72.1351 115.183 72.1351H180.305C181.878 72.1351 183.39 72.763 184.508 73.877C185.622 74.9911 186.246 76.5033 186.246 78.0806V149.978C186.246 151.556 185.622 153.068 184.508 154.186C183.394 155.308 181.882 155.935 180.305 155.943Z"
                      fill="white"
                      stroke="#A7A7A7"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M160.343 75.2553C152.851 75.2515 145.527 77.4681 139.298 81.6296C133.069 85.7873 128.211 91.7022 125.34 98.6202C122.468 105.538 121.718 113.157 123.177 120.503C124.635 127.85 128.242 134.6 133.536 139.898C138.831 145.197 145.581 148.807 152.927 150.269C160.274 151.732 167.889 150.985 174.811 148.118C181.732 145.25 187.651 140.4 191.813 134.171C195.974 127.942 198.195 120.618 198.195 113.13C198.195 103.088 194.209 93.4595 187.111 86.3577C180.01 79.2522 170.385 75.2591 160.343 75.2553Z"
                      fill="white"
                      stroke="#A7A7A7"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M187.287 140.599L197.383 150.694"
                      stroke="#A7A7A7"
                      stroke-width="2.03504"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M196.239 145.79L193.103 149.071C191.698 150.541 191.752 152.873 193.218 154.278L220.431 180.292C221.901 181.697 224.232 181.643 225.637 180.173L228.773 176.892C230.178 175.422 230.124 173.091 228.654 171.686L201.442 145.671C199.975 144.266 197.644 144.32 196.239 145.79Z"
                      fill="#DDDDDD"
                    />
                    <path
                      d="M216.388 1.9946V10.7655"
                      stroke="#A7A7A7"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M211.992 6.38962H220.763"
                      stroke="#A7A7A7"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_32_20331">
                      <rect width="240" height="211" fill="white" />
                    </clipPath>
                  </defs>
                </svg>

                <p className="mt-3 mb-6 text-[#2D2C2C] text-[16px] leading-6">
                  Bạn chưa lưu việc làm nào!
                </p>

                <Button variant={"destructive"}>
                  <span>Tìm việc ngay</span>
                  <ArrowRight />
                </Button>
              </div>
            ) : (
              <>
                {/* Danh sách việc làm đã lưu */}
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
                            Còn <b className="font-semibold">10</b> ngày để ứng
                            tuyển
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
                        <Button variant={"outline"} className="text-[#676767]">
                          <Trash2 />
                          <span>Bỏ lưu</span>
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
                            Còn <b className="font-semibold">10</b> ngày để ứng
                            tuyển
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
                        <Button variant={"outline"} className="text-[#676767]">
                          <Trash2 />
                          <span>Bỏ lưu</span>
                        </Button>
                      </div>
                    </div>
                  </li>
                </ul>

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
              </>
            )}
          </div>

          <div className="text-white">
            <h3 className="text-[20px] font-semibold leading-[30px] mb-4 text-[#000000]">
              Bạn có thể quan tâm
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
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.333 2.33334H4.66634C2.66634 2.33334 1.33301 3.33334 1.33301 5.66668V10.3333C1.33301 12.6667 2.66634 13.6667 4.66634 13.6667H11.333C13.333 13.6667 14.6663 12.6667 14.6663 10.3333V5.66668C14.6663 3.33334 13.333 2.33334 11.333 2.33334ZM4.16634 9.66668C4.16634 9.94001 3.93967 10.1667 3.66634 10.1667C3.39301 10.1667 3.16634 9.94001 3.16634 9.66668V6.33334C3.16634 6.06001 3.39301 5.83334 3.66634 5.83334C3.93967 5.83334 4.16634 6.06001 4.16634 6.33334V9.66668ZM7.99967 10C6.89301 10 5.99967 9.10668 5.99967 8.00001C5.99967 6.89334 6.89301 6.00001 7.99967 6.00001C9.10634 6.00001 9.99967 6.89334 9.99967 8.00001C9.99967 9.10668 9.10634 10 7.99967 10ZM12.833 9.66668C12.833 9.94001 12.6063 10.1667 12.333 10.1667C12.0597 10.1667 11.833 9.94001 11.833 9.66668V6.33334C11.833 6.06001 12.0597 5.83334 12.333 5.83334C12.6063 5.83334 12.833 6.06001 12.833 6.33334V9.66668Z"
                          fill="#BC2228"
                        />
                      </svg>

                      <p>400 - 600 man</p>
                    </li>
                    <li className="flex gap-2 items-center text-[12px] text-[#3D3D3D]">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_4020_8377)">
                          <path
                            d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16Z"
                            fill="#F0F0F0"
                          />
                          <path
                            d="M7.99974 11.4785C9.92072 11.4785 11.478 9.92126 11.478 8.00028C11.478 6.0793 9.92072 4.52203 7.99974 4.52203C6.07875 4.52203 4.52148 6.0793 4.52148 8.00028C4.52148 9.92126 6.07875 11.4785 7.99974 11.4785Z"
                            fill="#D80027"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_4020_8377">
                            <rect width="16" height="16" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>

                      <p>Nhật Bản</p>
                    </li>
                    <li className="flex gap-2 items-center text-[12px] text-[#3D3D3D]">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.0597 4.65333C13.493 4.02666 12.5464 3.71333 11.173 3.71333H11.013V3.68666C11.013 2.56666 11.013 1.17999 8.50637 1.17999H7.49303C4.98637 1.17999 4.98637 2.57333 4.98637 3.68666V3.71999H4.82637C3.44637 3.71999 2.50637 4.03333 1.9397 4.65999C1.2797 5.39333 1.2997 6.37999 1.36637 7.05333L1.37303 7.09999L1.41715 7.56327C1.43142 7.71305 1.51217 7.84849 1.63833 7.93047C1.79869 8.03467 2.01991 8.17566 2.1597 8.25333C2.25303 8.31333 2.35303 8.36666 2.45303 8.41999C3.59303 9.04666 4.84637 9.46666 6.1197 9.67333C6.1797 10.3 6.45303 11.0333 7.91303 11.0333C9.37303 11.0333 9.6597 10.3067 9.70637 9.65999C11.0664 9.43999 12.3797 8.96666 13.5664 8.27333C13.6064 8.25333 13.633 8.23333 13.6664 8.21333C13.9101 8.07555 14.1623 7.90829 14.3961 7.74168C14.5096 7.66081 14.5818 7.53458 14.5972 7.39607L14.5997 7.37333L14.633 7.05999C14.6397 7.01999 14.6397 6.98666 14.6464 6.93999C14.6997 6.26666 14.6864 5.34666 14.0597 4.65333ZM8.72637 9.21999C8.72637 9.92666 8.72637 10.0333 7.90637 10.0333C7.08637 10.0333 7.08637 9.90666 7.08637 9.22666V8.38666H8.72637V9.21999ZM5.9397 3.71333V3.68666C5.9397 2.55333 5.9397 2.13333 7.49303 2.13333H8.50637C10.0597 2.13333 10.0597 2.55999 10.0597 3.68666V3.71999H5.9397V3.71333Z"
                          fill="#BC2228"
                        />
                        <path
                          d="M13.6452 9.28353C13.9999 9.1176 14.4072 9.3985 14.3718 9.78848L14.1596 12.1267C14.0196 13.46 13.4729 14.82 10.5396 14.82H5.45957C2.52624 14.82 1.97957 13.46 1.83957 12.1333L1.63886 9.92549C1.60382 9.54003 2.00175 9.25949 2.35537 9.41682C3.1151 9.75485 4.2556 10.2378 5.02927 10.4539C5.19286 10.4996 5.3254 10.6181 5.4035 10.7689C5.82435 11.5817 6.68602 12.0133 7.9129 12.0133C9.12775 12.0133 9.99947 11.565 10.4221 10.7491C10.5003 10.5982 10.6333 10.4797 10.797 10.4336C11.6218 10.2012 12.8446 9.658 13.6452 9.28353Z"
                          fill="#BC2228"
                        />
                      </svg>

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
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.333 2.33334H4.66634C2.66634 2.33334 1.33301 3.33334 1.33301 5.66668V10.3333C1.33301 12.6667 2.66634 13.6667 4.66634 13.6667H11.333C13.333 13.6667 14.6663 12.6667 14.6663 10.3333V5.66668C14.6663 3.33334 13.333 2.33334 11.333 2.33334ZM4.16634 9.66668C4.16634 9.94001 3.93967 10.1667 3.66634 10.1667C3.39301 10.1667 3.16634 9.94001 3.16634 9.66668V6.33334C3.16634 6.06001 3.39301 5.83334 3.66634 5.83334C3.93967 5.83334 4.16634 6.06001 4.16634 6.33334V9.66668ZM7.99967 10C6.89301 10 5.99967 9.10668 5.99967 8.00001C5.99967 6.89334 6.89301 6.00001 7.99967 6.00001C9.10634 6.00001 9.99967 6.89334 9.99967 8.00001C9.99967 9.10668 9.10634 10 7.99967 10ZM12.833 9.66668C12.833 9.94001 12.6063 10.1667 12.333 10.1667C12.0597 10.1667 11.833 9.94001 11.833 9.66668V6.33334C11.833 6.06001 12.0597 5.83334 12.333 5.83334C12.6063 5.83334 12.833 6.06001 12.833 6.33334V9.66668Z"
                          fill="#BC2228"
                        />
                      </svg>

                      <p>400 - 600 man</p>
                    </li>
                    <li className="flex gap-2 items-center text-[12px] text-[#3D3D3D]">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_4020_8377)">
                          <path
                            d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16Z"
                            fill="#F0F0F0"
                          />
                          <path
                            d="M7.99974 11.4785C9.92072 11.4785 11.478 9.92126 11.478 8.00028C11.478 6.0793 9.92072 4.52203 7.99974 4.52203C6.07875 4.52203 4.52148 6.0793 4.52148 8.00028C4.52148 9.92126 6.07875 11.4785 7.99974 11.4785Z"
                            fill="#D80027"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_4020_8377">
                            <rect width="16" height="16" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>

                      <p>Nhật Bản</p>
                    </li>
                    <li className="flex gap-2 items-center text-[12px] text-[#3D3D3D]">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.0597 4.65333C13.493 4.02666 12.5464 3.71333 11.173 3.71333H11.013V3.68666C11.013 2.56666 11.013 1.17999 8.50637 1.17999H7.49303C4.98637 1.17999 4.98637 2.57333 4.98637 3.68666V3.71999H4.82637C3.44637 3.71999 2.50637 4.03333 1.9397 4.65999C1.2797 5.39333 1.2997 6.37999 1.36637 7.05333L1.37303 7.09999L1.41715 7.56327C1.43142 7.71305 1.51217 7.84849 1.63833 7.93047C1.79869 8.03467 2.01991 8.17566 2.1597 8.25333C2.25303 8.31333 2.35303 8.36666 2.45303 8.41999C3.59303 9.04666 4.84637 9.46666 6.1197 9.67333C6.1797 10.3 6.45303 11.0333 7.91303 11.0333C9.37303 11.0333 9.6597 10.3067 9.70637 9.65999C11.0664 9.43999 12.3797 8.96666 13.5664 8.27333C13.6064 8.25333 13.633 8.23333 13.6664 8.21333C13.9101 8.07555 14.1623 7.90829 14.3961 7.74168C14.5096 7.66081 14.5818 7.53458 14.5972 7.39607L14.5997 7.37333L14.633 7.05999C14.6397 7.01999 14.6397 6.98666 14.6464 6.93999C14.6997 6.26666 14.6864 5.34666 14.0597 4.65333ZM8.72637 9.21999C8.72637 9.92666 8.72637 10.0333 7.90637 10.0333C7.08637 10.0333 7.08637 9.90666 7.08637 9.22666V8.38666H8.72637V9.21999ZM5.9397 3.71333V3.68666C5.9397 2.55333 5.9397 2.13333 7.49303 2.13333H8.50637C10.0597 2.13333 10.0597 2.55999 10.0597 3.68666V3.71999H5.9397V3.71333Z"
                          fill="#BC2228"
                        />
                        <path
                          d="M13.6452 9.28353C13.9999 9.1176 14.4072 9.3985 14.3718 9.78848L14.1596 12.1267C14.0196 13.46 13.4729 14.82 10.5396 14.82H5.45957C2.52624 14.82 1.97957 13.46 1.83957 12.1333L1.63886 9.92549C1.60382 9.54003 2.00175 9.25949 2.35537 9.41682C3.1151 9.75485 4.2556 10.2378 5.02927 10.4539C5.19286 10.4996 5.3254 10.6181 5.4035 10.7689C5.82435 11.5817 6.68602 12.0133 7.9129 12.0133C9.12775 12.0133 9.99947 11.565 10.4221 10.7491C10.5003 10.5982 10.6333 10.4797 10.797 10.4336C11.6218 10.2012 12.8446 9.658 13.6452 9.28353Z"
                          fill="#BC2228"
                        />
                      </svg>

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
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.333 2.33334H4.66634C2.66634 2.33334 1.33301 3.33334 1.33301 5.66668V10.3333C1.33301 12.6667 2.66634 13.6667 4.66634 13.6667H11.333C13.333 13.6667 14.6663 12.6667 14.6663 10.3333V5.66668C14.6663 3.33334 13.333 2.33334 11.333 2.33334ZM4.16634 9.66668C4.16634 9.94001 3.93967 10.1667 3.66634 10.1667C3.39301 10.1667 3.16634 9.94001 3.16634 9.66668V6.33334C3.16634 6.06001 3.39301 5.83334 3.66634 5.83334C3.93967 5.83334 4.16634 6.06001 4.16634 6.33334V9.66668ZM7.99967 10C6.89301 10 5.99967 9.10668 5.99967 8.00001C5.99967 6.89334 6.89301 6.00001 7.99967 6.00001C9.10634 6.00001 9.99967 6.89334 9.99967 8.00001C9.99967 9.10668 9.10634 10 7.99967 10ZM12.833 9.66668C12.833 9.94001 12.6063 10.1667 12.333 10.1667C12.0597 10.1667 11.833 9.94001 11.833 9.66668V6.33334C11.833 6.06001 12.0597 5.83334 12.333 5.83334C12.6063 5.83334 12.833 6.06001 12.833 6.33334V9.66668Z"
                          fill="#BC2228"
                        />
                      </svg>

                      <p>400 - 600 man</p>
                    </li>
                    <li className="flex gap-2 items-center text-[12px] text-[#3D3D3D]">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_4020_8377)">
                          <path
                            d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16Z"
                            fill="#F0F0F0"
                          />
                          <path
                            d="M7.99974 11.4785C9.92072 11.4785 11.478 9.92126 11.478 8.00028C11.478 6.0793 9.92072 4.52203 7.99974 4.52203C6.07875 4.52203 4.52148 6.0793 4.52148 8.00028C4.52148 9.92126 6.07875 11.4785 7.99974 11.4785Z"
                            fill="#D80027"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_4020_8377">
                            <rect width="16" height="16" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>

                      <p>Nhật Bản</p>
                    </li>
                    <li className="flex gap-2 items-center text-[12px] text-[#3D3D3D]">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.0597 4.65333C13.493 4.02666 12.5464 3.71333 11.173 3.71333H11.013V3.68666C11.013 2.56666 11.013 1.17999 8.50637 1.17999H7.49303C4.98637 1.17999 4.98637 2.57333 4.98637 3.68666V3.71999H4.82637C3.44637 3.71999 2.50637 4.03333 1.9397 4.65999C1.2797 5.39333 1.2997 6.37999 1.36637 7.05333L1.37303 7.09999L1.41715 7.56327C1.43142 7.71305 1.51217 7.84849 1.63833 7.93047C1.79869 8.03467 2.01991 8.17566 2.1597 8.25333C2.25303 8.31333 2.35303 8.36666 2.45303 8.41999C3.59303 9.04666 4.84637 9.46666 6.1197 9.67333C6.1797 10.3 6.45303 11.0333 7.91303 11.0333C9.37303 11.0333 9.6597 10.3067 9.70637 9.65999C11.0664 9.43999 12.3797 8.96666 13.5664 8.27333C13.6064 8.25333 13.633 8.23333 13.6664 8.21333C13.9101 8.07555 14.1623 7.90829 14.3961 7.74168C14.5096 7.66081 14.5818 7.53458 14.5972 7.39607L14.5997 7.37333L14.633 7.05999C14.6397 7.01999 14.6397 6.98666 14.6464 6.93999C14.6997 6.26666 14.6864 5.34666 14.0597 4.65333ZM8.72637 9.21999C8.72637 9.92666 8.72637 10.0333 7.90637 10.0333C7.08637 10.0333 7.08637 9.90666 7.08637 9.22666V8.38666H8.72637V9.21999ZM5.9397 3.71333V3.68666C5.9397 2.55333 5.9397 2.13333 7.49303 2.13333H8.50637C10.0597 2.13333 10.0597 2.55999 10.0597 3.68666V3.71999H5.9397V3.71333Z"
                          fill="#BC2228"
                        />
                        <path
                          d="M13.6452 9.28353C13.9999 9.1176 14.4072 9.3985 14.3718 9.78848L14.1596 12.1267C14.0196 13.46 13.4729 14.82 10.5396 14.82H5.45957C2.52624 14.82 1.97957 13.46 1.83957 12.1333L1.63886 9.92549C1.60382 9.54003 2.00175 9.25949 2.35537 9.41682C3.1151 9.75485 4.2556 10.2378 5.02927 10.4539C5.19286 10.4996 5.3254 10.6181 5.4035 10.7689C5.82435 11.5817 6.68602 12.0133 7.9129 12.0133C9.12775 12.0133 9.99947 11.565 10.4221 10.7491C10.5003 10.5982 10.6333 10.4797 10.797 10.4336C11.6218 10.2012 12.8446 9.658 13.6452 9.28353Z"
                          fill="#BC2228"
                        />
                      </svg>

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
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.333 2.33334H4.66634C2.66634 2.33334 1.33301 3.33334 1.33301 5.66668V10.3333C1.33301 12.6667 2.66634 13.6667 4.66634 13.6667H11.333C13.333 13.6667 14.6663 12.6667 14.6663 10.3333V5.66668C14.6663 3.33334 13.333 2.33334 11.333 2.33334ZM4.16634 9.66668C4.16634 9.94001 3.93967 10.1667 3.66634 10.1667C3.39301 10.1667 3.16634 9.94001 3.16634 9.66668V6.33334C3.16634 6.06001 3.39301 5.83334 3.66634 5.83334C3.93967 5.83334 4.16634 6.06001 4.16634 6.33334V9.66668ZM7.99967 10C6.89301 10 5.99967 9.10668 5.99967 8.00001C5.99967 6.89334 6.89301 6.00001 7.99967 6.00001C9.10634 6.00001 9.99967 6.89334 9.99967 8.00001C9.99967 9.10668 9.10634 10 7.99967 10ZM12.833 9.66668C12.833 9.94001 12.6063 10.1667 12.333 10.1667C12.0597 10.1667 11.833 9.94001 11.833 9.66668V6.33334C11.833 6.06001 12.0597 5.83334 12.333 5.83334C12.6063 5.83334 12.833 6.06001 12.833 6.33334V9.66668Z"
                          fill="#BC2228"
                        />
                      </svg>

                      <p>400 - 600 man</p>
                    </li>
                    <li className="flex gap-2 items-center text-[12px] text-[#3D3D3D]">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_4020_8377)">
                          <path
                            d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16Z"
                            fill="#F0F0F0"
                          />
                          <path
                            d="M7.99974 11.4785C9.92072 11.4785 11.478 9.92126 11.478 8.00028C11.478 6.0793 9.92072 4.52203 7.99974 4.52203C6.07875 4.52203 4.52148 6.0793 4.52148 8.00028C4.52148 9.92126 6.07875 11.4785 7.99974 11.4785Z"
                            fill="#D80027"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_4020_8377">
                            <rect width="16" height="16" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>

                      <p>Nhật Bản</p>
                    </li>
                    <li className="flex gap-2 items-center text-[12px] text-[#3D3D3D]">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.0597 4.65333C13.493 4.02666 12.5464 3.71333 11.173 3.71333H11.013V3.68666C11.013 2.56666 11.013 1.17999 8.50637 1.17999H7.49303C4.98637 1.17999 4.98637 2.57333 4.98637 3.68666V3.71999H4.82637C3.44637 3.71999 2.50637 4.03333 1.9397 4.65999C1.2797 5.39333 1.2997 6.37999 1.36637 7.05333L1.37303 7.09999L1.41715 7.56327C1.43142 7.71305 1.51217 7.84849 1.63833 7.93047C1.79869 8.03467 2.01991 8.17566 2.1597 8.25333C2.25303 8.31333 2.35303 8.36666 2.45303 8.41999C3.59303 9.04666 4.84637 9.46666 6.1197 9.67333C6.1797 10.3 6.45303 11.0333 7.91303 11.0333C9.37303 11.0333 9.6597 10.3067 9.70637 9.65999C11.0664 9.43999 12.3797 8.96666 13.5664 8.27333C13.6064 8.25333 13.633 8.23333 13.6664 8.21333C13.9101 8.07555 14.1623 7.90829 14.3961 7.74168C14.5096 7.66081 14.5818 7.53458 14.5972 7.39607L14.5997 7.37333L14.633 7.05999C14.6397 7.01999 14.6397 6.98666 14.6464 6.93999C14.6997 6.26666 14.6864 5.34666 14.0597 4.65333ZM8.72637 9.21999C8.72637 9.92666 8.72637 10.0333 7.90637 10.0333C7.08637 10.0333 7.08637 9.90666 7.08637 9.22666V8.38666H8.72637V9.21999ZM5.9397 3.71333V3.68666C5.9397 2.55333 5.9397 2.13333 7.49303 2.13333H8.50637C10.0597 2.13333 10.0597 2.55999 10.0597 3.68666V3.71999H5.9397V3.71333Z"
                          fill="#BC2228"
                        />
                        <path
                          d="M13.6452 9.28353C13.9999 9.1176 14.4072 9.3985 14.3718 9.78848L14.1596 12.1267C14.0196 13.46 13.4729 14.82 10.5396 14.82H5.45957C2.52624 14.82 1.97957 13.46 1.83957 12.1333L1.63886 9.92549C1.60382 9.54003 2.00175 9.25949 2.35537 9.41682C3.1151 9.75485 4.2556 10.2378 5.02927 10.4539C5.19286 10.4996 5.3254 10.6181 5.4035 10.7689C5.82435 11.5817 6.68602 12.0133 7.9129 12.0133C9.12775 12.0133 9.99947 11.565 10.4221 10.7491C10.5003 10.5982 10.6333 10.4797 10.797 10.4336C11.6218 10.2012 12.8446 9.658 13.6452 9.28353Z"
                          fill="#BC2228"
                        />
                      </svg>

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
