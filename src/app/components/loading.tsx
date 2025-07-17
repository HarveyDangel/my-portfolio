export default function Loading() {
	return (
		<div className="fixed inset-0 flex items-center justify-center bg-white dark:bg-gray-900 z-50">
			<div className="flex flex-col items-center">
				<div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
				<h2 className="mt-4 text-xl font-semibold text-gray-700 dark:text-gray-200">
					Loading...
				</h2>
			</div>
		</div>
	);
}