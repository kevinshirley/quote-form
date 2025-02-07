import { Button } from 'antd';
import Link from "next/link";
import { LogIn } from "lucide-react";

const Hero = () => {

  return (
    <div className="relative overflow-hidden">
      <div className="hero-gradient absolute inset-0 opacity-10" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="text-center">
					<Link href="/login">
						<div className="flex justify-end mb-4">
							<Button
								variant="outlined"
								className="gap-2 shadow-lg hover:shadow-xl transition-all duration-200 bg-white hover:bg-violet-400 hover:text-white border border-violet-400/20 text-violet-400"
							>
								<LogIn className="h-4 w-4" />
								Sign In
							</Button>
						</div>
					</Link>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 mb-8 animate-fade-in">
            Create Quote Forms
            <span className="text-violet-400 block mt-2">In Minutes</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-xl mx-auto animate-fade-in">
            Build professional quote forms without coding. Drag, drop, and collect responses instantly.
          </p>
          <div className="mt-10 flex justify-center gap-4 animate-fade-in">
            <Link href="/signup">
							<Button size='large' className="bg-violet-400 text-white hover:bg-violet-400/90">
								Get Started Free
							</Button>
            </Link>
            <Button size='large'>
              Watch Demo
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;