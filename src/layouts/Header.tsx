import { Link, NavLink } from "react-router-dom";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Header() {
  return (
    <>
      <header className="sticky top-0 z-30 w-full h-[64px] transition-all lg:h-[80px] bg-white px-8 py-5 flex items-center justify-between border-b shadow-sm">
        <section className="flex gap-12 items-center">
          <Link to="/">
            <img
              src="/images/logo-rikkei-job.png"
              className="h-6 md:h-8 lg:h-8 object-cover transition-all"
              alt=""
            />
          </Link>

          <ul className="gap-6 text-[12px] hidden lg:flex md:flex md:text-[14px] lg:text-[16px]">
            <li>
              <NavLink className="font-semibold text-[#AB1F24]" to="#">
                Việc làm
              </NavLink>
            </li>
            <li>
              <NavLink to="/profile">Hồ sơ & CV</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Giới thiệu</NavLink>
            </li>
            <li>
              <NavLink to="/about-us">Liên hệ</NavLink>
            </li>
          </ul>
        </section>

        <section className=" items-center h-0 outline-none gap-3 hidden lg:flex md:flex">
          <img src="/images/flag-vn.png" alt="Flag VN" className="size-5" />
          <Select>
            <SelectTrigger className="border-none text-start w-[60px] px-0">
              <SelectValue placeholder="VN" />
            </SelectTrigger>
            <SelectContent className="text-start w-[60px]">
              <SelectItem className="cursor-pointer" value="light">
                VN
              </SelectItem>
              <SelectItem className="cursor-pointer" value="dark">
                EN
              </SelectItem>
              <SelectItem className="cursor-pointer" value="system">
                JP
              </SelectItem>
            </SelectContent>
          </Select>
          <Link to="/register">
            <Button className="h-10" variant={"ghost"}>
              Đăng ký
            </Button>
          </Link>

          <Link to="/login">
            <Button
              className="h-10 bg-[#AB1F24] hover:bg-red-700"
              variant={"destructive"}
            >
              Đăng nhập
            </Button>
          </Link>
        </section>

        <Sheet>
          <SheetTrigger className="block absolute right-6 lg:hidden md:hidden cursor-pointer text-slate-800 hover:text-slate-900 transition-all">
            <Menu size={32} className="" />
          </SheetTrigger>
          <SheetContent side={"left"}>
            <SheetHeader>
              <SheetTitle>Are you absolutely sure?</SheetTitle>
              <SheetDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </header>
    </>
  );
}
