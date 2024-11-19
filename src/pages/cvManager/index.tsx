import { Button } from "@/components/ui/button";
import {
  ChevronLeft,
  ChevronRight,
  Download,
  Ellipsis,
  Eye,
  Trash2,
  Upload,
} from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

export default function CVManager() {
  return (
    <>
      <header className="flex items-center justify-between">
        <div>
          <h3 className="text-[18px] font-semibold leading-7 mb-1">
            CV đã tải lên
          </h3>
          <p className="text-[16px] text-[#676767] leading-6">
            Hãy xem và cập nhật CV mới nhất của bạn.
          </p>
        </div>

        <Button
          variant={"outline"}
          className="bg-red-100 hover:bg-red-200 text-[#AB1F24] hover:text-red-700 font-semibold"
        >
          <Upload /> <span>Tải CV lên</span>
        </Button>
      </header>

      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        <li className="min-h-[210px] h-auto bg-no-repeat bg-cover border rounded-lg shadow-sm bg-[url('https://marketplace.canva.com/EAFcO7DTEHM/1/0/1131w/canva-blue-professional-modern-cv-resume-pPAKwLoiobE.jpg')]">
          <div className="bg-[url('/images/bg-overlay-cv.png')] w-full h-full rounded-lg relative">
            <div className="flex flex-col justify-end h-full w-full p-3 gap-2">
              <Link
                to="#"
                className="text-[16px] leading-5 text-white font-semibold line-clamp-2"
              >
                [CV] Front-End Developer - Đỗ Phú Quý. PDF
              </Link>
              <p className="text-[12px] text-white leading-4">
                Cập nhật lần cuối 30-12-2023 16:11 PM
              </p>

              <div className=" flex items-center justify-between w-full">
                <div className="flex items-center justify-between gap-2">
                  <Button
                    variant={"secondary"}
                    className="h-6 text-[8px] text-white bg-gray-400 px-2 py-2"
                  >
                    <Eye /> <span>Xem CV</span>
                  </Button>
                  <Button
                    variant={"secondary"}
                    className="h-6 text-[8px] text-white bg-gray-400 px-2 py-2"
                  >
                    <Download /> <span>Tải xuống</span>
                  </Button>
                </div>
                <Button
                  size={"icon"}
                  className="h-6 w-6 text-[6px] text-white bg-gray-400 px-2 py-2"
                  variant={"secondary"}
                >
                  <Trash2 />
                </Button>
              </div>
            </div>
          </div>
        </li>
        <li className="min-h-[210px] h-auto bg-no-repeat bg-cover border rounded-lg shadow-sm bg-[url('https://marketplace.canva.com/EAFcO7DTEHM/1/0/1131w/canva-blue-professional-modern-cv-resume-pPAKwLoiobE.jpg')]">
          <div className="bg-[url('/images/bg-overlay-cv.png')] w-full h-full rounded-lg relative">
            <div className="flex flex-col justify-end h-full w-full p-3 gap-2">
              <Link
                to="#"
                className="text-[16px] leading-5 text-white font-semibold line-clamp-2"
              >
                [CV] Front-End Developer - Đỗ Phú Quý. PDF
              </Link>
              <p className="text-[12px] text-white leading-4">
                Cập nhật lần cuối 30-12-2023 16:11 PM
              </p>

              <div className=" flex items-center justify-between w-full">
                <div className="flex items-center justify-between gap-2">
                  <Button
                    variant={"secondary"}
                    className="h-6 text-[8px] text-white bg-gray-400 px-2 py-2"
                  >
                    <Eye /> <span>Xem CV</span>
                  </Button>
                  <Button
                    variant={"secondary"}
                    className="h-6 text-[8px] text-white bg-gray-400 px-2 py-2"
                  >
                    <Download /> <span>Tải xuống</span>
                  </Button>
                </div>
                <Button
                  size={"icon"}
                  className="h-6 w-6 text-[6px] text-white bg-gray-400 px-2 py-2"
                  variant={"secondary"}
                >
                  <Trash2 />
                </Button>
              </div>
            </div>
          </div>
        </li>
        <li className="min-h-[210px] h-auto bg-no-repeat bg-cover border rounded-lg shadow-sm bg-[url('https://marketplace.canva.com/EAFcO7DTEHM/1/0/1131w/canva-blue-professional-modern-cv-resume-pPAKwLoiobE.jpg')]">
          <div className="bg-[url('/images/bg-overlay-cv.png')] w-full h-full rounded-lg relative">
            <div className="flex flex-col justify-end h-full w-full p-3 gap-2">
              <Link
                to="#"
                className="text-[16px] leading-5 text-white font-semibold line-clamp-2"
              >
                [CV] Front-End Developer - Đỗ Phú Quý. PDF
              </Link>
              <p className="text-[12px] text-white leading-4">
                Cập nhật lần cuối 30-12-2023 16:11 PM
              </p>

              <div className=" flex items-center justify-between w-full">
                <div className="flex items-center justify-between gap-2">
                  <Button
                    variant={"secondary"}
                    className="h-6 text-[8px] text-white bg-gray-400 px-2 py-2"
                  >
                    <Eye /> <span>Xem CV</span>
                  </Button>
                  <Button
                    variant={"secondary"}
                    className="h-6 text-[8px] text-white bg-gray-400 px-2 py-2"
                  >
                    <Download /> <span>Tải xuống</span>
                  </Button>
                </div>
                <Button
                  size={"icon"}
                  className="h-6 w-6 text-[6px] text-white bg-gray-400 px-2 py-2"
                  variant={"secondary"}
                >
                  <Trash2 />
                </Button>
              </div>
            </div>
          </div>
        </li>
        <li className="min-h-[210px] h-auto bg-no-repeat bg-cover border rounded-lg shadow-sm bg-[url('https://marketplace.canva.com/EAFcO7DTEHM/1/0/1131w/canva-blue-professional-modern-cv-resume-pPAKwLoiobE.jpg')]">
          <div className="bg-[url('/images/bg-overlay-cv.png')] w-full h-full rounded-lg relative">
            <div className="flex flex-col justify-end h-full w-full p-3 gap-2">
              <Link
                to="#"
                className="text-[16px] leading-5 text-white font-semibold line-clamp-2"
              >
                [CV] Front-End Developer - Đỗ Phú Quý. PDF
              </Link>
              <p className="text-[12px] text-white leading-4">
                Cập nhật lần cuối 30-12-2023 16:11 PM
              </p>

              <div className=" flex items-center justify-between w-full">
                <div className="flex items-center justify-between gap-2">
                  <Button
                    variant={"secondary"}
                    className="h-6 text-[8px] text-white bg-gray-400 px-2 py-2"
                  >
                    <Eye /> <span>Xem CV</span>
                  </Button>
                  <Button
                    variant={"secondary"}
                    className="h-6 text-[8px] text-white bg-gray-400 px-2 py-2"
                  >
                    <Download /> <span>Tải xuống</span>
                  </Button>
                </div>
                <Button
                  size={"icon"}
                  className="h-6 w-6 text-[6px] text-white bg-gray-400 px-2 py-2"
                  variant={"secondary"}
                >
                  <Trash2 />
                </Button>
              </div>
            </div>
          </div>
        </li>
        <li className="min-h-[210px] h-auto bg-no-repeat bg-cover border rounded-lg shadow-sm bg-[url('https://marketplace.canva.com/EAFcO7DTEHM/1/0/1131w/canva-blue-professional-modern-cv-resume-pPAKwLoiobE.jpg')]">
          <div className="bg-[url('/images/bg-overlay-cv.png')] w-full h-full rounded-lg relative">
            <div className="flex flex-col justify-end h-full w-full p-3 gap-2">
              <Link
                to="#"
                className="text-[16px] leading-5 text-white font-semibold line-clamp-2"
              >
                [CV] Front-End Developer - Đỗ Phú Quý. PDF
              </Link>
              <p className="text-[12px] text-white leading-4">
                Cập nhật lần cuối 30-12-2023 16:11 PM
              </p>

              <div className=" flex items-center justify-between w-full">
                <div className="flex items-center justify-between gap-2">
                  <Button
                    variant={"secondary"}
                    className="h-6 text-[8px] text-white bg-gray-400 px-2 py-2"
                  >
                    <Eye /> <span>Xem CV</span>
                  </Button>
                  <Button
                    variant={"secondary"}
                    className="h-6 text-[8px] text-white bg-gray-400 px-2 py-2"
                  >
                    <Download /> <span>Tải xuống</span>
                  </Button>
                </div>
                <Button
                  size={"icon"}
                  className="h-6 w-6 text-[6px] text-white bg-gray-400 px-2 py-2"
                  variant={"secondary"}
                >
                  <Trash2 />
                </Button>
              </div>
            </div>
          </div>
        </li>
        <li className="min-h-[210px] h-auto bg-no-repeat bg-cover border rounded-lg shadow-sm bg-[url('https://marketplace.canva.com/EAFcO7DTEHM/1/0/1131w/canva-blue-professional-modern-cv-resume-pPAKwLoiobE.jpg')]">
          <div className="bg-[url('/images/bg-overlay-cv.png')] w-full h-full rounded-lg relative">
            <div className="flex flex-col justify-end h-full w-full p-3 gap-2">
              <Link
                to="#"
                className="text-[16px] leading-5 text-white font-semibold line-clamp-2"
              >
                [CV] Front-End Developer - Đỗ Phú Quý. PDF
              </Link>
              <p className="text-[12px] text-white leading-4">
                Cập nhật lần cuối 30-12-2023 16:11 PM
              </p>

              <div className=" flex items-center justify-between w-full">
                <div className="flex items-center justify-between gap-2">
                  <Button
                    variant={"secondary"}
                    className="h-6 text-[8px] text-white bg-gray-400 px-2 py-2"
                  >
                    <Eye /> <span>Xem CV</span>
                  </Button>
                  <Button
                    variant={"secondary"}
                    className="h-6 text-[8px] text-white bg-gray-400 px-2 py-2"
                  >
                    <Download /> <span>Tải xuống</span>
                  </Button>
                </div>
                <Button
                  size={"icon"}
                  className="h-6 w-6 text-[6px] text-white bg-gray-400 px-2 py-2"
                  variant={"secondary"}
                >
                  <Trash2 />
                </Button>
              </div>
            </div>
          </div>
        </li>
      </ul>

      {/* Phân trang danh sách công việc */}

      <ul className="flex justify-end gap-1 items-center mt-[40px] mb-14">
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
  );
}
