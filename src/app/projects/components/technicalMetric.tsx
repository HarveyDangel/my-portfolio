import React from "react";

// 1. Define the TypeScript Types
export interface TechMetricsData {
	schema: { title: string; metric: string; details: string };
	architecture: { title: string; metric: string; details: string };
	security: { title: string; metric: string; details: string };
	responsiveness: { title: string; metric: string; details: string };
}



export default function TechMetrics({ metrics }: { metrics: TechMetricsData }) {
	// We turn the object into an array to loop through it
	const metricsArray = Object.values(metrics);

	return (
		<div className="rounded-3xl bg-gray-900 p-6 md:p-8 flex flex-col justify-between text-white shadow-xl shadow-slate-300/10">
			<div>
				{/* Label and Title */}
				<span className="text-[10px] font-bold uppercase tracking-widest text-amber-400 mb-2 block">
					Key Metrics
				</span>
				<h3 className="text-xl font-bold text-white mb-6">
					Software Integrity
				</h3>
			</div>

			{/* The 2x2 Metrics Grid */}
			<div className="grid lg:grid-cols-2 gap-x-6 gap-y-6">
				{metricsArray.map((item, index) => (
					<div key={index} className="flex flex-col">
						{/* The Metric Title (e.g., Security Audit) */}
						<p className="text-[10px] uppercase tracking-wider text-slate-400 font-medium">
							{item.title}
						</p>

						{/* The "KPI" (e.g., 4 Layer Protection) */}
						<p className="text-2xl font-extrabold text-blue-100 tracking-tight leading-none mt-1">
							{item.metric}
						</p>

						{/* The Technical Detail (e.g., SQL Injection prevention) */}
						<p className="text-[11px] md:text-xs text-slate-300 leading-relaxed mt-2 text-balance opacity-80">
							{item.details}
						</p>
					</div>
				))}
			</div>
		</div>
	);
}
