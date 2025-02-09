import { Card } from 'antd';
import { FileText, Pencil, MessageSquareReply } from 'lucide-react';

function Title() {
	return (
		<h3 className='gap-2 flex'><FileText className='text-violet-400' /> Client Inquiry</h3>
	);
}

function Edit() {
	return (
		<h3 className='gap-1 flex justify-center'><Pencil /> Edit</h3>
	);
}

function ViewResponses() {
	return (
		<h3 className='gap-1 flex justify-center'><MessageSquareReply /> View Responses</h3>
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
								<Edit />,
								<ViewResponses />,
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
