import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, CirclePlus, Ellipsis } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

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
import { Input } from "@/components/ui/input";

export default function CertificateManager() {
  const [date, setDate] = React.useState<Date>();
  const [isShowDialog, setIsShowDialog] = React.useState<boolean>(false);

  // Đóng cả Popover và AlertDialog
  const handleCloseDialog = () => {
    setIsShowDialog(false);
  };
  return (
    <>
      <section>
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-[18px] font-semibold leading-7 text-[#2D2C2C]">
              Danh sách Chứng chỉ
            </h3>
            <p className="text-[#676767] text-[14px] leading-6">
              Hãy xem và cập nhật chứng chỉ của bạn.{" "}
            </p>
          </div>

          <AlertDialog open={isShowDialog} onOpenChange={setIsShowDialog}>
            <AlertDialogTrigger>
              <Button
                className="bg-[#F8E9EA] text-[#AB1F24] hover:bg-red-100 font-semibold focus:bg-red-200 transition-all"
                variant={"destructive"}
              >
                <CirclePlus />
                <span>Thêm chứng chỉ</span>
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent className="w-[460px]">
              <AlertDialogHeader>
                <AlertDialogTitle className="text-[20px] font-semibold leading-[30px]">
                  Thêm chứng chỉ
                </AlertDialogTitle>
                <div className="border-b"></div>
                <AlertDialogDescription>
                  <form className="flex flex-col gap-6">
                    <div className="flex flex-col gap-2">
                      <label className="font-semibold text-black" htmlFor="">
                        Chứng chỉ/Bằng cấp
                      </label>
                      <Select>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Theme" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="light">Light</SelectItem>
                          <SelectItem value="dark">Dark</SelectItem>
                          <SelectItem value="system">System</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="font-semibold text-black" htmlFor="">
                        Xếp loại
                      </label>
                      <Input />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="font-semibold text-black" htmlFor="">
                        Thời hạn/Ngày cấp
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
                              format(date, "dd/MM/yyyy")
                            ) : (
                              <span>Chọn thời hạn/ngày cấp</span>
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
                    <div className="flex gap-4">
                      <Button
                        type="button"
                        variant={"outline"}
                        className="flex-1"
                        onClick={handleCloseDialog}
                      >
                        Hủy
                      </Button>
                      <Button
                        type="submit"
                        variant={"destructive"}
                        className="flex-1"
                      >
                        <CirclePlus />
                        <span>Thêm chứng chỉ</span>
                      </Button>
                    </div>
                  </form>
                </AlertDialogDescription>
              </AlertDialogHeader>
            </AlertDialogContent>
          </AlertDialog>
        </div>

        {/* Table - Danh sách chứng chỉ */}
        <Table>
          <TableHeader className="bg-[#FFF6F7] hover:bg-[#FFF6F7]">
            <TableRow className="hover:bg-[#FFF6F7]">
              <TableHead className="text-[#AB1F24] font-semibold">
                Số thứ tự
              </TableHead>
              <TableHead className="text-[#AB1F24] font-semibold">
                Loại chứng chỉ/Bằng cấp
              </TableHead>
              <TableHead className="text-[#AB1F24] font-semibold">
                Xếp loại
              </TableHead>
              <TableHead className="text-[#AB1F24] font-semibold">
                Thời hạn/Ngày cấp
              </TableHead>
              <TableHead className="text-[#AB1F24] font-semibold w-[100px]">
                Hành động
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium border-b">1</TableCell>
              <TableCell className="font-medium border-b">TOEIC</TableCell>
              <TableCell className="font-medium border-b">780/990</TableCell>
              <TableCell className="font-medium border-b">10/12/2025</TableCell>
              <TableCell className="font-medium border-b flex gap-2">
                <Button className="h-8" variant={"outline"} size={"sm"}>
                  Sửa
                </Button>
                <Button className="h-8" variant={"destructive"} size={"sm"}>
                  Xóa
                </Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium border-b">1</TableCell>
              <TableCell className="font-medium border-b">TOEIC</TableCell>
              <TableCell className="font-medium border-b">780/990</TableCell>
              <TableCell className="font-medium border-b">10/12/2025</TableCell>
              <TableCell className="font-medium border-b flex gap-2">
                <Button className="h-8" variant={"outline"} size={"sm"}>
                  Sửa
                </Button>
                <Button className="h-8" variant={"destructive"} size={"sm"}>
                  Xóa
                </Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium border-b">1</TableCell>
              <TableCell className="font-medium border-b">TOEIC</TableCell>
              <TableCell className="font-medium border-b">780/990</TableCell>
              <TableCell className="font-medium border-b">10/12/2025</TableCell>
              <TableCell className="font-medium border-b flex gap-2">
                <Button className="h-8" variant={"outline"} size={"sm"}>
                  Sửa
                </Button>
                <Button className="h-8" variant={"destructive"} size={"sm"}>
                  Xóa
                </Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium border-b">1</TableCell>
              <TableCell className="font-medium border-b">TOEIC</TableCell>
              <TableCell className="font-medium border-b">780/990</TableCell>
              <TableCell className="font-medium border-b">10/12/2025</TableCell>
              <TableCell className="font-medium border-b flex gap-2">
                <Button className="h-8" variant={"outline"} size={"sm"}>
                  Sửa
                </Button>
                <Button className="h-8" variant={"destructive"} size={"sm"}>
                  Xóa
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>

        {/* Phân trang danh sách công việc */}

        <ul className="flex justify-end gap-1 items-center mt-10">
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
