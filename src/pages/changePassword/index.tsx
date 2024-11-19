import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff } from "lucide-react";

export default function ChangePassword() {
  const [showCurrentPassword, setShowCurrentPassword] = React.useState(false);
  const [showNewPassword, setShowNewPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);

  return (
    <>
      <section className="flex flex-col gap-6">
        <div>
          <h3 className="text-[18px] leading-7 font-semibold mb-1">
            Đổi mật khẩu
          </h3>
          <p className="text-[14px] text-[#676767] leading-6">
            Hãy nhập mật khẩu hiện tại của bạn để thay đổi mật khẩu mới.
          </p>
        </div>
        <form className="flex flex-col gap-6">
          {/* Mật khẩu hiện tại */}
          <div className="flex items-center">
            <label
              className="min-w-[200px] font-semibold text-[14px] text-[#3D3D3D] leading-5"
              htmlFor="current-password"
            >
              Mật khẩu hiện tại
            </label>
            <div className="relative flex items-center flex-1">
              <Input
                id="current-password"
                type={showCurrentPassword ? "text" : "password"}
              />
              {showCurrentPassword ? (
                <Eye
                  size={20}
                  className="text-gray-600 cursor-pointer hover:text-gray-700 absolute right-4"
                  onClick={() => setShowCurrentPassword(false)}
                />
              ) : (
                <EyeOff
                  size={20}
                  className="text-gray-600 cursor-pointer hover:text-gray-700 absolute right-4"
                  onClick={() => setShowCurrentPassword(true)}
                />
              )}
            </div>
          </div>

          {/* Mật khẩu mới */}
          <div className="flex items-center">
            <label
              className="min-w-[200px] font-semibold text-[14px] text-[#3D3D3D] leading-5"
              htmlFor="new-password"
            >
              Mật khẩu mới
            </label>
            <div className="relative flex items-center flex-1">
              <Input
                id="new-password"
                type={showNewPassword ? "text" : "password"}
              />
              {showNewPassword ? (
                <Eye
                  size={20}
                  className="text-gray-600 cursor-pointer hover:text-gray-700 absolute right-4"
                  onClick={() => setShowNewPassword(false)}
                />
              ) : (
                <EyeOff
                  size={20}
                  className="text-gray-600 cursor-pointer hover:text-gray-700 absolute right-4"
                  onClick={() => setShowNewPassword(true)}
                />
              )}
            </div>
          </div>

          {/* Xác nhận mật khẩu mới */}
          <div className="flex items-center">
            <label
              className="min-w-[200px] font-semibold text-[14px] text-[#3D3D3D] leading-5"
              htmlFor="confirm-password"
            >
              Xác nhận mật khẩu mới
            </label>
            <div className="relative flex items-center flex-1">
              <Input
                id="confirm-password"
                type={showConfirmPassword ? "text" : "password"}
              />
              {showConfirmPassword ? (
                <Eye
                  size={20}
                  className="text-gray-600 cursor-pointer hover:text-gray-700 absolute right-4"
                  onClick={() => setShowConfirmPassword(false)}
                />
              ) : (
                <EyeOff
                  size={20}
                  className="text-gray-600 cursor-pointer hover:text-gray-700 absolute right-4"
                  onClick={() => setShowConfirmPassword(true)}
                />
              )}
            </div>
          </div>

          {/* Nút hành động */}
          <div className="flex gap-2 justify-end">
            <Button className="min-w-[120px] text-gray-700" variant={"outline"}>
              Hủy
            </Button>
            <Button className="min-w-[120px]" variant={"destructive"}>
              Cập nhật
            </Button>
          </div>
        </form>
      </section>
    </>
  );
}
