import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  CalendarDays,
  Contact,
  FileText,
  LockKeyhole,
  Star,
} from "lucide-react";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <>
      <menu className="h-[calc(100vh-80px)] w-[300px] border-r p-[32px]">
        <div className="flex gap-3">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="flex flex-col justify-between">
            <h3 className="text-[18px] font-semibold leading-5">Ngọ Văn Quý</h3>
            <p className="text-[#676767] text-[14px] leading-5">
              phuquy1232@gmail.com
            </p>
          </div>
        </div>

        <div className="border-b my-6"></div>

        {/* Tab menu */}
        <div className="flex flex-col" id="menu-profile">
          <NavLink
            end
            to="/profile"
            className="px-[24px] transition-all text-[#3D3D3D] font-semibold py-4 flex items-center gap-3 hover:bg-[#FFF6F7] rounded-lg"
          >
            <Contact size={20} />
            <span>Thông tin cá nhân</span>
          </NavLink>
          <NavLink
            to="/profile/cv-manager"
            className="px-[24px] transition-all text-[#3D3D3D] font-semibold py-4 flex items-center gap-3 hover:bg-[#FFF6F7] rounded-lg"
          >
            <FileText size={20} />
            <span>Quản lý CV</span>
          </NavLink>
          <NavLink
            to="/profile/certificate-manager"
            className="px-[24px] transition-all text-[#3D3D3D] font-semibold py-4 flex items-center gap-3 hover:bg-[#FFF6F7] rounded-lg"
          >
            <Star size={20} />
            <span>Quản lý chứng chỉ</span>
          </NavLink>
          <NavLink
            to="/profile/interview-booking"
            className="px-[24px] transition-all text-[#3D3D3D] font-semibold py-4 flex items-center gap-3 hover:bg-[#FFF6F7] rounded-lg"
          >
            <CalendarDays size={20} />
            <span>Lịch phỏng vấn</span>
          </NavLink>
          <NavLink
            to="/profile/change-password"
            className="px-[24px] transition-all text-[#3D3D3D] font-semibold py-4 flex items-center gap-3 hover:bg-[#FFF6F7] rounded-lg"
          >
            <LockKeyhole size={20} />
            <span>Đổi mật khẩu</span>
          </NavLink>
        </div>
      </menu>
    </>
  );
}
