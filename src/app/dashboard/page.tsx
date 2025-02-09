import { Card } from 'antd';
import { FileText, Pencil, MessageSquareReply } from 'lucide-react';
import Link from "next/link";

function Title() {
	return (
		<h3 className='gap-2 flex'><FileText className='text-violet-400' /> Client Inquiry</h3>
	);
}

function Edit() {
	return (
		<Link href="/dashboard/forms/1s1s5/edit"><div className='gap-1 flex justify-center'><Pencil /> Edit</div></Link>
	);
}

function ViewResponses() {
	return (
		<Link href="/dashboard/forms/1s1s5/responses"><div className='gap-1 flex justify-center'><MessageSquareReply /> View Responses</div></Link>
	);
}

export default function Dashboard() {
	return (
    <main className='relative bg-white min-h-screen py-6'>
      <div className='max-w-6xl'>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
					<li>
						<Card
							title={<Title />}
							style={{ width: 300 }}
							actions={[
								<Edit key='edit' />,
								<ViewResponses key='responses' />,
							]}
						>
							<p>12 responses</p>
							<p>Last updated: 2025-02-09</p>
						</Card>
					</li>
        </ul>
      </div>
    </main>
  );
}
