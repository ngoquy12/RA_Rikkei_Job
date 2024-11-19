import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Camera } from "lucide-react";
import * as React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Profile() {
  const [date, setDate] = React.useState<Date>();
  return (
    <>
      <section className="flex gap-[96px] w-full">
        <div className="max-w-[200px]">
          <h3 className="mb-6 text-[18px] font-semibold leading-7">
            Ảnh đại diện
          </h3>
          <div className="relative">
            <div className="size-[200px] rounded-full object-cover border bg-[url('https://mentori.vn/upload/images/nch1678762023.jpg')] bg-no-repeat bg-cover"></div>
            <Button
              size={"icon"}
              variant={"outline"}
              className="rounded-full absolute right-3 bottom-0"
            >
              <Camera className="text-[#848484]" />
            </Button>
          </div>
          <p className="mt-6 text-[12px] text-center leading-4 font-normal text-[#676767]">
            Kích thước ảnh nhỏ nhất: 200 x 200px, định dạng PNG hoặc JPG
          </p>
        </div>
        <div className="w-full">
          <h3 className="mb-2 text-[18px] font-semibold leading-7">
            Cập nhật thông tin cá nhân
          </h3>
          <p className="text-[16px] text-[#676767] leading-6 font-normal">
            Quản lý thông tin hồ sơ để bảo mật tài khoản
          </p>

          <form className="mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label
                  className="text-[14px] font-semibold text-[#676767] leading-5"
                  htmlFor=""
                >
                  Tên đăng nhập
                </label>
                <Input />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  className="text-[14px] font-semibold text-[#676767] leading-5"
                  htmlFor=""
                >
                  Tên
                </label>
                <Input />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  className="text-[14px] font-semibold text-[#676767] leading-5"
                  htmlFor=""
                >
                  Email
                </label>
                <Input />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  className="text-[14px] font-semibold text-[#676767] leading-5"
                  htmlFor=""
                >
                  Ngày sinh
                </label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !date && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? (
                        format(date, "mm/MM/yyyy")
                      ) : (
                        <span>Chọn ngày sinh</span>
                      )}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
              <div className="flex flex-col gap-2">
                <label
                  className="text-[14px] font-semibold text-[#676767] leading-5"
                  htmlFor=""
                >
                  Số điện thoại
                </label>
                <Input />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  className="text-[14px] font-semibold text-[#676767] leading-5"
                  htmlFor=""
                >
                  Giới tính
                </label>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Nam" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem
                      className="cursor-pointer transition-all"
                      value="male"
                    >
                      Nam
                    </SelectItem>
                    <SelectItem
                      className="cursor-pointer transition-all"
                      value="female"
                    >
                      Nữ
                    </SelectItem>
                    <SelectItem
                      className="cursor-pointer transition-all"
                      value="other"
                    >
                      Khác
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="flex justify-end gap-4 mt-8">
              <Button className="min-w-[120px]" variant={"outline"}>
                Hủy
              </Button>
              <Button className="min-w-[120px]" variant={"destructive"}>
                Cập nhật
              </Button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
