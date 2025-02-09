"use client";

import { useState } from "react";
import { Input, Button } from 'antd';
import Link from "next/link";
import { LogIn, Lock, Mail, User } from "lucide-react";
import { toast } from "sonner";
import InputWrapper from '@/components/form-flow/contact-information/input-wrapper';

interface UserType {
  email: string;
  password: string;
}

const Login = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const users = localStorage.getItem("users");

    if (users) {
      const parsedUsers = JSON.parse(users);
      
      const userExist = parsedUsers.find((user: UserType) => user.email === email.trim());

      if (userExist) {
        toast.error("User exist already.");
      } else {
        const updatedUsers = [...parsedUsers, { firstName: firstName.trim(), lastName: lastName.trim(), email: email.trim(), password }];
        localStorage.setItem("users", JSON.stringify(updatedUsers));
        toast.success("Successfully signed up!");
        setFirstName('');
        setLastName('');
        setEmail('');
        setPassword('');
      }
    } else {
      localStorage.setItem("users", JSON.stringify([{ firstName: firstName.trim(), lastName: lastName.trim(), email: email.trim(), password }]));
      toast.success("Successfully signed up!");
      setFirstName('');
      setLastName('');
      setEmail('');
      setPassword('');
    }

  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md space-y-8 p-8 bg-white rounded-lg shadow-xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Create an account</h2>
          <p className="mt-2 text-sm text-gray-600">
            Sign up to start creating forms
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div className="space-y-4">
            <div className="space-y-2">
							<InputWrapper label='First Name' htmlFor='firstName'>
                <User className="absolute left-3 top-8 h-5 w-5 text-gray-400 z-40" />
                <Input
                  id="firstName"
                  type="text"
                  placeholder="Your first name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="pl-10 py-2"
                  required
                />
							</InputWrapper>
            </div>
            <div className="space-y-2">
							<InputWrapper label='Last Name' htmlFor='lastName'>
                <User className="absolute left-3 top-8 h-5 w-5 text-gray-400 z-40" />
                <Input
                  id="lastName"
                  type="text"
                  placeholder="Your last name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="pl-10 py-2"
                  required
                />
							</InputWrapper>
            </div>
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

          <Button className="w-full bg-violet-400 text-white hover:bg-primary/90" htmlType="submit">
            <LogIn className="mr-2 h-4 w-4" /> Sign up
          </Button>
        </form>

        <div className="mt-4 text-center space-y-2">
					<p className="text-sm text-gray-600 mb-6">
            {"Already have an account? "}
            <Link className='text-violet-400 hover:text-primary/90' href='/login'>
							Sign in
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