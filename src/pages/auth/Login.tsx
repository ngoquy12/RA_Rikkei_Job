import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Link } from "react-router-dom";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen w-full flex flex-col justify-center lg:flex-row">
      {/* Left Side - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-white">
        <div className="w-full max-w-md space-y-8">
          {/* Logo */}
          <div className="flex justify-start">
            <Link to="/">
              <img
                src="/images/logo-rikkei-job.png"
                alt="Rikkei Jobs Logo"
                className="h-10"
              />
            </Link>
          </div>

          {/* Login Form */}
          <div className="space-y-6">
            <div>
              <h2 className="text-[24px] lg:text-[32px] font-bold text-gray-900">
                Đăng nhập
              </h2>
              <p className="mt-2 text-[14px] lg:text-[16px] md:text-[16px] text-gray-600">
                Cùng phát triển con đường sự nghiệp với Rikkei Jobs
              </p>
            </div>

            <form className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@company.com"
                  className="w-full h-10"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Mật khẩu</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    className="w-full px-3 py-2 border rounded-md"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Checkbox id="remember" />
                  <Label
                    htmlFor="remember"
                    className="ml-2 text-sm text-gray-600"
                  >
                    Ghi nhớ đăng nhập
                  </Label>
                </div>
                <a
                  href="#"
                  className="text-sm font-semibold text-[#BC2228] hover:text-red-600"
                >
                  Quên mật khẩu?
                </a>
              </div>

              <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
                Đăng nhập
              </Button>

              <div className="text-center text-sm text-gray-600">
                Bạn chưa có tài khoản?{" "}
                <Link
                  to="/register"
                  className="text-red-600 hover:text-red-500 font-semibold"
                >
                  Đăng ký
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="hidden lg:block lg:w-1/2 relative overflow-hidden">
        <img
          src="/images/login-image.png"
          alt="Rikkei Jobs Team"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
