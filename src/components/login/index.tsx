"use client";

import { useState } from "react";
import { Input, Button } from 'antd';
import Link from "next/link";
import { LogIn, Lock, Mail } from "lucide-react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import InputWrapper from '@/components/form-flow/contact-information/input-wrapper';

interface UserType {
  email: string;
  password: string;
}

const Login = () => {
	const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
		const users = localStorage.getItem("users");

    if (users) {
      const parsedUsers = JSON.parse(users);
      
      const userExist = parsedUsers.find((user: UserType) => user.email === email);

      if (userExist) {
        router.push("/dashboard");
				localStorage.setItem("user", JSON.stringify({ email, password }));
      } else {
        toast.error("No user created with this information listed.");
      }
    } else {
      toast.error("No user created with this information.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md space-y-8 p-8 bg-white rounded-lg shadow-xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Welcome back</h2>
          <p className="mt-2 text-sm text-gray-600">
            Sign in to your account to continue
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div className="space-y-4">
            <div className="space-y-2">
							<InputWrapper label='Email' htmlFor='email'>
                <Mail className="absolute left-3 top-8 h-5 w-5 text-gray-400 z-40" />
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10 py-2"
                  required
                />
							</InputWrapper>
            </div>
            <div className="space-y-2">
							<InputWrapper label='Password' htmlFor='password'>
                <Lock className="absolute left-3 top-8 h-5 w-5 text-gray-400 z-40" />
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10 py-2"
                  required
                />
							</InputWrapper>
            </div>
          </div>

          <Button className="w-full bg-violet-400 text-white hover:bg-primary/90"  htmlType="submit">
            <LogIn className="mr-2 h-4 w-4" /> Sign in
          </Button>
        </form>

        <div className="mt-4 text-center space-y-2">
					<p className="text-sm text-gray-600 mb-6">
						{"Don't have an account? "}
            <Link className='text-violet-400 hover:text-primary/90' href='/signup'>
							Sign up
						</Link>
          </p>
					<Link href="/">
						<Button
							type="link"
							className="text-sm text-violet-400 hover:text-primary/90"
						>
							Back to home
						</Button>
					</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;